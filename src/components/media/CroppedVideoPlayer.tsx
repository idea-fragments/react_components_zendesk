import { VideoData }      from "components/media/VideoUploader"
import React, {
  FC,
  useCallback,
  useState
} from "react"
import Cropper, {
  MediaSize,
  Point
} from "react-easy-crop"
import styled             from "styled-components"
import { CSSProp }        from "styles/types"

export type CroppedVideoPlayerProps = {
  onLoad?: () => void,
  videoData: VideoData,
}

type ObjectFit = "horizontal-cover" | "vertical-cover"

export const CroppedVideoPlayer = styled<FC<CroppedVideoPlayerProps>>(({
                                                                         onLoad,
                                                                         videoData
                                                                       }) => {
  const [crop, setCrop] = useState<Point>({ x: 0, y: 0 })
  const [objectFit, setObjectFit] = useState<ObjectFit>("vertical-cover")

  const processLoadedMedia = useCallback(({naturalHeight, naturalWidth} :MediaSize) => {
    setObjectFit(naturalHeight >= naturalWidth ? "horizontal-cover" : "vertical-cover")
    onLoad?.()
  }, [onLoad])

  return <Container>
    <Cropper
      aspect={1}
      crop={crop}
      initialCroppedAreaPixels={videoData.cropAreaPx}
      objectFit={objectFit}
      onCropChange={setCrop}
      onMediaLoaded={processLoadedMedia}
      onTouchRequest={() => { return false }}
      onWheelRequest={() => { return false }}
      showGrid={false}
      video={videoData.dataURL}
      zoom={videoData.cropScale ?? 1}
    />
  </Container>
})`${({ _css }: CSSProp) => _css}`

const Container = styled.div`
  position: relative;
  height: 100%;
  width: 100%;

  &&&& {
    .reactEasyCrop_CropArea {
      border: none;
      box-shadow: none;
      pointer-events: none;
    }
  }
`
