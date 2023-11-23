import { Button } from "components/forms/Button"
import { ImageData } from "components/media/ImageUploader"
import { Slider } from "components/forms/Slider"
import { FlexBox } from "components/layout/FlexBox"
import { Nullable } from "global"
import { FC, useCallback, useRef, useState } from "react"
import Cropper, { Area, Point } from "react-easy-crop"
import styled, { css } from "styled-components"
import { COLORS } from "styles/colors"
import { SPACINGS } from "styles/spacings"

export type ImageCropperProps = {
  aspectRatio?: number
  imageData: ImageData
  imageQuality?: number
  onComplete: (image: ImageData) => void
}

const MAX_SCALE = 5
const MIN_SCALE = 1

export const ImageCropper: FC<ImageCropperProps> = ({
  aspectRatio = 1,
  imageData,
  imageQuality = 0.6,
  onComplete,
}) => {
  const imageRef = useRef<HTMLImageElement>()
  const [crop, setCrop] = useState<Point>({ x: 0, y: 0 })
  const [croppedArea, setCroppedArea] = useState<Area>()
  const [zoom, setZoom] = useState(MIN_SCALE)

  const canvasToFile = useCallback(
    async (canvas: HTMLCanvasElement): Promise<File> => {
      return new Promise((resolve) => {
        const toFile = (blob: Nullable<Blob>) => {
          if (!blob) throw new Error("ImageCropper: Canvas is empty")
          resolve(
            new File(
              [blob],
              imageData.file?.name ?? `${crypto.randomUUID()}.jpg`,
            ),
          )
        }

        canvas.toBlob(toFile, "image/jpeg", imageQuality)
      })
    },
    [imageData.file?.name, imageQuality],
  )

  const canvasToDataUrl = useCallback(
    (canvas: HTMLCanvasElement): string => {
      return canvas.toDataURL("image/jpeg", imageQuality)
    },
    [imageQuality],
  )

  const croppedImageData = useCallback(async (): Promise<
    Nullable<ImageData>
  > => {
    const canvas = document.createElement("canvas")
    const ctx = canvas.getContext("2d")
    const image = imageRef.current

    if (!ctx || !croppedArea || !image) return

    canvas.width = croppedArea.width
    canvas.height = croppedArea.height

    ctx.drawImage(
      image,
      croppedArea.x,
      croppedArea.y,
      croppedArea.width,
      croppedArea.height,
      0,
      0,
      croppedArea.width,
      croppedArea.height,
    )

    return {
      dataURL: canvasToDataUrl(canvas),
      file: await canvasToFile(canvas),
    }
  }, [croppedArea, canvasToDataUrl, canvasToFile])

  const onCropComplete = useCallback(
    (croppedAreaPercent: Area, croppedAreaPixels: Area) => {
      // console.log(croppedAreaPercent, croppedAreaPixels)
      setCroppedArea(croppedAreaPixels)
    },
    [],
  )

  const submitCroppedImage = useCallback(async () => {
    const data = await croppedImageData()
    if (data) onComplete(data)
  }, [croppedImageData, onComplete])

  return (
    <FullScreen withRows>
      <Container>
        <Cropper
          aspect={aspectRatio}
          crop={crop}
          image={imageData?.dataURL}
          maxZoom={MAX_SCALE}
          minZoom={MIN_SCALE}
          onCropChange={setCrop}
          onCropComplete={onCropComplete}
          onZoomChange={setZoom}
          setImageRef={(ref) => {
            imageRef.current = ref.current ?? undefined
          }}
          zoom={zoom}
        />
      </Container>
      <FlexBox
        _css={css`
          align-self: center;
          width: 300px;
          max-width: 100%;
          position: relative;
        `}
        withRows>
        <Slider
          max={MAX_SCALE}
          min={MIN_SCALE}
          onChange={setZoom}
          step={0.1}
          throttleMilliseconds={50}
          value={zoom}
        />
        <Button
          fluid
          onClick={submitCroppedImage}>
          Crop
        </Button>
      </FlexBox>
    </FullScreen>
  )
}

const Container = styled(FlexBox)`
  max-width: 100%;
  height: calc(100% - 100px);
  position: relative;
`

const FullScreen = styled(FlexBox)`
  background: ${COLORS.WHITE};
  position: fixed;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
  z-index: ${({ theme }) => theme.styles.appBar.zIndex + 1};
  padding: ${SPACINGS.SM};
  transition: top 0.5s ease-in-out;

  .ReactCrop.ReactCrop--fixed-aspect,
  .ReactCrop__child-wrapper {
    height: 100%;
  }
`
