import { ComponentStory } from "@storybook/react"
import { FlexBox }        from "components/layout/FlexBox"
import { FullScreen }     from "components/layout/FullScreen"

export default {
  title:     "layouts/FullScreen",
  component: FullScreen,
  argTypes:  {},
}


const Component: ComponentStory<typeof FullScreen> = (args) => {
  return <FullScreen css={`right: 50px;`} visible {...args} >
    <FlexBox>This is the content of the full screen</FlexBox>
  </FullScreen>
}

export const Default = Component.bind({})
Default.args         = {}

export const Hidden = Component.bind({})
Hidden.args         = { visible: false }
