// @flow

import { mdiInformation }   from "@mdi/js"
import React, { type Node } from "react"
import { FlexBlock }        from "components/layout/FlexBlock"
import { Icon }             from "components/Icon"
import { COLORS }           from "styles/colors"
import styled               from "styled-components"
import type { Theme }       from "styles/theme/Theme.type"
import { useTheme }         from "styles/theme/useTheme"

export const INFO_PANEL_TYPES            = Object.freeze({
    INFO   : 0,
    SUCCESS: 1,
    WARNING: 2,
    DANGER : 3,
})
const { INFO, DANGER, SUCCESS, WARNING } = INFO_PANEL_TYPES

type InfoPanelType = $Values<typeof INFO_PANEL_TYPES>

type Props = {
    children :Node,
    className? :string,
    iconVerticalAlignment? :"center",
    type :InfoPanelType,
}

export let InfoPanel = ({
                            children,
                            className,
                            iconVerticalAlignment,
                            type,
                        } :Props) => {
    const alignItems = iconVerticalAlignment === "center"
                       ? "center" : undefined
    const theme      = useTheme()
    const background = bgColor(type, theme)
    const foreground = theme.styles.getTextColorForBackground({
        color: background, theme,
    })
    const iconColor  = type === INFO ? COLORS.LIGHT_BLUE : foreground

    return <Container alignItems={alignItems}
                      className={className}
                      color={foreground}
                      bgColor={background}>
        <div><Icon svg={mdiInformation} color={iconColor} /></div>
        <div css={`flex: 1;`}>{children}</div>
    </Container>
}

InfoPanel = styled(InfoPanel)``

InfoPanel.defaultProps = {
    type: INFO_PANEL_TYPES.INFO,
}

const Container = styled(FlexBlock)`
  background: ${({ bgColor }) => bgColor};
  color: ${({ color }) => color};
  border-radius: 1rem;
  padding: 1.5rem;
`

const bgColor = (type :InfoPanelType, theme :Theme) :string => {
    if (type === DANGER) return theme.styles.colorDanger
    if (type === WARNING) return theme.styles.colorWarning
    if (type === SUCCESS) return theme.styles.colorSuccess
    return theme.styles.infoPanel.background
}
