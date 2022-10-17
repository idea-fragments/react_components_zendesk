import { Button }                            from "components/forms/Button"
import { SectionHeader, SectionHeaderProps } from "components/layout/SectionHeader"
import { H3 }                                from "components/text/Header"
import React                                 from "react"
import { DO_NOTHING }                        from "utils/functionHelpers"

export default {
  title:     "layouts/SectionHeader",
  component: SectionHeader,
  argTypes:  {},
}

const Story = (args: SectionHeaderProps) => {
  const actions = <>
    <Button onClick={DO_NOTHING}>Click Me</Button>
    <Button primary={false} onClick={DO_NOTHING}>Click Me Too</Button>
  </>
  return <SectionHeader
    {...args}
    actions={actions}>
    <H3>Title of Section</H3>
  </SectionHeader>
}

export const Default = Story.bind({})
// @ts-ignore
Default.args         = {}
