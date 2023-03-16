import { ComponentStory }  from "@storybook/react"
import {
  ImageData,
  ImageUploader
}                          from "components/media/ImageUploader"
import React, { useState } from "react"
import { Button }          from "components/forms/Button"

export default {
  title:     "media/ImageUploader",
  component: ImageUploader,
  argTypes:  {},
}

const Component: ComponentStory<typeof ImageUploader> = (args) => {
  const [image, setImage] = useState<ImageData>()

  return <div>
    {
      image?.dataURL
      ? <img src={image?.dataURL} alt={""} width={300} height={300} />
      : null
    }
    <ImageUploader
      {...args}
      imageData={image}
      onChange={setImage}
    />
  </div>
}

export const Default = Component.bind({})
Default.args         = {}

export const WithRenderProp = Component.bind({})
WithRenderProp.args         = {
  children: ({ clearImageData, openImageSelector }) => {
    return <>
      <Button onClick={clearImageData}>Clear</Button>
      <Button onClick={openImageSelector}>Select Image</Button>
    </>
  }
}
