import {
  mdiBookOutline,
  mdiClipboardListOutline,
  mdiHomeOutline,
  mdiViewDashboardOutline
}                     from "@mdi/js"
import { IconAppBar } from "components/layout/IconAppBar"
import React          from "react"
import { DO_NOTHING } from "utils/functionHelpers"

export default {
  title:     "Layouts/IconAppBar",
  component: IconAppBar,
  argTypes:  {},
}

const Story = () => {
  const actions = [
    { icon: mdiHomeOutline, label: "Home", onClick: DO_NOTHING, },
    { icon: mdiViewDashboardOutline, label: "Dashboard", onClick: DO_NOTHING, },
    { icon: mdiBookOutline, label: "Projects", onClick: DO_NOTHING, },
    { icon: mdiClipboardListOutline, label: "Tasks", href: "https://google.com", },
  ]

  return <div css={"width: 400px; max-width: 100%;"}>
    <IconAppBar actions={actions} activeAction={"Tasks"} />
  </div>
}

export const Default = Story.bind({})
// @ts-ignore
Default.args         = {}
