import { Button }           from "components/forms/Button"
import { FlexBox }          from "components/layout/FlexBox"
import { NavigationAction } from "components/layout/NavigationAction"
import { ButtonLink }       from "components/navigation/ButtonLink"
import { StyledProps }      from "components/StyledProps.type"
import React, { FC }        from "react"
import styled               from "styled-components"
import { fade }             from "styles/colors"
import { SPACINGS }         from "styles/spacings"
import { useTheme }         from "styles/theme/useTheme"

type IconAppBarProps = {
  actions: NavigationAction[],
  actionIconSize?: string,
  activeAction?: string,
}

export let IconAppBar: FC<IconAppBarProps> = ({
                                                actions = [],
                                                actionIconSize,
                                                activeAction,
                                              }) => {
  const theme        = useTheme()
  const appBarHeight = theme.styles.appBar.height

  const createActionButtons = (actions: NavigationAction[]) => actions.map(
    (a: NavigationAction) => {
      const props = a.href
                    ? { as: ButtonLink, href: a.href }
                    : { onClick: a.onClick }

      return <ActionButton active={a.label === activeAction}
                           compact
                           icon={a.icon}
                           iconPosition={"left"}
                           iconSize={actionIconSize}
                           key={a.label}
                           {...props}>
      </ActionButton>
    }
  )

  return <>
    <FixedPlaceHolder height={`${appBarHeight}`} />
    <BarWrapper>
      <Content height={appBarHeight}>
        {/*<FlexBox alignItems={"center"} css={`cursor: pointer;`}>*/}
        {/*  {logo ? logo : null}*/}
        {/*</FlexBox>*/}
        <FlexBox fluid gap={SPACINGS.XS} justifyContent={"space-between"}>
          {createActionButtons(actions)}
        </FlexBox>
      </Content>
    </BarWrapper>
  </>
}

IconAppBar = styled(IconAppBar)``

const ActionButton = styled(Button)<StyledProps<{ active: boolean }>>`
  &&&& {
    border-radius: ${({ theme }) => `calc(${theme.styles.sidebar.actionButton.borderRadius} + 10px)`};
    ${({ active, theme }) => (
            !active
            ? `background: transparent; color: ${fade(theme.styles.textColorPrimary, .2)};`
            : ""
    )}

    height: 3.5em;
    width: 3.5em;
    padding: 0;

    :hover {
      color: ${({ theme }) => theme.styles.textColorPrimary};
    }
  }
`

const BarWrapper = styled.header<StyledProps<{ fixed?: boolean }>>`
  background: ${({ theme }) => theme.styles.appBar.background};
  box-shadow: ${({ theme }) => theme.styles.appBar.shadow};
  position: fixed;
  ${({ theme }) => theme.styles.appBar.screenPosition === "top"
                   ? "top: 0;"
                   : "bottom: 0;"}
  left: 0;
  width: 100%;
  z-index: ${({ theme }) => theme.styles.appBar.zIndex};
`

const Content = styled(FlexBox).attrs({ alignItems: "center", as: "nav", })`
  height: ${({ height }: { height?: string }) => height ? height : "fit-content"};
  padding: 0 ${SPACINGS.LG};
`

const FixedPlaceHolder = styled.div<{ height: string }>`
  height: ${({ height }) => height};
  flex-shrink: 0;
`
