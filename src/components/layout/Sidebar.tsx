import { Button, BUTTON_SIZES } from "components/forms/Button"
import { FlexBox }              from "components/layout/FlexBox"
import { NavigationAction }     from "components/layout/NavigationAction"
import { ButtonLink }           from "components/navigation/ButtonLink"
import { StyledProps }          from "components/StyledProps.type"
import { FC, ReactNode }        from "react"
import styled                   from "styled-components"
import { fade }                 from "styles/colors"
import { SPACINGS }             from "styles/spacings"

type Action = NavigationAction

export type SidebarProps = {
  actions: Action[],
  actionIconSize?: string,
  activeAction?: string,
  logo: ReactNode,
  lowerActions?: Action[],
}

export const Sidebar: FC<SidebarProps> = ({
                                            actions,
                                            actionIconSize,
                                            activeAction,
                                            logo,
                                            lowerActions
                                          }) => {
  const createActionButtons = (actions: Action[]) => actions.map(
    (a: Action) => {
      const props = a.href
                    ? { as: ButtonLink, href: a.href }
                    : { onClick: a.onClick }

      return <ActionButton active={a.label === activeAction}
                           fluid
                           icon={a.icon}
                           iconPosition={"left"}
                           iconSize={actionIconSize}
                           key={a.label}
                           {...props}>
        {a.label}
      </ActionButton>
    }
  )

  return <Container gap={SPACINGS.XXXL} withRows>
    {logo}
    <FlexBox fluid gap={SPACINGS.XS} withRows>
      {createActionButtons(actions)}
    </FlexBox>
    <FlexBox gap={SPACINGS.XS} withRows>
      {lowerActions ? createActionButtons(lowerActions) : null}
    </FlexBox>
  </Container>
}

const ActionButton = styled(Button).attrs(() => ({
  fluid: true,
  size:  BUTTON_SIZES.SMALL
}))<StyledProps<{ active: boolean }>>`
  &&&&& {
    border-radius: ${({ theme }) => theme.styles.sidebar.actionButton.borderRadius};
    justify-content: flex-start;
    background: ${({ active, theme }) => active
                                         ? theme.styles.sidebar.actionButton.color
                                         : "transparent"};
    color: ${({ active, theme }) => {
      return active
             ? theme.styles.textColorPrimary
             : fade(theme.styles.textColorPrimary, .2)
    }};

    :hover {
      color: ${({ theme }) => theme.styles.textColorPrimary};
    }
  }
`

const Container = styled(FlexBox)<StyledProps>`
  background: ${({ theme }) => theme.styles.sidebar.background};
  height: 100%;
  padding: ${({ theme }) => theme.styles.sidebar.padding};
  width: ${({ theme }) => theme.styles.sidebar.width};
  flex-shrink: 0;
`
