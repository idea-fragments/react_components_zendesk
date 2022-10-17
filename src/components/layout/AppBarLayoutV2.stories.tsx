import { mdiBookOutline, mdiHomeOutline, mdiViewDashboardOutline } from "@mdi/js"
import {
  AppBarLayoutV2
}                                                                  from "components/layout/AppBarLayoutV2"
import {
  IconAppBar
}                                                                  from "components/layout/IconAppBar"
import { H1 }                                                      from "components/text/Header"
import { Paragraph }                                               from "components/text/Paragraph"
import React                                                       from "react"
import { DO_NOTHING }                                              from "utils/functionHelpers"

export default {
  title:     "Layouts/AppBarLayoutV2",
  component: AppBarLayoutV2,
  argTypes:  {},
}

const Story = () => {
  const actions = [
    { icon: mdiHomeOutline, label: "Home", onClick: DO_NOTHING, },
    { icon: mdiViewDashboardOutline, label: "Dashboard", onClick: DO_NOTHING, },
    { icon: mdiBookOutline, label: "Projects", onClick: DO_NOTHING, },
  ]

  return <div css={"width: 100%; height: 100vh;"}>
    <AppBarLayoutV2
      mainContent={
        <div>
          <H1>Main Content</H1>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec aliquam
            aliquam, nunc nisl aliquet nisl, eget
          </Paragraph>

          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec aliquam
            aliquam, nunc nisl aliquet nisl, eget consectetur nunc nisl quis nunc. Sed euismod, nisl
            nec aliquam aliquam, nunc nisl aliquet nisl, eget consectetur nunc nisl quis nunc. Sed
            euismod, nisl nec aliquam aliquam, nunc nisl aliquet nisl, eget consectetur nunc nisl
            quis
          </Paragraph>

          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec aliquam
            aliquam, nunc nisl aliquet nisl, eget consectetur nunc nisl quis nunc. Sed euismod, nisl
            nec aliquam aliquam, nunc nisl aliquet nisl, eget consectetur nunc nisl quis nunc. Sed
            euismod, nisl nec aliquam aliquam, nunc nisl aliquet nisl, eget consectetur nunc nisl
            quis
          </Paragraph>
        </div>
      }
      appBar={<IconAppBar actions={actions} />} />
  </div>
}

export const Default = Story.bind({})
// @ts-ignore
Default.args         = {}
