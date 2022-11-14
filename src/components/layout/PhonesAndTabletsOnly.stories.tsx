import { PhonesAndTabletsOnly } from "components/layout/PhonesAndTabletsOnly"
import { PhonesOnly }           from "components/layout/PhonesOnly"
import { H1 }                   from "components/text/Header"
import { Paragraph }            from "components/text/Paragraph"
import React                    from "react"

export default {
  title:     "Layouts/PhonesAndTabletsOnly",
  component: PhonesOnly,
  argTypes:  {},
}

const Story = () => {
  return <PhonesAndTabletsOnly>
    <H1>Main Content</H1>
    <Paragraph>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec aliquam
      aliquam, nunc nisl aliquet nisl, eget consectetur nunc nisl quis nunc. Sed euismod, nisl
      nec aliquam aliquam, nunc nisl aliquet nisl, eget consectetur nunc nisl quis nunc. Sed
      euismod, nisl nec aliquam aliquam, nunc nisl aliquet nisl, eget consectetur nunc nisl
      quis
    </Paragraph>
  </PhonesAndTabletsOnly>
}

export const Default = Story.bind({})
// @ts-ignore
Default.args         = {}
