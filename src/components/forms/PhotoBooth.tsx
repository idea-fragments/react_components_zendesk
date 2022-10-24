import { Button }                                                  from "components/forms/Button"
import { FlexBox }                                                 from "components/layout/FlexBox"
import {
  TranslucentLoader
}                                                                  from "components/loaders/TranslucentLoader"
import { useLoaderV2 }                                             from "hooks/useLoaderV2"
import CameraPhoto, { FACING_MODES, IMAGE_TYPES }                  from "jslib-html5-camera-photo"
import { FC, ReactNode, useCallback, useEffect, useRef, useState } from "react"
import styled                                                      from "styled-components"
import { SPACINGS }                                                from "styles/spacings"

export type PhotoData = {
  file: File,
  dataUri: string,
}

export type PhotoBoothProps = {
  onSubmit: (data: PhotoData) => Promise<void>,
  trigger: (onClick: () => void) => ReactNode,
}

export const PhotoBooth: FC<PhotoBoothProps> = ({ onSubmit, trigger }: PhotoBoothProps) => {
  const viewFinderRef                           = useRef<HTMLVideoElement>(null)
  const previewRef                              = useRef<HTMLImageElement>(null)
  const canvasRef                               = useRef<HTMLCanvasElement>(null)
  const cameraPhoto                             = useRef<CameraPhoto>()
  const [previewSrc, setPreviewSrc]             = useState<string>()
  const [isCameraVisible, setIsCameraVisibleTo] = useState(false)
  const { withLoading, isLoading }              = useLoaderV2()
  const {
          withLoading: withSubmitLoading,
          isLoading:   isSubmitting
        }                                       = useLoaderV2()

  const clearPhoto = () => { setPreviewSrc(undefined) }

  const showCamera = useCallback(() => {
    setIsCameraVisibleTo(true)
  }, [])

  const startCamera = useCallback(async () => {
    await withLoading(cameraPhoto.current!.startCamera(FACING_MODES.ENVIRONMENT))
  }, [withLoading])

  const submitPhoto = useCallback(async () => {
    const blob = await (await fetch(previewSrc!)).blob()
    const file = new File([blob], "image.png")
    await withSubmitLoading(onSubmit({ file, dataUri: previewSrc! }))
    clearPhoto()
    setIsCameraVisibleTo(false)
    await cameraPhoto.current!.stopCamera()
  }, [onSubmit, previewSrc, withSubmitLoading])

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

    cameraPhoto.current = new CameraPhoto(viewFinderRef.current)
    startCamera().then()
  }, [isCameraVisible, startCamera])

  return <TranslucentLoader isLoading={isLoading}>
    {
      isCameraVisible
      ? (
        <Container gap={SPACINGS.XXL} withRows>
          <ViewFinder autoPlay={true}
                      hidden={!!previewSrc}
                      ref={viewFinderRef} />
          <Canvas ref={canvasRef} />
          <Preview alt={"preview"}
                   hidden={!previewSrc}
                   ref={previewRef}
                   src={previewSrc} />
          {
            previewSrc
            ? <FlexBox>
              <Button fluid
                      loading={isSubmitting}
                      onClick={clearPhoto}
                      primary={false}>
                Retake Photo
              </Button>
              <Button fluid
                      loading={isSubmitting}
                      onClick={submitPhoto}>
                Use Photo
              </Button>
            </FlexBox>
            : <Button fluid onClick={takePhoto}>Take Photo</Button>
          }
        </Container>
      )
      : trigger(showCamera)
    }
  </TranslucentLoader>
}

const Canvas = styled.canvas`
  display: none;
`

const Container = styled(FlexBox)`
  background-color: #000;
  padding: 2rem;
`

const Preview = styled.img`
  ${({ hidden }) => hidden ? "display: none;" : ""};
`

const ViewFinder = styled.video`
  ${({ hidden }) => hidden ? "display: none;" : ""};
`
