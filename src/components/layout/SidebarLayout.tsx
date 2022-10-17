import { FlexBox }       from "components/layout/FlexBox"
import { FC, ReactNode } from "react"

export type SidebarLayoutProps = {
  mainContent: ReactNode,
  sidebar: ReactNode,
}

export const SidebarLayout: FC<SidebarLayoutProps> = ({ sidebar, mainContent }) => {
  return <FlexBox css={`width: 100%; height: 100%;`} gap={"unset"}>
    {sidebar}
    {mainContent}
  </FlexBox>
}
