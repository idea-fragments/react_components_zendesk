import { VideoData } from "components/media/VideoUploader"
import React, { FC } from "react"
import ReactPlayer   from "react-player"

export type VideoPlayerProps = {
  height?: string,
  videoData: VideoData,
  width?: string,
}

export const VideoPlayer: FC<VideoPlayerProps> = ({ videoData, ...props }) => {
  const { dataURL } = videoData

  return <ReactPlayer controls playing url={dataURL} {...props} />
}
