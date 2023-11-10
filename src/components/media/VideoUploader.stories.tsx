import { ComponentStory } from "@storybook/react"
import { Button } from "components/forms/Button"
import { FlexBox } from "components/layout/FlexBox"
import { CroppedVideoPlayer } from "components/media/CroppedVideoPlayer"
import { VideoPlayer } from "components/media/VideoPlayer"
import { VideoData, VideoUploader } from "components/media/VideoUploader"
import { useState } from "react"

export default {
  title: "media/VideoUploader",
  component: VideoUploader,
  argTypes: {},
}

const Component: ComponentStory<typeof VideoUploader> = (args) => {
  const [video, setVideo] = useState<VideoData | undefined>()

  return (
    <div>
      {video ? (
        <FlexBox _css={`height: 100px; width: 100px;`}>
          {args.shouldCrop ? (
            <CroppedVideoPlayer
              onLoad={() => {
                console.log("video loaded")
              }}
              videoData={video}
            />
          ) : (
            <VideoPlayer videoData={video} />
          )}
        </FlexBox>
      ) : null}
      <VideoUploader
        {...args}
        onChange={setVideo}
        videoData={video}
      />
    </div>
  )
}

export const Default = Component.bind({})
Default.args = {}

export const WithCropping = Component.bind({})
WithCropping.args = { shouldCrop: true }

export const WithRenderProp = Component.bind({})
WithRenderProp.args = {
  children: ({ clearVideoData, openVideoSelector }) => {
    return (
      <>
        <Button onClick={clearVideoData}>Clear</Button>
        <Button onClick={openVideoSelector}>Select Video</Button>
      </>
    )
  },
}
