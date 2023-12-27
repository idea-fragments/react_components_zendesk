import { mdiInformation } from "@mdi/js"
import React, { FC, ReactNode } from "react"
import { FlexBox } from "components/layout/FlexBox"
import { Icon } from "components/Icon"
import styled from "styled-components"
import { Theme } from "styles/theme/Theme.type"
import { useTheme } from "styles/theme/useTheme"
import { ValueOf } from "utils/types"

export const INFO_PANEL_TYPES = {
  INFO: 0,
  SUCCESS: 1,
  WARNING: 2,
  DANGER: 3,
} as const
const { INFO, DANGER, SUCCESS, WARNING } = INFO_PANEL_TYPES

type InfoPanelType = ValueOf<typeof INFO_PANEL_TYPES>

type Props = {
  children: ReactNode
  className?: string
  iconVerticalAlignment?: "center"
  type: InfoPanelType
}

export let InfoPanel: FC<Props> = ({
  children,
  className,
  iconVerticalAlignment,
  type,
}) => {
  const alignItems = iconVerticalAlignment === "center" ? "center" : undefined
  const theme = useTheme()
  const background = bgColor(type, theme)
  const foreground = theme.styles.getTextColorForBackground({
    color: background,
    theme,
  })
  const iconColor = type === INFO ? theme.styles.colors.blue["400"] : foreground

  return (
    <Container
      alignItems={alignItems}
      className={className}
      color={foreground}
      bgColor={background}>
      <div>
        <Icon
          svg={mdiInformation}
          color={iconColor}
        />
      </div>
      <div
        css={`
          flex: 1;
        `}>
        {children}
      </div>
    </Container>
  )
}

InfoPanel = styled(InfoPanel)``

InfoPanel.defaultProps = {
  type: INFO_PANEL_TYPES.INFO,
}

const Container = styled(FlexBox)<{ bgColor: string }>`
  background: ${({ bgColor }) => bgColor};
  color: ${({ color }) => color};
  border-radius: 1rem;
  padding: 1.5rem;
`

const bgColor = (type: InfoPanelType, theme: Theme): string => {
  if (type === DANGER) return theme.styles.colorDanger
  if (type === WARNING) return theme.styles.colorWarning
  if (type === SUCCESS) return theme.styles.colorSuccess
  return theme.styles.infoPanel.background
}
