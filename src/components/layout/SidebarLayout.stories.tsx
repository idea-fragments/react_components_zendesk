import {
  mdiBookOutline,
  mdiChatProcessingOutline,
  mdiClipboardListOutline,
  mdiCogOutline,
  mdiHomeOutline,
  mdiViewDashboardOutline
}                                   from "@mdi/js"
import { Sidebar }                  from "components/layout/Sidebar"
import { SidebarLayout }            from "components/layout/SidebarLayout"
import { H1 }                       from "components/text/Header"
import { Paragraph }                from "components/text/Paragraph"
import { Text }                     from "components/text/Text"
import React                        from "react"
import { FONT_SIZES, FONT_WEIGHTS } from "styles/typography"
import { DO_NOTHING }               from "utils/functionHelpers"

export default {
  title:     "Layouts/SidebarLayout",
  component: SidebarLayout,
  argTypes:  {},
}

const Story = () => {
  const actions = [
    { icon: mdiHomeOutline, label: "Home", onClick: DO_NOTHING, },
    { icon: mdiViewDashboardOutline, label: "Dashboard", onClick: DO_NOTHING, },
    { icon: mdiBookOutline, label: "Projects", onClick: DO_NOTHING, },
    { icon: mdiClipboardListOutline, label: "Tasks", onClick: DO_NOTHING, },
  ]

  const lowerActions = [
    { icon: mdiCogOutline, label: "Settings", onClick: DO_NOTHING, },
    { icon: mdiChatProcessingOutline, label: "Support", onClick: DO_NOTHING, }
  ]

  return <div css={"height: 600px;"}>
    <SidebarLayout
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
        </div>
      }
      sidebar={
        <Sidebar
          actions={actions}
          logo={
            <Text css={`font-size: ${FONT_SIZES.MD};
              font-weight: ${FONT_WEIGHTS.BOLD};`}>
              IdeaFragments
            </Text>
          }
          lowerActions={lowerActions}
        />
      } />
  </div>
}

export const Default = Story.bind({})
// @ts-ignore
Default.args         = {}
