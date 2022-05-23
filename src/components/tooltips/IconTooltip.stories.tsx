import { mdiInformation } from "@mdi/js"
import { IconTooltip }    from "components/tooltips/IconTooltip"
import React              from "react"

export default {
  title:     "forms/IconTooltip",
  component: IconTooltip,
  argTypes:  {},
}


const Story = () => {
  return <IconTooltip icon={mdiInformation}>
    Message in the tooltip
  </IconTooltip>
}

export const Default = Story.bind({})
// @ts-ignore
Default.args         = {}
