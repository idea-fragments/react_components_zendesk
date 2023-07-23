import { Button }     from "components/forms/Button"
import {
  SectionHeader,
  SectionHeaderProps
}                     from "components/layout/SectionHeader"
import { H3 }         from "components/text/Header"
import React          from "react"
import { DO_NOTHING } from "utils/functionHelpers"

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
    bordered
    {...args}
    actions={actions}
    caption={"Scan business cards to import them into your account.\n" +
             "Once a card is saved, you can come back and complete the import later."}>
    <H3>Title of Section</H3>
  </SectionHeader>
}

export const Default = Story.bind({})
// @ts-ignore
Default.args         = {}
