import { Logger } from "@idea-fragments/logger-js"
import {
  mdiArrowLeft,
  mdiCached,
  mdiCameraRetakeOutline,
  mdiCheck,
  mdiCircleSlice8,
  mdiMagnify,
} from "@mdi/js"
import { IconButton } from "components/forms/IconButton"
import { FlexBox } from "components/layout/FlexBox"
import { TranslucentLoader } from "components/loaders/TranslucentLoader"
import { useLoaderV2 } from "hooks/useLoaderV2"
import CameraPhoto, {
  FACING_MODES,
  IMAGE_TYPES,
} from "jslib-html5-camera-photo"
import { isBoolean } from "lodash"
import {
  FC,
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react"
import styled, {
  css,
  FlattenInterpolation,
  ThemeProps,
} from "styled-components"
import { SPACINGS } from "styles/spacings"
import { useTheme } from "styles/theme/useTheme"
import {
  isEmpty,
  isNotEmpty,
  nextItemIndex,
  takeOutItem,
} from "utils/arrayHelpers"
import { DO_NOTHING } from "utils/functionHelpers"
import {
  DocumentCorners,
  DocumentEdgeData,
  useDocumentEdgeDetection,
} from "hooks/useDocumentEdgeDetection"
import {
  ExposureAssessment,
  ExposureData,
  EXPOSURE_ASSESSMENTS,
  useExposureAnalysis,
} from "hooks/useExposureAnalysis"
import {
  GlareAssessment,
  GlareData,
  GLARE_ASSESSMENTS,
  GLARE_LEVELS,
  useGlareDetection,
} from "hooks/useGlareDetection"
import {
  CAMERA_LIGHT_LEVEL_ASSESSMENTS,
  CAMERA_LIGHT_LEVELS,
  LightLevelAssessment,
  LightLevelData,
  useLightLevelDetection,
} from "hooks/useLightLevelDetection"
import {
  MotionBlurAssessment,
  MotionBlurData,
  MOTION_BLUR_ASSESSMENTS,
  MOTION_BLUR_LEVELS,
  useMotionBlurDetection,
} from "hooks/useMotionBlurDetection"
import {
  NoiseAssessment,
  NoiseData,
  NOISE_ASSESSMENTS,
  NOISE_LEVELS,
  useNoiseDetection,
} from "hooks/useNoiseDetection"
import {
  PerspectiveAssessment,
  PerspectiveData,
  PERSPECTIVE_ASSESSMENTS,
  PERSPECTIVE_LEVELS,
  usePerspectiveDetection,
} from "hooks/usePerspectiveDetection"
import {
  TEXT_CONTRAST_LEVELS,
  TEXT_QUALITY_ASSESSMENTS,
  TEXT_SHARPNESS_LEVELS,
  TextQualityAssessment,
  TextQualityData,
  useTextQualityDetection,
} from "hooks/useTextQualityDetection"

export {
  CAMERA_LIGHT_LEVEL_ASSESSMENTS,
  CAMERA_LIGHT_LEVELS,
  EXPOSURE_ASSESSMENTS,
  GLARE_ASSESSMENTS,
  GLARE_LEVELS,
  MOTION_BLUR_ASSESSMENTS,
  MOTION_BLUR_LEVELS,
  NOISE_ASSESSMENTS,
  NOISE_LEVELS,
  PERSPECTIVE_ASSESSMENTS,
  PERSPECTIVE_LEVELS,
  TEXT_CONTRAST_LEVELS,
  TEXT_QUALITY_ASSESSMENTS,
  TEXT_SHARPNESS_LEVELS,
}
export type {
  DocumentCorners,
  DocumentEdgeData,
  ExposureAssessment,
  ExposureData,
  GlareAssessment,
  GlareData,
  LightLevelAssessment,
  LightLevelData,
  MotionBlurAssessment,
  MotionBlurData,
  NoiseAssessment,
  NoiseData,
  PerspectiveAssessment,
  PerspectiveData,
  TextQualityAssessment,
  TextQualityData,
}

export type PhotoData = {
  dataUri: string
  file: File
}

export type PhotoPreviewData = {
  documentEdgeData?: DocumentEdgeData | null
  exposureData?: ExposureData | null
  glareData?: GlareData | null
  motionBlurData?: MotionBlurData | null
  noiseData?: NoiseData | null
  perspectiveData?: PerspectiveData | null
  previewSrc: string
  textQualityData?: TextQualityData | null
}

export type CameraCapabilityRange = {
  max?: number
  min?: number
  step?: number
}

export type CameraCapabilities = {
  aspectRatio?: CameraCapabilityRange
  brightness?: CameraCapabilityRange
  colorTemperature?: CameraCapabilityRange
  contrast?: CameraCapabilityRange
  deviceId?: string
  exposureCompensation?: CameraCapabilityRange
  exposureMode?: string[]
  exposureTime?: CameraCapabilityRange
  facingMode?: string[]
  focusDistance?: CameraCapabilityRange
  focusMode?: string[]
  frameRate?: CameraCapabilityRange
  groupId?: string
  height?: CameraCapabilityRange
  resizeMode?: string[]
  saturation?: CameraCapabilityRange
  sharpness?: CameraCapabilityRange
  whiteBalanceMode?: string[]
  width?: CameraCapabilityRange
  zoom?: CameraCapabilityRange
}

export type CameraSettings = {
  aspectRatio?: number
  brightness?: number
  colorTemperature?: number
  contrast?: number
  deviceId?: string
  exposureCompensation?: number
  exposureMode?: string
  exposureTime?: number
  facingMode?: string
  focusDistance?: number
  focusMode?: string
  frameRate?: number
  groupId?: string
  height?: number
  resizeMode?: string
  saturation?: number
  sharpness?: number
  whiteBalanceMode?: string
  width?: number
  zoom?: number
}

export type MegapixelInfo = {
  current: string
  maximum: string
}

export type CameraCapabilitiesData = {
  capabilities: CameraCapabilities
  currentSettings: CameraSettings
  deviceId?: string
  label: string
  megapixels: MegapixelInfo
}

export type PhotoBoothProps = {
  documentMode?: boolean
  onCameraCapabilitiesDetected?: (data: CameraCapabilitiesData) => void
  onDocumentEdgeDetected?: (data: DocumentEdgeData) => void
  onExposureDetected?: (data: ExposureData) => void
  onGlareDetected?: (data: GlareData) => void
  onHideCamera?: () => void
  onLightLevelChange?: (data: LightLevelData) => void
  onMotionBlurDetected?: (data: MotionBlurData) => void
  onNoiseDetected?: (data: NoiseData) => void
  onPerspectiveDetected?: (data: PerspectiveData) => void
  onPreviewChanged?: (data: PhotoPreviewData) => void
  onSilentError?: (error: Error) => void
  onSubmit: (data: PhotoData) => Promise<void>
  onTextQualityDetected?: (data: TextQualityData) => void
  open?: boolean
  skipOcrDetection?: boolean
  trigger?: (onClick: () => void) => ReactNode
}

const logger = new Logger("PhotoBooth")

export const PhotoBooth: FC<PhotoBoothProps> = ({
  documentMode = false,
  onCameraCapabilitiesDetected,
  onDocumentEdgeDetected,
  onExposureDetected,
  onGlareDetected,
  onHideCamera = DO_NOTHING,
  onLightLevelChange,
  onMotionBlurDetected,
  onNoiseDetected,
  onPerspectiveDetected,
  onPreviewChanged,
  onSilentError = DO_NOTHING,
  onSubmit,
  onTextQualityDetected,
  open,
  skipOcrDetection = false,
  trigger,
}) => {
  if (isBoolean(open) && trigger)
    throw new Error(
      "PhotoBooth cannot have `open` and a `trigger` set at the same time",
    )

  const theme = useTheme()
  const [cameraIds, setCameraIds] = useState<string[]>([])
  const [cameraZoomCapability, setCameraZoomCapability] =
    useState<CameraCapabilityRange | null>(null)
  const [currentCameraIdIndex, setCurrentCameraIdIndex] = useState<number>(0)
  const [currentCameraZoom, setCurrentCameraZoom] = useState<number>(1)
  const [_isCameraVisible, setIsCameraVisibleTo] = useState(false)
  const [isZoomModeActive, setIsZoomModeActive] = useState(false)
  const [panPosition, setPanPosition] = useState({ x: 0, y: 0 })
  const [previewSrc, setPreviewSrc] = useState<string>()
  const [zoomScale, setZoomScale] = useState(1)

  const cameraPhoto = useRef<CameraPhoto>()
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const previewContainerRef = useRef<HTMLDivElement>(null)
  const previewRef = useRef<HTMLImageElement>(null)
  const touchStateRef = useRef<{
    initialDistance: number | null
    initialScale: number
    initialPan: { x: number; y: number }
    lastPan: { x: number; y: number }
    isPinching: boolean
  }>({
    initialDistance: null,
    initialScale: 1,
    initialPan: { x: 0, y: 0 },
    lastPan: { x: 0, y: 0 },
    isPinching: false,
  })
  const viewFinderRef = useRef<HTMLVideoElement>(null)

  const isCameraVisible = useMemo<boolean>(() => {
    return open ?? _isCameraVisible
  }, [_isCameraVisible, open])

  const { withLoading, isLoading } = useLoaderV2()
  const { withLoading: withSubmitLoading, isLoading: isSubmitting } =
    useLoaderV2()

  const clearPhoto = useCallback(() => {
    setPreviewSrc(undefined)
    setZoomScale(1)
    setPanPosition({ x: 0, y: 0 })
    setIsZoomModeActive(false)
  }, [])

  const getDeviceCameraIds = useCallback(async () => {
    if (isNotEmpty(cameraIds)) return

    const cameras: MediaDeviceInfo[] =
      await cameraPhoto.current!.enumerateCameras()
    const foundIds = cameras.map((c) => c.deviceId).reverse()
    logger.writeInfo("cameras", cameras)

    if (isEmpty(foundIds)) foundIds.concat([FACING_MODES.ENVIRONMENT])
    setCameraIds(foundIds)
  }, [cameraIds])

  const showCamera = useCallback(() => {
    setIsCameraVisibleTo(true)
  }, [])

  const removeCameraId = useCallback(() => {
    setCameraIds((prevState) => takeOutItem(prevState, currentCameraIdIndex))
  }, [currentCameraIdIndex])

  const applyZoom = useCallback(async (zoomLevel: number) => {
    const stream = cameraPhoto.current?.stream
    if (!stream) return

    const videoTrack = stream.getVideoTracks()[0]
    if (!videoTrack) return

    const capabilities = videoTrack.getCapabilities() as any

    // Check if zoom is supported
    if (capabilities.zoom) {
      const { min = 1, max = 1 } = capabilities.zoom
      const boundedZoom = Math.max(min, Math.min(max, zoomLevel))

      try {
        // Apply the zoom constraint
        // Use type assertion for zoom property not in TypeScript 4.6 definitions
        await videoTrack.applyConstraints({
          advanced: [{ zoom: boundedZoom } as any],
        })
        setCurrentCameraZoom(boundedZoom)
        logger.writeInfo("Applied zoom", { zoomLevel: boundedZoom })
      } catch (error) {
        logger.writeError("Failed to apply zoom", error)
      }
    }
  }, [])

  // Use detection hooks
  const { analyzeDocumentEdges } = useDocumentEdgeDetection()
  const { analyzeExposure } = useExposureAnalysis()
  const { analyzeGlare } = useGlareDetection()
  const { analyzeLightLevel } = useLightLevelDetection()
  const { analyzeMotionBlur, reset: resetMotionBlur } = useMotionBlurDetection()
  const { analyzeNoise } = useNoiseDetection()
  const { analyzePerspective } = usePerspectiveDetection()
  const { analyzeTextQuality, isOCRReady } = useTextQualityDetection({
    skipOcrDetection,
  })

  const logCameraCapabilities = useCallback(async () => {
    const stream = cameraPhoto.current?.stream
    if (!stream) return

    const videoTrack = stream.getVideoTracks()[0]
    if (!videoTrack) return

    const capabilities = videoTrack.getCapabilities()
    const settings = videoTrack.getSettings()

    // Store zoom capabilities
    const capabilitiesAny = capabilities as any
    const settingsAny = settings as any
    if (capabilitiesAny.zoom) {
      setCameraZoomCapability(capabilitiesAny.zoom)
      setCurrentCameraZoom(settingsAny.zoom || 1)
    } else {
      setCameraZoomCapability(null)
      setCurrentCameraZoom(1)
    }

    // Calculate megapixels
    const currentWidth = settings.width || 0
    const currentHeight = settings.height || 0
    const megapixels = ((currentWidth * currentHeight) / 1000000).toFixed(2)

    const maxWidth = capabilities.width?.max || 0
    const maxHeight = capabilities.height?.max || 0
    const maxMegapixels = ((maxWidth * maxHeight) / 1000000).toFixed(2)

    // Get light level - capture current frame as base64
    const video = viewFinderRef.current
    const canvas = canvasRef.current
    let lightLevelData: LightLevelData | null = null

    if (video && canvas) {
      const context = canvas.getContext("2d")
      if (context) {
        canvas.width = video.videoWidth
        canvas.height = video.videoHeight
        context.drawImage(video, 0, 0, canvas.width, canvas.height)
        const base64Image = canvas.toDataURL("image/png")
        lightLevelData = await analyzeLightLevel(base64Image)
      }
    }

    // Call callback with light level data
    if (lightLevelData && onLightLevelChange) {
      onLightLevelChange(lightLevelData)
    }

    // Prepare camera capabilities data
    // Use type assertions for newer properties not in TypeScript's built-in definitions

    const cameraCapabilitiesData: CameraCapabilitiesData = {
      capabilities: {
        aspectRatio: capabilities.aspectRatio,
        brightness: capabilitiesAny.brightness,
        colorTemperature: capabilitiesAny.colorTemperature,
        contrast: capabilitiesAny.contrast,
        deviceId: capabilitiesAny.deviceId,
        exposureCompensation: capabilitiesAny.exposureCompensation,
        exposureMode: capabilitiesAny.exposureMode,
        exposureTime: capabilitiesAny.exposureTime,
        facingMode: capabilities.facingMode,
        focusDistance: capabilitiesAny.focusDistance,
        focusMode: capabilitiesAny.focusMode,
        frameRate: capabilities.frameRate,
        groupId: capabilitiesAny.groupId,
        height: capabilities.height,
        resizeMode: capabilitiesAny.resizeMode,
        saturation: capabilitiesAny.saturation,
        sharpness: capabilitiesAny.sharpness,
        whiteBalanceMode: capabilitiesAny.whiteBalanceMode,
        width: capabilities.width,
        zoom: capabilitiesAny.zoom,
      },
      currentSettings: {
        aspectRatio: settings.aspectRatio,
        brightness: settingsAny.brightness,
        colorTemperature: settingsAny.colorTemperature,
        contrast: settingsAny.contrast,
        deviceId: settings.deviceId,
        exposureCompensation: settingsAny.exposureCompensation,
        exposureMode: settingsAny.exposureMode,
        exposureTime: settingsAny.exposureTime,
        facingMode: settings.facingMode,
        focusDistance: settingsAny.focusDistance,
        focusMode: settingsAny.focusMode,
        frameRate: settings.frameRate,
        groupId: settingsAny.groupId,
        height: settings.height,
        resizeMode: settingsAny.resizeMode,
        saturation: settingsAny.saturation,
        sharpness: settingsAny.sharpness,
        whiteBalanceMode: settingsAny.whiteBalanceMode,
        width: settings.width,
        zoom: settingsAny.zoom,
      },
      deviceId: videoTrack.getSettings().deviceId,
      label: videoTrack.label,
      megapixels: {
        current: `${megapixels} MP (${currentWidth}x${currentHeight})`,
        maximum: `${maxMegapixels} MP (${maxWidth}x${maxHeight})`,
      },
    }

    // Call callback with camera capabilities data
    if (onCameraCapabilitiesDetected) {
      onCameraCapabilitiesDetected(cameraCapabilitiesData)
    }

    logger.writeInfo("Camera Capabilities", {
      ...cameraCapabilitiesData,
      lightLevel: lightLevelData
        ? {
            brightnessPercentage: `${lightLevelData.brightnessPercentage}%`,
            rawValue: lightLevelData.rawValue,
            status: lightLevelData.status,
          }
        : "Not available",
    })
  }, [analyzeLightLevel, onCameraCapabilitiesDetected, onLightLevelChange])

  const startCamera = useCallback(async () => {
    const cameraId = cameraIds[currentCameraIdIndex]
    try {
      // @ts-ignore
      await withLoading(cameraPhoto.current!.startCamera(cameraId))
      // Wait for video to render first frame before logging capabilities
      setTimeout(() => {
        logCameraCapabilities()
      }, 500)
    } catch (e) {
      if (!(e as Error).message.includes("Could not start video source"))
        throw e
      onSilentError(
        new Error(`Could not start video source for camera: ${cameraId}`),
      )
      removeCameraId()
    }
  }, [
    cameraIds,
    currentCameraIdIndex,
    logCameraCapabilities,
    onSilentError,
    removeCameraId,
    withLoading,
  ])

  const stopCamera = useCallback(async () => {
    try {
      await withLoading(cameraPhoto.current!.stopCamera())
    } catch (e) {
      if (!(e as Error).message.includes("no stream to stop")) throw e
    }
  }, [withLoading])

  const hideCamera = useCallback(async () => {
    if (!cameraPhoto.current?.stream) return
    await stopCamera().then()
    setIsCameraVisibleTo(false)
    onHideCamera()
  }, [onHideCamera, stopCamera])

  const submitPhoto = useCallback(async () => {
    const blob = await (await fetch(previewSrc!)).blob()
    const file = new File([blob], "image.png")

    try {
      await withSubmitLoading(onSubmit({ file, dataUri: previewSrc! }))
    } finally {
      clearPhoto()
      hideCamera().then()
    }
  }, [clearPhoto, hideCamera, onSubmit, previewSrc, withSubmitLoading])

  const switchCamera = useCallback(async () => {
    const nextIdIndex = nextItemIndex(cameraIds, currentCameraIdIndex)
    setCurrentCameraIdIndex(nextIdIndex)
    // Reset zoom when switching cameras
    setCurrentCameraZoom(1)
    setIsZoomModeActive(false)
  }, [cameraIds, currentCameraIdIndex])

  const takePhoto = useCallback(() => {
    const dataUri = cameraPhoto.current!.getDataUri({
      imageCompression: 0.95,
      imageType: IMAGE_TYPES.PNG,
      isImageMirror: false,
      sizeFactor: 1,
    })
    setPreviewSrc(dataUri)
  }, [])

  // Periodically analyze image quality while camera is active
  useEffect(() => {
    if (!isCameraVisible || previewSrc) return

    // Check if any detection callback is provided
    const hasAnyCallback =
      onTextQualityDetected ||
      onMotionBlurDetected ||
      onGlareDetected ||
      onExposureDetected ||
      onNoiseDetected ||
      onDocumentEdgeDetected ||
      onPerspectiveDetected

    if (!hasAnyCallback) return

    const intervalId = setInterval(async () => {
      const video = viewFinderRef.current
      const canvas = canvasRef.current
      if (!video || !canvas || !cameraPhoto.current?.stream) return

      // Capture current frame as base64
      const context = canvas.getContext("2d")
      if (!context) return

      canvas.width = video.videoWidth
      canvas.height = video.videoHeight
      context.drawImage(video, 0, 0, canvas.width, canvas.height)
      const base64Image = canvas.toDataURL("image/png")

      // Run all detections in parallel
      const detections = await Promise.all([
        onTextQualityDetected && isOCRReady
          ? analyzeTextQuality(base64Image)
          : null,
        onMotionBlurDetected ? analyzeMotionBlur(base64Image) : null,
        onGlareDetected ? analyzeGlare(base64Image) : null,
        onExposureDetected ? analyzeExposure(base64Image) : null,
        onNoiseDetected ? analyzeNoise(base64Image) : null,
        onDocumentEdgeDetected && documentMode
          ? analyzeDocumentEdges(base64Image)
          : null,
        onPerspectiveDetected && documentMode
          ? analyzePerspective(base64Image)
          : null,
      ])

      const [
        textQualityData,
        motionBlurData,
        glareData,
        exposureData,
        noiseData,
        documentEdgeData,
        perspectiveData,
      ] = detections

      // Call callbacks with results
      if (textQualityData && onTextQualityDetected) {
        onTextQualityDetected(textQualityData)
      }
      if (motionBlurData && onMotionBlurDetected) {
        onMotionBlurDetected(motionBlurData)
      }
      if (glareData && onGlareDetected) {
        onGlareDetected(glareData)
      }
      if (exposureData && onExposureDetected) {
        onExposureDetected(exposureData)
      }
      if (noiseData && onNoiseDetected) {
        onNoiseDetected(noiseData)
      }
      if (documentEdgeData && onDocumentEdgeDetected) {
        onDocumentEdgeDetected(documentEdgeData)
      }
      if (perspectiveData && onPerspectiveDetected) {
        onPerspectiveDetected(perspectiveData)
      }
    }, 2000) // Check every 2 seconds

    return () => {
      clearInterval(intervalId)
      // Reset motion blur when camera stops
      resetMotionBlur()
    }
  }, [
    analyzeDocumentEdges,
    analyzeExposure,
    analyzeGlare,
    analyzeMotionBlur,
    analyzeNoise,
    analyzePerspective,
    analyzeTextQuality,
    documentMode,
    isCameraVisible,
    isOCRReady,
    onDocumentEdgeDetected,
    onExposureDetected,
    onGlareDetected,
    onMotionBlurDetected,
    onNoiseDetected,
    onPerspectiveDetected,
    onTextQualityDetected,
    previewSrc,
    resetMotionBlur,
  ])

  // Analyze preview image when photo is taken
  useEffect(() => {
    if (!previewSrc || !onPreviewChanged) return

    // Wait for OCR to be ready if text quality detection is needed
    if (!skipOcrDetection && !isOCRReady) return

    const analyzePreview = async () => {
      // Run all detections in parallel
      const detections = await Promise.all([
        analyzeTextQuality(previewSrc),
        analyzeMotionBlur(previewSrc),
        analyzeGlare(previewSrc),
        analyzeExposure(previewSrc),
        analyzeNoise(previewSrc),
        documentMode ? analyzeDocumentEdges(previewSrc) : null,
        documentMode ? analyzePerspective(previewSrc) : null,
      ])

      const [
        textQualityData,
        motionBlurData,
        glareData,
        exposureData,
        noiseData,
        documentEdgeData,
        perspectiveData,
      ] = detections

      // Call onPreviewChanged with all quality data
      const previewData: PhotoPreviewData = {
        documentEdgeData,
        exposureData,
        glareData,
        motionBlurData,
        noiseData,
        perspectiveData,
        previewSrc,
        textQualityData,
      }

      onPreviewChanged(previewData)
      logger.writeInfo("Preview Quality Data", previewData)
    }

    analyzePreview()
  }, [
    analyzeDocumentEdges,
    analyzeExposure,
    analyzeGlare,
    analyzeMotionBlur,
    analyzeNoise,
    analyzePerspective,
    analyzeTextQuality,
    documentMode,
    isOCRReady,
    onPreviewChanged,
    previewSrc,
    skipOcrDetection,
  ])

  // Attach native touch and mouse event listeners to handle zoom and pan
  useEffect(() => {
    const container = previewContainerRef.current
    if (!container || !previewSrc) return

    const getTouchDistance = (touch1: Touch, touch2: Touch): number => {
      const dx = touch1.clientX - touch2.clientX
      const dy = touch1.clientY - touch2.clientY
      return Math.sqrt(dx * dx + dy * dy)
    }

    const handleTouchStart = (e: TouchEvent) => {
      logger.writeInfo("touchstart", { touches: e.touches.length })
      if (e.touches.length === 2) {
        // Pinch zoom
        touchStateRef.current.isPinching = true
        touchStateRef.current.initialDistance = getTouchDistance(
          e.touches[0],
          e.touches[1],
        )
        touchStateRef.current.initialScale = zoomScale
      } else if (e.touches.length === 1) {
        // Pan
        touchStateRef.current.isPinching = false
        touchStateRef.current.initialPan = {
          x: e.touches[0].clientX,
          y: e.touches[0].clientY,
        }
        touchStateRef.current.lastPan = panPosition
      }
    }

    const handleTouchMove = (e: TouchEvent) => {
      e.preventDefault()

      if (e.touches.length === 2 && touchStateRef.current.isPinching) {
        // Pinch zoom
        const currentDistance = getTouchDistance(e.touches[0], e.touches[1])
        if (touchStateRef.current.initialDistance) {
          const scaleChange =
            currentDistance / touchStateRef.current.initialDistance
          const newScale = Math.max(
            1,
            Math.min(4, touchStateRef.current.initialScale * scaleChange),
          )
          logger.writeInfo("pinch zoom", { newScale })
          setZoomScale(newScale)
        }
      } else if (e.touches.length === 1 && !touchStateRef.current.isPinching) {
        // Pan
        const currentScale = zoomScale
        if (currentScale > 1) {
          const deltaX =
            e.touches[0].clientX - touchStateRef.current.initialPan.x
          const deltaY =
            e.touches[0].clientY - touchStateRef.current.initialPan.y

          const newX = touchStateRef.current.lastPan.x + deltaX
          const newY = touchStateRef.current.lastPan.y + deltaY

          // Limit pan to reasonable bounds based on zoom level
          const maxPan = 200 * (currentScale - 1)
          const boundedX = Math.max(-maxPan, Math.min(maxPan, newX))
          const boundedY = Math.max(-maxPan, Math.min(maxPan, newY))

          setPanPosition({ x: boundedX, y: boundedY })
        }
      }
    }

    const handleTouchEnd = () => {
      touchStateRef.current.isPinching = false
      touchStateRef.current.initialDistance = null
    }

    // Mouse wheel zoom for desktop testing
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault()
      const delta = e.deltaY > 0 ? -0.1 : 0.1
      const newScale = Math.max(1, Math.min(4, zoomScale + delta))
      logger.writeInfo("wheel zoom", { newScale })
      setZoomScale(newScale)

      // Reset pan when zooming out to 1x
      if (newScale === 1) {
        setPanPosition({ x: 0, y: 0 })
      }
    }

    // Mouse drag pan for desktop testing
    let isDragging = false
    let dragStart = { x: 0, y: 0 }
    let dragLastPan = { x: 0, y: 0 }

    const handleMouseDown = (e: MouseEvent) => {
      if (zoomScale > 1) {
        isDragging = true
        dragStart = { x: e.clientX, y: e.clientY }
        dragLastPan = panPosition
      }
    }

    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging && zoomScale > 1) {
        const deltaX = e.clientX - dragStart.x
        const deltaY = e.clientY - dragStart.y

        const newX = dragLastPan.x + deltaX
        const newY = dragLastPan.y + deltaY

        const maxPan = 200 * (zoomScale - 1)
        const boundedX = Math.max(-maxPan, Math.min(maxPan, newX))
        const boundedY = Math.max(-maxPan, Math.min(maxPan, newY))

        setPanPosition({ x: boundedX, y: boundedY })
      }
    }

    const handleMouseUp = () => {
      isDragging = false
    }

    // Add event listeners with passive: false to allow preventDefault
    container.addEventListener("touchstart", handleTouchStart, {
      passive: false,
    })
    container.addEventListener("touchmove", handleTouchMove, { passive: false })
    container.addEventListener("touchend", handleTouchEnd, { passive: false })
    container.addEventListener("wheel", handleWheel, { passive: false })
    container.addEventListener("mousedown", handleMouseDown)
    container.addEventListener("mousemove", handleMouseMove)
    container.addEventListener("mouseup", handleMouseUp)
    container.addEventListener("mouseleave", handleMouseUp)

    return () => {
      container.removeEventListener("touchstart", handleTouchStart)
      container.removeEventListener("touchmove", handleTouchMove)
      container.removeEventListener("touchend", handleTouchEnd)
      container.removeEventListener("wheel", handleWheel)
      container.removeEventListener("mousedown", handleMouseDown)
      container.removeEventListener("mousemove", handleMouseMove)
      container.removeEventListener("mouseup", handleMouseUp)
      container.removeEventListener("mouseleave", handleMouseUp)
    }
  }, [panPosition, previewSrc, zoomScale])

  useEffect(() => {
    if (
      !isCameraVisible ||
      !viewFinderRef.current ||
      !canvasRef.current ||
      !previewRef.current
    )
      return

    if (!cameraPhoto.current)
      cameraPhoto.current = new CameraPhoto(viewFinderRef.current)
    if (isEmpty(cameraIds)) {
      getDeviceCameraIds().then()
      return
    }

    cameraPhoto.current.videoElement = viewFinderRef.current
    startCamera().then(DO_NOTHING)
  }, [
    cameraIds,
    currentCameraIdIndex,
    getDeviceCameraIds,
    hideCamera,
    isCameraVisible,
    startCamera,
  ])

  return (
    <TranslucentLoader
      _css={`height: 100%; width: 100%;`}
      isLoading={isLoading}>
      {isCameraVisible ? (
        <Container
          gap={SPACINGS.XXL}
          withRows>
          <BackButtonContainer>
            <Button
              color={theme.styles.colors.grey["700"]}
              icon={mdiArrowLeft}
              onClick={hideCamera}
            />
          </BackButtonContainer>
          <ViewFinderContainer hidden={!!previewSrc}>
            <ViewFinder
              autoPlay={true}
              ref={viewFinderRef}
            />
            {documentMode && !previewSrc && <AlignmentGuide />}
          </ViewFinderContainer>
          <Canvas ref={canvasRef} />
          <PreviewContainer
            hidden={!previewSrc}
            ref={previewContainerRef}>
            <Preview
              alt={"preview"}
              panX={panPosition.x}
              panY={panPosition.y}
              ref={previewRef}
              scale={zoomScale}
              src={previewSrc}
            />
            {documentMode && previewSrc && <AlignmentGuide />}
          </PreviewContainer>
          {/* Zoom Controls */}
          {!previewSrc &&
            cameraZoomCapability &&
            cameraZoomCapability.max &&
            cameraZoomCapability.max > 1 && (
              <>
                {/* Zoom Mode Button */}
                <ZoomButtonContainer>
                  <ZoomButton
                    active={isZoomModeActive}
                    color={theme.styles.colors.white}
                    icon={mdiMagnify}
                    iconSize={"1.2rem"}
                    onClick={() => setIsZoomModeActive(!isZoomModeActive)}
                  />
                </ZoomButtonContainer>

                {/* Zoom Preset Buttons */}
                {isZoomModeActive && (
                  <ZoomPresetsContainer>
                    <ZoomPresetButton
                      active={currentCameraZoom === 1}
                      onClick={() => applyZoom(1)}>
                      1x
                    </ZoomPresetButton>
                    {cameraZoomCapability.max >= 2 && (
                      <ZoomPresetButton
                        active={currentCameraZoom === 2}
                        onClick={() => applyZoom(2)}>
                        2x
                      </ZoomPresetButton>
                    )}
                    {cameraZoomCapability.max >= 3 && (
                      <ZoomPresetButton
                        active={currentCameraZoom === 3}
                        onClick={() => applyZoom(3)}>
                        3x
                      </ZoomPresetButton>
                    )}
                    {cameraZoomCapability.max >= 6 && (
                      <ZoomPresetButton
                        active={currentCameraZoom === 6}
                        onClick={() => applyZoom(6)}>
                        6x
                      </ZoomPresetButton>
                    )}
                    {cameraZoomCapability.max >= 10 && (
                      <ZoomPresetButton
                        active={currentCameraZoom === 10}
                        onClick={() => applyZoom(10)}>
                        10x
                      </ZoomPresetButton>
                    )}
                  </ZoomPresetsContainer>
                )}
              </>
            )}

          <ButtonContainer gap={SPACINGS.LG}>
            {previewSrc ? (
              <>
                <FlexBox fluid />
                <Button
                  _css={css`
                    border: 4px solid transparent;
                  `}
                  icon={mdiCheck}
                  loading={isSubmitting}
                  onClick={submitPhoto}
                  success
                />
                <FlexBox fluid>
                  <Button
                    color={theme.styles.colors.grey["700"]}
                    icon={mdiCameraRetakeOutline}
                    iconSize={"1.5rem"}
                    loading={isSubmitting}
                    onClick={clearPhoto}
                  />
                </FlexBox>
              </>
            ) : (
              <>
                <FlexBox fluid />
                <Button
                  _css={css`
                    background-color: rgba(0, 0, 0, 0.5);
                    border: 4px solid
                      ${({ theme }) => theme.styles.colors.primary["500"]};
                  `}
                  flat={true}
                  color={"transparent"}
                  icon={mdiCircleSlice8}
                  onClick={takePhoto}
                />
                <FlexBox fluid>
                  {cameraIds.length > 1 ? (
                    <Button
                      color={theme.styles.colors.grey["700"]}
                      icon={mdiCached}
                      onClick={switchCamera}
                    />
                  ) : null}
                </FlexBox>
              </>
            )}
          </ButtonContainer>
        </Container>
      ) : trigger ? (
        trigger(showCamera)
      ) : null}
    </TranslucentLoader>
  )
}

const Canvas = styled.canvas`
  display: none;
`

const BackButtonContainer = styled(FlexBox)`
  position: absolute;
  top: ${SPACINGS.MD};
  left: ${SPACINGS.MD};
  z-index: 10;
`

type ButtonProps = {
  _css: string | FlattenInterpolation<ThemeProps<any>>
  flat?: boolean
  iconSize?: string
}

const Button = styled(IconButton).attrs(
  ({ _css, flat, iconSize }: ButtonProps) => ({
    _css: _css || "",
    flat: flat ?? false,
    iconSize: iconSize ?? SPACINGS.LG,
    primary: !flat,
  }),
)`
  &&&& {
    height: fit-content;
    ${({ _css }) => _css}
  }
`

const ButtonContainer = styled(FlexBox)`
  position: absolute;
  bottom: ${SPACINGS.MD};
  width: 100%;
  justify-content: center;
  align-items: center;
`

const Container = styled(FlexBox)`
  height: 100%;
  width: 100%;
  background: black;
  justify-content: center;
  align-items: center;
`

const PreviewContainer = styled.div<{ hidden: boolean }>`
  ${({ hidden }) => (hidden ? "display: none;" : "")};
  width: 100%;
  height: 100%;
  overflow: hidden;
  touch-action: none;
  position: relative;
  cursor: grab;

  &:active {
    cursor: grabbing;
  }
`

const Preview = styled.img<{ panX: number; panY: number; scale: number }>`
  width: 100%;
  height: 100%;
  object-fit: contain;
  transform: scale(${({ scale }) => scale})
    translate(
      ${({ panX, scale }) => panX / scale}px,
      ${({ panY, scale }) => panY / scale}px
    );
  transition: transform 0.1s ease-out;
  will-change: transform;
`

const ViewFinderContainer = styled.div<{ hidden: boolean }>`
  ${({ hidden }) => (hidden ? "display: none;" : "")};
  height: 100%;
  position: relative;
  width: 100%;
`

const ViewFinder = styled.video`
  max-height: 100%;
  width: 100%;
`

const ZoomButtonContainer = styled.div`
  position: absolute;
  right: ${SPACINGS.MD};
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
`

const ZoomButton = styled(IconButton)<{ active: boolean }>`
  &&&& {
    background: ${({ active }) =>
      active ? "rgba(255, 255, 255, 0.3)" : "rgba(0, 0, 0, 0.5)"};
    border: 2px solid
      ${({ active, theme }) =>
        active ? theme.styles.colors.white : "transparent"};
    border-radius: 50%;
    height: 48px;
    width: 48px;
  }
`

const ZoomPresetsContainer = styled(FlexBox)`
  background: rgba(0, 0, 0, 0.7);
  border-radius: 24px;
  gap: ${SPACINGS.XS};
  left: 50%;
  padding: ${SPACINGS.XS};
  position: absolute;
  top: ${SPACINGS.LG};
  transform: translateX(-50%);
  z-index: 10;
`

const ZoomPresetButton = styled.button<{ active: boolean }>`
  background: ${({ active }) =>
    active ? "rgba(255, 255, 255, 0.9)" : "rgba(255, 255, 255, 0.2)"};
  border: 1px solid
    ${({ active }) =>
      active ? "rgba(255, 255, 255, 0.9)" : "rgba(255, 255, 255, 0.4)"};
  border-radius: 16px;
  color: ${({ active }) => (active ? "#000" : "#fff")};
  cursor: pointer;
  font-size: 14px;
  font-weight: ${({ active }) => (active ? "bold" : "normal")};
  padding: 6px 12px;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.4);
  }

  &:active {
    transform: scale(0.95);
  }
`

const AlignmentGuide = styled.div`
  border: 2px dashed ${({ theme }) => theme.styles.colors.white};
  border-radius: 8px;
  bottom: 10%;
  height: 80%;
  left: 5%;
  opacity: 0.7;
  pointer-events: none;
  position: absolute;
  top: 10%;
  width: 90%;
  z-index: 5;

  &::before,
  &::after {
    background-color: ${({ theme }) => theme.styles.colors.white};
    content: "";
    opacity: 0.5;
    position: absolute;
  }

  /* Horizontal center line */
  &::before {
    height: 1px;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 100%;
  }

  /* Vertical center line */
  &::after {
    height: 100%;
    left: 50%;
    top: 0;
    transform: translateX(-50%);
    width: 1px;
  }
`
