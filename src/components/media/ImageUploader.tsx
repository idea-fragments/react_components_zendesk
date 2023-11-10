import { mdiTrashCanOutline } from "@mdi/js"
import { Button, ButtonProps } from "components/forms/Button"
import { ImageCropper } from "components/media/ImageUploader/ImageCropper"
import { FlexBox } from "components/layout/FlexBox"
import { Nullable } from "global"
import { FC, ReactNode, useCallback, useState } from "react"
import ImageUploading from "react-images-uploading"
import { isEmpty } from "utils/arrayHelpers"

type RenderPropParams = {
  clearImageData: () => void
  openImageSelector: () => void
}

export type ImageUploaderProps = {
  buttonProps?: ButtonProps
  children?: (p: RenderPropParams) => ReactNode
  imageData?: ImageData
  onChange: (image?: ImageData) => void
}

export type ImageData = {
  dataURL?: string
  file?: File
}

export const ImageUploader: FC<ImageUploaderProps> = ({
  buttonProps,
  children: renderProp,
  imageData,
  onChange,
}) => {
  const [cropMode, setCropModeTo] = useState(false)
  const [originalImage, setOriginalImage] =
    useState<Nullable<ImageData>>(imageData)

  const enableCropper = useCallback(() => {
    setCropModeTo(true)
  }, [])

  const cacheCroppedImage = useCallback(
    (croppedImage: ImageData) => {
      onChange(croppedImage)
      setCropModeTo(false)
    },
    [onChange],
  )

  const cacheUploadedImage = useCallback(
    (imageList: ImageData[]) => {
      if (isEmpty(imageList)) {
        setOriginalImage(undefined)
        onChange(undefined)
        return
      }

      setOriginalImage(imageList[0])
      enableCropper()
    },
    [enableCropper, onChange],
  )

  return (
    <ImageUploading
      dataURLKey={"dataURL"}
      onChange={cacheUploadedImage}
      value={imageData ? [imageData] : []}>
      {({
        imageList: _,
        onImageUpload,
        onImageRemoveAll,
        onImageUpdate: __,
        onImageRemove: ___,
        isDragging: ____,
        dragProps,
      }) => (
        <>
          {renderProp ? (
            renderProp({
              clearImageData: onImageRemoveAll,
              openImageSelector: onImageUpload,
            })
          ) : (
            <FlexBox>
              <Button
                danger
                icon={mdiTrashCanOutline}
                onClick={onImageRemoveAll}
                {...buttonProps}
              />
              {originalImage ? (
                <Button
                  disabled={cropMode}
                  onClick={enableCropper}
                  {...buttonProps}>
                  Edit
                </Button>
              ) : null}
              <Button
                onClick={onImageUpload}
                {...dragProps}
                {...buttonProps}>
                Select Image
              </Button>
            </FlexBox>
          )}
          {cropMode && originalImage ? (
            <ImageCropper
              imageData={originalImage}
              onComplete={cacheCroppedImage}
            />
          ) : null}
        </>
      )}
    </ImageUploading>
  )
}
