import {
  mdiBookOutline,
  mdiChatProcessingOutline,
  mdiClipboardListOutline,
  mdiCogOutline,
  mdiHomeOutline,
  mdiViewDashboardOutline,
} from "@mdi/js"
import { Sidebar, SidebarProps } from "components/layout/Sidebar"
import { Text } from "components/text/Text"
import React from "react"
import { FONT_SIZES, FONT_WEIGHTS } from "styles/typography"
import { DO_NOTHING } from "utils/functionHelpers"

export default {
  title: "Layouts/Sidebar",
  component: Sidebar,
  argTypes: {},
}

const Story = (args: Partial<SidebarProps>) => {
  const actions = [
    { icon: mdiHomeOutline, label: "Home", href: "https://google.com" },
    {
      icon: mdiViewDashboardOutline,
      label: "Dashboard",
      href: "https://google.com",
    },
    { icon: mdiBookOutline, label: "Projects", href: "https://google.com" },
    { icon: mdiClipboardListOutline, label: "Link To Nowhere", href: "#" },
  ]

  const lowerActions = [
    { icon: mdiCogOutline, label: "Settings", onClick: DO_NOTHING },
    { icon: mdiChatProcessingOutline, label: "Support", onClick: DO_NOTHING },
  ]

  return (
    <div css={"height: 600px;"}>
      <Sidebar
        actions={actions}
        logo={
          <Text
            css={`
              font-size: ${FONT_SIZES.MD};
              font-weight: ${FONT_WEIGHTS.BOLD};
            `}>
            IdeaFragments
          </Text>
        }
        lowerActions={lowerActions}
        {...args}
      />
    </div>
  )
}

export const Default = Story.bind({})

// @ts-ignore
Default.args = {
  activeAction: "Home",
}
