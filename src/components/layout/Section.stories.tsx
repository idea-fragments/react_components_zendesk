import { Button }        from "components/forms/Button"
import {
  Section,
  SectionProps
}                        from "components/layout/Section"
import { SectionBody }   from "components/layout/SectionBody"
import { SectionHeader } from "components/layout/SectionHeader"
import { H3 }            from "components/text/Header"
import { Paragraph }     from "components/text/Paragraph"
import React             from "react"
import { DO_NOTHING }    from "utils/functionHelpers"

export default {
  title:     "layouts/Section",
  component: Section,
  argTypes:  {},
}

const Story = (args: SectionProps) => {
  const actions = <>
    <Button onClick={DO_NOTHING}>Click Me</Button>
  </>

  return <Section bordered {...args}>
    <SectionHeader bordered actions={actions}>
      <H3>Title of Section</H3>
    </SectionHeader>

    <SectionBody>
      <Paragraph>
        lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsumlorem ipsumlorem ipsum lorem
        ipsumlorem ipsumlorem ipsumlorem ipsum.
        lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum/.
      </Paragraph>

      <Paragraph>
        lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsumlorem ipsumlorem ipsum lorem
        ipsumlorem ipsumlorem ipsumlorem ipsum.
        lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum/.
      </Paragraph>
    </SectionBody>
  </Section>
}

export const Default = Story.bind({})
// @ts-ignore
Default.args         = {}
