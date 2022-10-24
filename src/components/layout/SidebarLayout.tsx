import { FlexBox }       from "components/layout/FlexBox"
import { FC, ReactNode } from "react"
import styled            from "styled-components"

export type SidebarLayoutProps = {
  mainContent: ReactNode,
  sidebar: ReactNode,
}

export const SidebarLayout: FC<SidebarLayoutProps> = ({ sidebar, mainContent }) => {
  return <Container gap={"unset"}>
    {sidebar}
    {mainContent}
  </Container>
}

const Container = styled(FlexBox)`
  width: 100%;
  height: 100%;
  overflow: hidden;
`
