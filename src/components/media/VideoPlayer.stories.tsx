import { ComponentStory } from "@storybook/react"
import { FlexBox } from "components/layout/FlexBox"
import { VideoPlayer } from "components/media/VideoPlayer"
import { VideoData, VideoUploader } from "components/media/VideoUploader"
import { useState } from "react"

export default {
  title: "media/VideoPlayer",
  component: VideoPlayer,
  argTypes: {},
}

const Component: ComponentStory<typeof VideoPlayer> = (args) => {
  const [video, setVideo] = useState<VideoData | undefined>()

  return (
    <div>
      {video ? (
        <FlexBox _css={`height: 200px; width: 200px;`}>
          <VideoPlayer videoData={video} />
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
