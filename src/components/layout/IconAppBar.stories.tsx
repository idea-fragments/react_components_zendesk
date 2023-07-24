import {
  mdiBookOutline,
  mdiClipboardListOutline,
  mdiHomeOutline,
  mdiViewDashboardOutline
}                          from "@mdi/js"
import {
  IconAppBar,
  IconAppBarProps
}                          from "components/layout/IconAppBar"
import React, { useState } from "react"

export default {
  title:     "Layouts/IconAppBar",
  component: IconAppBar,
  argTypes:  {},
}

const Story = (args: Partial<IconAppBarProps>) => {
  const [activeAction, setActiveAction] = useState("Tasks")

  const setAction = (action: string) => () => setActiveAction(action)

  const actions = [
    { icon: mdiHomeOutline, label: "Home", onClick: setAction("Home"), },
    { icon: mdiViewDashboardOutline, label: "Dashboard", onClick: setAction("Dashboard"), },
    { icon: mdiBookOutline, label: "Projects", onClick: setAction("Projects"), },
    { icon: mdiClipboardListOutline, label: "Tasks", href: "https://google.com", },
  ]

  return <div css={"width: 400px; max-width: 100%;"}>
    <IconAppBar actions={actions} activeAction={activeAction} {...args} />
  </div>
}

export const Default = Story.bind({})
// @ts-ignore
Default.args         = {}
