import { VideoData }      from "components/media/VideoUploader"
import React, {
  FC,
  useState
}                         from "react"
import Cropper, { Point } from "react-easy-crop"
import styled             from "styled-components"
import { CSSProp }        from "styles/types"

export type CroppedVideoPlayerProps = {
  onLoad?: () => void,
  videoData: VideoData,
}

export const CroppedVideoPlayer = styled<FC<CroppedVideoPlayerProps>>(({
                                                                         onLoad,
                                                                         videoData
                                                                       }) => {
  const [crop, setCrop] = useState<Point>({ x: 0, y: 0 })

  return <Container>
    <Cropper
      aspect={1}
      crop={crop}
      initialCroppedAreaPixels={videoData.cropAreaPx}
      objectFit={"vertical-cover"}
      onCropChange={setCrop}
      onMediaLoaded={onLoad}
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
