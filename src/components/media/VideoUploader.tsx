import { mdiTrashCanOutline } from "@mdi/js"
import {
  Button,
  ButtonProps
}                             from "components/forms/Button"
import { VideoCropper }       from "components/media/VideoUploader/VideoCropper"
import { FlexBox }            from "components/layout/FlexBox"
import { Nullable }           from "global"
import {
  ChangeEvent,
  FC,
  ReactNode,
  useCallback,
  useRef,
  useState
}                             from "react"

type RenderPropParams = {
  clearVideoData: () => void,
  // openBackupImageSelector: () => void,
  openVideoSelector: () => void,
}

export type VideoUploaderProps = {
  // backupImage?: ImageData,
  buttonProps?: ButtonProps,
  children?: (p: RenderPropParams) => ReactNode,
  // onBackupImageChange: (vd: Nullable<VideoData>) => void,
  onChange: (vd: Nullable<VideoData>) => void,
  shouldCrop?: boolean,
  videoData?: VideoData,
}

type CropArea = {
  width: number,
  height: number,
  x: number,
  y: number,
}

export type VideoData = {
  cropAreaPercentage?: CropArea,
  cropAreaPx?: CropArea,
  cropScale?: number,
  dataURL?: string,
  file?: File,
}

export const VideoUploader: FC<VideoUploaderProps> = ({
                                                        // backupImage,
                                                        buttonProps,
                                                        children: renderProp,
                                                        // onBackupImageChange,
                                                        onChange,
  shouldCrop = false,
                                                        videoData,
                                                      }) => {
  const inputRef                                = useRef<HTMLInputElement>(null)
  const [partialVideoData, setPartialVideoData] = useState<Nullable<VideoData>>(videoData)
  const [cropMode, setCropModeTo]               = useState(false)

  const clearVideoData = useCallback(() => {
    inputRef.current!.value = ""
    onChange(undefined)
    // onBackupImageChange(undefined)
  }, [onChange])

  const openVideoSelector = useCallback(() => {
    inputRef.current!.value = ""
    inputRef.current!.click()
  }, [])

  const storeCroppedVideo = useCallback((vd: VideoData) => {
    setCropModeTo(false)
    onChange(vd)
  }, [onChange])

  const storeVideo = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    const url  = file ? URL.createObjectURL(file) : undefined
    const videoData = { dataURL: url, file }
    setPartialVideoData(videoData)
    if(shouldCrop) setCropModeTo(true)
    if(!shouldCrop) onChange(videoData)
  }, [onChange, shouldCrop])

  return <>
    <input hidden ref={inputRef} onChange={storeVideo} type={"file"} />
    {
      renderProp
      ? renderProp({ clearVideoData, openVideoSelector })
      : <FlexBox>
        <Button
          danger
          icon={mdiTrashCanOutline}
          onClick={clearVideoData}
          {...buttonProps}
        />
        {/*{*/}
        {/*  videoData && !backupImage*/}
        {/*  ? <ImageUploader imageData={backupImage} onChange={onBackupImageChange}>*/}
        {/*    {({ openImageSelector }) => (*/}
        {/*      <Button onClick={openImageSelector} {...buttonProps}>*/}
        {/*        Select Backup Image*/}
        {/*      </Button>*/}
        {/*    )}*/}
        {/*  </ImageUploader>*/}
        {/*  : null*/}
        {/*}*/}
        <Button onClick={openVideoSelector} {...buttonProps}>
          Select Video
        </Button>
      </FlexBox>
    }
    {
      cropMode && partialVideoData
      ? <VideoCropper videoData={partialVideoData} onComplete={storeCroppedVideo} />
      : null
    }
  </>
}
