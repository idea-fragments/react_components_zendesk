import { mdiTrashCanOutline } from "@mdi/js"
import {
  Button,
  ButtonProps
}                             from "components/forms/Button"
import { ImageCropper }       from "components/forms/media/ImageUploader/ImageCropper"
import { FlexBox }            from "components/layout/FlexBox"
import { Nullable }           from "global"
import {
  FC,
  useCallback,
  useState
}                             from "react"
import ImageUploading         from "react-images-uploading"
import { isEmpty }            from "utils/arrayHelpers"

export type ImageUploaderProps = {
  buttonProps?: ButtonProps,
  imageData?: ImageData,
  onChange: (image?: ImageData) => void,
}

export type ImageData = {
  dataURL?: string,
  file?: File,
}

export const ImageUploader: FC<ImageUploaderProps> = ({
                                                        buttonProps,
                                                        imageData,
                                                        onChange,
                                                      }) => {
  const [cropMode, setCropModeTo]         = useState(false)
  const [originalImage, setOriginalImage] = useState<Nullable<ImageData>>(imageData)

  const enableCropper = useCallback(() => {
    setCropModeTo(true)
  }, [])

  const cacheCroppedImage = useCallback((croppedImage: ImageData) => {
    onChange(croppedImage)
    setCropModeTo(false)
  }, [onChange])

  const cacheUploadedImage = useCallback((imageList: ImageData[]) => {
    setOriginalImage(isEmpty(imageList) ? undefined : imageList[0])
    enableCropper()
  }, [enableCropper])


  return <ImageUploading acceptType={["jpg", "gif", "png"]}
                         dataURLKey={"dataURL"}
                         onChange={cacheUploadedImage}
                         value={imageData ? [imageData] : []}>
    {({
        imageList: _,
        onImageUpload,
        onImageRemoveAll,
        onImageUpdate: __,
        onImageRemove: ___,
        isDragging:    ____,
        dragProps
      }) => (
      <FlexBox justifyContent={"flex-end"}>
        <Button
          danger
          icon={mdiTrashCanOutline}
          onClick={onImageRemoveAll}
          {...buttonProps}
        />
        {
          originalImage
          ? <Button disabled={cropMode} onClick={enableCropper} {...buttonProps}>Edit</Button>
          : null
        }
        <Button onClick={onImageUpload}{...dragProps} {...buttonProps}>Select Image</Button>

        {
          cropMode && originalImage
          ? <ImageCropper imageData={originalImage} onComplete={cacheCroppedImage} />
          : null
        }
      </FlexBox>
    )}
  </ImageUploading>
}
