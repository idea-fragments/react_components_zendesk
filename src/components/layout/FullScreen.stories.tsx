import { ComponentStory } from "@storybook/react"
import { FlexBox } from "components/layout/FlexBox"
import { FullScreen } from "components/layout/FullScreen"

export default {
  title: "layouts/FullScreen",
  component: FullScreen,
  argTypes: {},
}

const Component: ComponentStory<typeof FullScreen> = (args) => {
  return (
    <FullScreen
      visible
      {...args}>
      <FlexBox _css={`background: #ffcd00; height: 100%; width: 100%;`}>
        This is the content of the full screen
      </FlexBox>
    </FullScreen>
  )
}

export const Default = Component.bind({})
Default.args = {}

export const Hidden = Component.bind({})
Hidden.args = { visible: false }

export const WithFluidContent = Component.bind({})
WithFluidContent.args = { fluidContent: true }
