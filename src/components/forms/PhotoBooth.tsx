import {
  mdiArrowLeft,
  mdiCached,
  mdiCameraRetakeOutline,
  mdiCheck,
  mdiCircleSlice8
}                            from "@mdi/js"
import { IconButton }        from "components/forms/IconButton"
import { FlexBox }           from "components/layout/FlexBox"
import { TranslucentLoader } from "components/loaders/TranslucentLoader"
import { useLoaderV2 }       from "hooks/useLoaderV2"
import CameraPhoto, {
  FACING_MODES,
  IMAGE_TYPES
}                            from "jslib-html5-camera-photo"
import {
  FC,
  ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState
}                            from "react"
import styled, {
  css,
  FlattenInterpolation,
  ThemeProps
}                            from "styled-components"
import { SPACINGS }          from "styles/spacings"
import {
  isEmpty,
  isNotEmpty,
  nextItemIndex
}                            from "utils/arrayHelpers"
import { DO_NOTHING }        from "utils/functionHelpers"

export type PhotoData = {
  file: File,
  dataUri: string,
}

export type PhotoBoothProps = {
  onSubmit: (data: PhotoData) => Promise<void>,
  trigger: (onClick: () => void) => ReactNode,
}

export const PhotoBooth: FC<PhotoBoothProps> = ({ onSubmit, trigger }: PhotoBoothProps) => {
  const [cameraIds, setCameraIds]                       = useState<string[]>([])
  const [currentCameraIdIndex, setCurrentCameraIdIndex] = useState<number>(0)
  const [isCameraVisible, setIsCameraVisibleTo]         = useState(false)
  const [previewSrc, setPreviewSrc]                     = useState<string>()

  const cameraPhoto   = useRef<CameraPhoto>()
  const canvasRef     = useRef<HTMLCanvasElement>(null)
  const previewRef    = useRef<HTMLImageElement>(null)
  const viewFinderRef = useRef<HTMLVideoElement>(null)

  const { withLoading, isLoading } = useLoaderV2()
  const {
          withLoading: withSubmitLoading,
          isLoading:   isSubmitting
        }                          = useLoaderV2()

  const clearPhoto = useCallback(() => { setPreviewSrc(undefined) }, [])

  const getDeviceCameraIds = useCallback(async (): Promise<string[]> => {
    if (isNotEmpty(cameraIds)) return cameraIds

    // @ts-ignore
    const cameras: MediaDeviceInfo[] = await cameraPhoto.current!.enumerateCameras()
    const foundIds                   = cameras.map((c: MediaDeviceInfo) => c.deviceId)

    if (isEmpty(foundIds)) foundIds.concat([FACING_MODES.ENVIRONMENT])
    setCameraIds(foundIds)

    return foundIds
  }, [cameraIds])

  const showCamera = useCallback(() => {
    setIsCameraVisibleTo(true)
  }, [])

  const startCamera = useCallback(async (cameraIndex = currentCameraIdIndex) => {
    const cameraId = (await getDeviceCameraIds())[cameraIndex]
    // @ts-ignore
    await withLoading(cameraPhoto.current!.startCameraMaxResolution(cameraId))
    if (cameraIndex !== currentCameraIdIndex) setCurrentCameraIdIndex(cameraIndex)
  }, [currentCameraIdIndex, getDeviceCameraIds, withLoading])

  const stopCamera = useCallback(async () => {
    await withLoading(cameraPhoto.current!.stopCamera())
  }, [withLoading])

  const hideCamera = useCallback(async () => {
    if (!cameraPhoto.current?.stream) return
    await stopCamera().then()
    setIsCameraVisibleTo(false)
  }, [stopCamera])

  const submitPhoto = useCallback(async () => {
    const blob = await (await fetch(previewSrc!)).blob()
    const file = new File([blob], "image.png")

    try {
      await withSubmitLoading(onSubmit({ file, dataUri: previewSrc! }))
    } finally {
      clearPhoto()
      hideCamera()
    }
  }, [clearPhoto, hideCamera, onSubmit, previewSrc, withSubmitLoading])

  const switchCamera = useCallback(async () => {
    const nextIdIndex = nextItemIndex(cameraIds, currentCameraIdIndex)
    await stopCamera()
    await startCamera(nextIdIndex)
  }, [cameraIds, currentCameraIdIndex, startCamera, stopCamera])

  const takePhoto = useCallback(() => {
    const dataUri = cameraPhoto.current!.getDataUri({
      sizeFactor:       1,
      imageType:        IMAGE_TYPES.PNG,
      imageCompression: .95,
      isImageMirror:    false,
    })
    setPreviewSrc(dataUri)
  }, [])

  useEffect(() => {
    if (!isCameraVisible
        || !viewFinderRef.current
        || !canvasRef.current
        || !previewRef.current) return

    if(!cameraPhoto.current) cameraPhoto.current = new CameraPhoto(viewFinderRef.current)
    cameraPhoto.current.videoElement = viewFinderRef.current
    startCamera().then(DO_NOTHING)
  }, [hideCamera, isCameraVisible, startCamera])

  return <TranslucentLoader _css={`height: 100%; width: 100%;`} isLoading={isLoading}>
    {
      isCameraVisible
      ? (
        <Container gap={SPACINGS.XXL} withRows>
          <BackButtonContainer>
            <Button color={"#303030"} icon={mdiArrowLeft} onClick={hideCamera} />
          </BackButtonContainer>
          <ViewFinder autoPlay={true}
                      hidden={!!previewSrc}
                      ref={viewFinderRef} />
          <Canvas ref={canvasRef} />
          <Preview alt={"preview"}
                   hidden={!previewSrc}
                   ref={previewRef}
                   src={previewSrc} />
          <ButtonContainer gap={SPACINGS.LG}>
            {
              previewSrc
              ? <>
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
                  <Button color={"#303030"}
                          icon={mdiCameraRetakeOutline}
                          loading={isSubmitting}
                          onClick={clearPhoto}
                  />
                </FlexBox>
              </>
              : <>
                <FlexBox fluid />
                <Button
                  _css={css`
                    background-color: rgba(0, 0, 0, 0.5);
                    border: 4px solid ${({ theme }) => theme.styles.colorPrimary};
                  `}
                  flat={true}
                  color={"transparent"}
                  icon={mdiCircleSlice8}
                  onClick={takePhoto} />
                <FlexBox fluid>
                  {
                    cameraIds.length > 1
                    ? <Button color={"#303030"}
                              icon={mdiCached}
                              onClick={switchCamera} />
                    : null
                  }
                </FlexBox>
              </>
            }
          </ButtonContainer>

        </Container>
      )
      : trigger(showCamera)
    }
  </TranslucentLoader>
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
  _css: string | FlattenInterpolation<ThemeProps<any>>,
  flat?: boolean,
  iconSize?: string,
}

const Button = styled(IconButton).attrs(({ _css, flat, iconSize }: ButtonProps) => ({
  _css:     _css || "",
  flat:     flat ?? false,
  iconSize: iconSize ?? SPACINGS.LG,
  primary:  !flat,
}))`
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
  ${({ hidden }) => hidden ? "display: none;" : ""};
  width: 100%;
  height: 100%;
  object-fit: contain;
`

const ViewFinder = styled.video`
  ${({ hidden }) => hidden ? "display: none;" : ""};
  width: 100%;
  max-height: 100%;
`
