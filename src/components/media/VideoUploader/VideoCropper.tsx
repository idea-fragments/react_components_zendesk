import { Button }      from "components/forms/Button"
import { VideoData }   from "components/media/VideoUploader"
import { Slider }      from "components/forms/Slider"
import { FlexBox }     from "components/layout/FlexBox"
import {
  FC,
  useCallback,
  useState
}                      from "react"
import Cropper, {
  Area,
  Point
}                      from "react-easy-crop"
import styled, { css } from "styled-components"
import { COLORS }      from "styles/colors"
import { SPACINGS }    from "styles/spacings"

export type VideoCropperProps = {
  videoData: VideoData,
  onComplete: (vd: VideoData) => void,
}

const MAX_SCALE = 5
const MIN_SCALE = 1

export const VideoCropper: FC<VideoCropperProps> = ({
                                                      videoData,
                                                      onComplete,
                                                    }) => {
  const [crop, setCrop]                                   = useState<Point>({ x: 0, y: 0 })
  const [croppedAreaPx, setCroppedAreaPx]                 = useState<Area>()
  const [croppedAreaPercentage, setCroppedAreaPercentage] = useState<Area>()
  const [zoom, setZoom]                                   = useState(MIN_SCALE)

  const onCropComplete = useCallback((croppedAreaPercent: Area, croppedAreaPixels: Area) => {
    setCroppedAreaPx(croppedAreaPixels)
    setCroppedAreaPercentage(croppedAreaPercent)
  }, [])

  const submitCroppedImage = useCallback(async () => {
    onComplete({
      ...videoData,
      cropAreaPx:         croppedAreaPx,
      cropAreaPercentage: croppedAreaPercentage,
      cropScale:          zoom,
    })
  }, [croppedAreaPercentage, croppedAreaPx, onComplete, videoData, zoom])

  return <FullScreen withRows>
    <Container>
      <Cropper
        aspect={1}
        crop={crop}
        maxZoom={MAX_SCALE}
        minZoom={MIN_SCALE}
        onCropChange={setCrop}
        onCropComplete={onCropComplete}
        onZoomChange={setZoom}
        video={videoData?.dataURL}
        zoom={zoom}
      />
    </Container>
    <FlexBox _css={css`align-self: center; width: 300px; max-width: 100%; position: relative;`}
             withRows>
      <Slider max={MAX_SCALE}
              min={MIN_SCALE}
              onChange={setZoom}
              step={0.1}
              throttleMilliseconds={50}
              value={zoom} />
      <Button fluid onClick={submitCroppedImage}>Crop</Button>
    </FlexBox>
  </FullScreen>
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
  transition: top .5s ease-in-out;

  .ReactCrop.ReactCrop--fixed-aspect, .ReactCrop__child-wrapper {
    height: 100%;
  }
`
