import { Button }                                 from "components/forms/Button"
import { PhotoBooth, PhotoBoothProps, PhotoData } from "components/forms/PhotoBooth"
import React                                      from "react"

export default {
  title:     "forms/PhotoBooth",
  component: PhotoBooth,
  argTypes:  {},
}


const Story = (args: Partial<PhotoBoothProps>) => {
  const onSubmit = async ({ file, dataUri }: PhotoData) => {
    console.log("onSubmit", file, dataUri)
  }

  return <div css={"height: 100vh; margin: -1rem;"}>
    <PhotoBooth {...args}
                onSubmit={onSubmit}
                trigger={(onClick: () => void) => (
                  <Button onClick={onClick}>Open Camera</Button>
                )} />
  </div>
}

export const Default = Story.bind({})
// @ts-ignore
Default.args         = {}
