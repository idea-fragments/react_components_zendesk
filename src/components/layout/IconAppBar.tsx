import { Button }           from "components/forms/Button"
import { FlexBox }          from "components/layout/FlexBox"
import { NavigationAction } from "components/layout/NavigationAction"
import { ButtonLink }       from "components/navigation/ButtonLink"
import { StyledProps }      from "components/StyledProps.type"
import React, { FC }        from "react"
import styled, { css }      from "styled-components"
import { fade }             from "styles/colors"
import { SPACINGS }         from "styles/spacings"
import { useTheme }         from "styles/theme/useTheme"

type IconAppBarProps = {
  actions: NavigationAction[],
  actionIconSize?: string,
  activeAction?: string,
  bordered?: boolean,
}

export let IconAppBar: FC<IconAppBarProps> = ({
                                                actions = [],
                                                actionIconSize,
                                                activeAction,
                                                bordered = false,
                                              }) => {
  const theme        = useTheme()
  const appBarHeight = theme.styles.appBar.height

  const createActionButtons = (actions: NavigationAction[]) => actions.map(
    ({ as, ...a }: NavigationAction) => {
      const props = {
        active:       a.label === activeAction,
        as,
        _css:         actionButtonStyles,
        compact:      true,
        icon:         a.icon,
        iconPosition: "left",
        iconSize:     actionIconSize,
        key:          a.label,
        primary:      true,
        flat:         false,
      } as const

      return a.href
             ? <ButtonLink href={a.href} {...props} />
             : <Button onClick={a.onClick!} {...props} />
    }
  )

  return <>
    <FixedPlaceHolder height={`${appBarHeight}`} />
    <BarWrapper bordered={bordered}>
      <Content height={appBarHeight}>
        <FlexBox fluid gap={SPACINGS.XS} justifyContent={"space-between"}>
          {createActionButtons(actions)}
        </FlexBox>
      </Content>
    </BarWrapper>
  </>
}

IconAppBar = styled(IconAppBar)``

const actionButtonStyles = css<{ active: boolean }>`
  &&&&& {
    border-radius: ${({ theme }) => `calc(${theme.styles.sidebar.actionButton.borderRadius} + 10px)`};
    ${({ active, theme }) => (
            !active
            ? `background: transparent; color: ${fade(theme.styles.textColorPrimary, .2)};`
            : ""
    )}

    height: 3.5em;
    width: 3.5em;
    padding: 0;
    
    @media (hover: hover) {
      :hover {
        color: ${({ theme }) => theme.styles.textColorPrimary};
      }
    }
  }
`

const barBorder = css`
  border-top: 1px solid ${({ theme }) => theme.styles.border.color};
`

const BarWrapper = styled.header<StyledProps<{ bordered: boolean }>>`
  background: ${({ theme }) => theme.styles.appBar.background};
  box-shadow: ${({ theme }) => theme.styles.appBar.shadow};
  position: fixed;
  ${({ theme }) => theme.styles.appBar.screenPosition === "top"
                   ? "top: 0;"
                   : "bottom: 0;"}
  left: 0;
  width: 100%;
  z-index: ${({ theme }) => theme.styles.appBar.zIndex};

  ${({ bordered }) => bordered ? barBorder : ""};
`

const Content = styled(FlexBox).attrs({ alignItems: "center", as: "nav", })`
  height: ${({ height }: { height?: string }) => height ? height : "fit-content"};
  padding: 0 ${SPACINGS.LG};
`

const FixedPlaceHolder = styled.div<{ height: string }>`
  height: ${({ height }) => height};
  flex-shrink: 0;
`
