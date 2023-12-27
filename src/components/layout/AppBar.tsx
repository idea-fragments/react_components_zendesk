import { mdiArrowLeft, mdiMenu } from "@mdi/js"
import { IconButton } from "components/forms/IconButton"
import { Container } from "components/layout/Container"
import { FlexBox } from "components/layout/FlexBox"
import React, { ElementType, FC, ReactNode } from "react"
import { useStores } from "stores/useStores"
import styled, { css } from "styled-components"
import { mediaQueries } from "styles/mediaQueries"
import { SPACINGS } from "styles/spacings"
import { useTheme } from "styles/theme/useTheme"
import { ContainerProps } from "styles/types"
import { DO_NOTHING } from "utils/functionHelpers"

const { forSmallComputersAndUp } = mediaQueries()
const { SM } = SPACINGS

type Props = {
  actions: Array<ReactNode>
  fixed?: boolean
  logo?: ElementType
  onBackClicked?: () => void
  onLogoClicked: () => void
  showBackButton?: boolean
  title: ElementType
} & ContainerProps

// Deprecated.. Component needs to be updated to use react context state managers
export let AppBar: FC<Props> = ({
  actions = [],
  className,
  fixed,
  fluid,
  logo,
  onBackClicked = DO_NOTHING,
  onLogoClicked = DO_NOTHING,
  showBackButton = false,
  title,
}) => {
  // TODO this should not use MobX...switch to react context
  // @ts-ignore
  const { ui } = useStores()
  const theme = useTheme()
  const appBarHeight = theme.styles.appBar.height

  const openNavDrawer = () => {
    ui.openDrawerWith({
      body: (
        <FlexBox
          css={`
            padding-bottom: ${SM};
          `}
          withRows>
          {actions}
        </FlexBox>
      ),
      withNoActions: true,
    })
  }

  return (
    <>
      {fixed ? <FixedPlaceHolder height={`${appBarHeight}`} /> : null}
      <BarWrapper
        fixed={fixed}
        className={className}>
        <Content
          height={appBarHeight}
          fluid={fluid}>
          {showBackButton ? (
            <IconButton
              icon={mdiArrowLeft}
              flat
              onClick={onBackClicked}
            />
          ) : null}
          {/*@ts-ignore*/}
          <FlexBox
            alignItems={"center"}
            onClick={onLogoClicked}
            css={`
              cursor: pointer;
            `}>
            {logo ? logo : null}
            {title}
          </FlexBox>
          <MobileNav
            color={
              theme.styles.nav.linkColor ||
              theme.styles.getTextColorForBackground({
                color: theme.styles.appBar.background ?? "$fff",
                theme,
              })
            }
            onClick={openNavDrawer}
          />
          <DesktopNav alignItems={"center"}>{actions}</DesktopNav>
        </Content>
      </BarWrapper>
    </>
  )
}

AppBar = styled(AppBar)``

const BarWrapper = styled.header<{ fixed?: boolean }>`
  background: ${({ theme }) => theme.styles.appBar.background};
  box-shadow: ${({ theme }) => theme.styles.appBar.shadow};
  position: ${({ fixed }) => (fixed ? "fixed" : "unset")};
  top: ${({ fixed }) => (fixed ? "0" : "unset")};
  left: ${({ fixed }) => (fixed ? "0" : "unset")};
  width: 100%;
  z-index: ${({ theme }) => theme.styles.appBar.zIndex};
`

const Content = styled(Container).attrs({
  withRows: false,
  spacing: SM,
  justify: "space-between",
  alignItems: "center",
})`
  height: ${({ height }: { height?: string }) =>
    height ? height : "fit-content"};
`

const DesktopNav = styled(FlexBox).attrs({
  as: "nav",
})`
  && {
    display: none;
    ${forSmallComputersAndUp(css`
      display: flex;
    `)}
  }
`

const FixedPlaceHolder = styled.div<{ height: string }>`
  height: ${({ height }) => height};
`

const MobileNav = styled(IconButton).attrs({
  flat: true,
  icon: mdiMenu,
})`
  && {
    margin-right: 0;
    ${forSmallComputersAndUp(css`
      display: none;
    `)}
  }
`
