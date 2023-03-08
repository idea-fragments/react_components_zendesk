import { ComponentStory }  from "@storybook/react"
import {
  ImageData,
  ImageUploader
}                          from "components/forms/media/ImageUploader"
import React, { useState } from "react"

export default {
  title:     "forms/media/ImageUploader",
  component: ImageUploader,
  argTypes:  {},
}

const Component: ComponentStory<typeof ImageUploader> = (args) => {
  const [image, setImage] = useState<ImageData>()

  return <div>
    <img src={image?.dataURL} alt={""} width={300} height={300} />
    <ImageUploader
      {...args}
      imageData={image}
      onChange={setImage}
    />
  </div>
}

export const Default = Component.bind({})
Default.args         = {}
