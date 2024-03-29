import { FlexBlock } from "components/layout/FlexBlock"
import React, { ReactNode, useEffect, useRef } from "react"
import styled from "styled-components"
import { useTheme } from "styles/theme/useTheme"
import { NavBarScrollWatcher } from "utils/NavBarScrollWatcher"

type Props = {
  alertView: ReactNode
  appBar: ReactNode
  appBarHeight: string
  className?: string
  content: ReactNode
  drawerView: ReactNode
}

export const AppBarLayout = ({
  alertView,
  appBar,
  className,
  content,
  drawerView,
}: Props) => {
  const theme = useTheme()
  const appBarHeight = theme.styles.appBar.height
  const appBarRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    NavBarScrollWatcher.setNavBar(appBarRef.current!)
  }, [])

  return (
    <FlexBlock
      data-component-name={AppBarLayout.COMPONENT_NAME}
      withRows
      spacing={null}
      className={className}>
      <div ref={appBarRef}>{appBar}</div>
      <FlexBlock
        css={`
          min-height: calc(100vh - ${appBarHeight});
        `}
        spacing={null}
        withRows
        fluid>
        {content}
        {alertView}
      </FlexBlock>
      <DrawerWrapper>{drawerView}</DrawerWrapper>
    </FlexBlock>
  )
}

AppBarLayout.COMPONENT_NAME = "AppBarLayout"

const DrawerWrapper = styled.div`
  z-index: ${({ theme }) => theme.styles.sidebar.zIndex};
`
