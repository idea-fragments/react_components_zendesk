import {
  mdiArrowLeft,
  mdiCached,
  mdiCameraRetakeOutline,
  mdiCheck,
  mdiCircleSlice8,
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
import {
  isEmpty,
  isNotEmpty,
  nextItemIndex,
  takeOutItem,
} from "utils/arrayHelpers"
import { DO_NOTHING } from "utils/functionHelpers"

export type PhotoData = {
  file: File
  dataUri: string
}

export type PhotoBoothProps = {
  onHideCamera?: () => void
  onSilentError?: (error: Error) => void
  onSubmit: (data: PhotoData) => Promise<void>
  open?: boolean
  trigger?: (onClick: () => void) => ReactNode
}

export const PhotoBooth: FC<PhotoBoothProps> = ({
  onHideCamera = DO_NOTHING,
  onSilentError = DO_NOTHING,
  onSubmit,
  open,
  trigger,
}) => {
  if (isBoolean(open) && trigger)
    throw new Error(
      "PhotoBooth cannot have `open` and a `trigger` set at the same time",
    )

  const [cameraIds, setCameraIds] = useState<string[]>([])
  const [currentCameraIdIndex, setCurrentCameraIdIndex] = useState<number>(0)
  const [_isCameraVisible, setIsCameraVisibleTo] = useState(false)
  const [previewSrc, setPreviewSrc] = useState<string>()

  const cameraPhoto = useRef<CameraPhoto>()
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const previewRef = useRef<HTMLImageElement>(null)
  const viewFinderRef = useRef<HTMLVideoElement>(null)

  const isCameraVisible = useMemo<boolean>(() => {
    return open ?? _isCameraVisible
  }, [_isCameraVisible, open])

  const { withLoading, isLoading } = useLoaderV2()
  const { withLoading: withSubmitLoading, isLoading: isSubmitting } =
    useLoaderV2()

  const clearPhoto = useCallback(() => {
    setPreviewSrc(undefined)
  }, [])

  const getDeviceCameraIds = useCallback(async () => {
    if (isNotEmpty(cameraIds)) return

    // @ts-ignore
    const cameras: MediaDeviceInfo[] =
      await cameraPhoto.current!.enumerateCameras()
    const foundIds = cameras.map((c) => c.deviceId).reverse()
    onSilentError(new Error(JSON.stringify(cameras)))

    if (isEmpty(foundIds)) foundIds.concat([FACING_MODES.ENVIRONMENT])
    setCameraIds(foundIds)
  }, [cameraIds, onSilentError])

  const showCamera = useCallback(() => {
    setIsCameraVisibleTo(true)
  }, [])

  const removeCameraId = useCallback(() => {
    setCameraIds((prevState) => takeOutItem(prevState, currentCameraIdIndex))
  }, [currentCameraIdIndex])

  const startCamera = useCallback(async () => {
    const cameraId = cameraIds[currentCameraIdIndex]
    try {
      // @ts-ignore
      await withLoading(cameraPhoto.current!.startCamera(cameraId))
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
  }, [cameraIds, currentCameraIdIndex])

  const takePhoto = useCallback(() => {
    const dataUri = cameraPhoto.current!.getDataUri({
      sizeFactor: 1,
      imageType: IMAGE_TYPES.PNG,
      imageCompression: 0.95,
      isImageMirror: false,
    })
    setPreviewSrc(dataUri)
  }, [])

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
              color={"#303030"}
              icon={mdiArrowLeft}
              onClick={hideCamera}
            />
          </BackButtonContainer>
          <ViewFinder
            autoPlay={true}
            hidden={!!previewSrc}
            ref={viewFinderRef}
          />
          <Canvas ref={canvasRef} />
          <Preview
            alt={"preview"}
            hidden={!previewSrc}
            ref={previewRef}
            src={previewSrc}
          />
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
                    color={"#303030"}
                    icon={mdiCameraRetakeOutline}
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
                      ${({ theme }) => theme.styles.colorPrimary};
                  `}
                  flat={true}
                  color={"transparent"}
                  icon={mdiCircleSlice8}
                  onClick={takePhoto}
                />
                <FlexBox fluid>
                  {cameraIds.length > 1 ? (
                    <Button
                      color={"#303030"}
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

const Preview = styled.img`
  ${({ hidden }) => (hidden ? "display: none;" : "")};
  width: 100%;
  height: 100%;
  object-fit: contain;
`

const ViewFinder = styled.video`
  ${({ hidden }) => (hidden ? "display: none;" : "")};
  width: 100%;
  max-height: 100%;
`
