// @flow

import { textColorForButton }              from "components/forms/buttonMixins"
import { Icon }                            from "components/Icon"
import { FlexBlock }                       from "components/layout/FlexBlock"
import type { StyledProps }                from "components/StyledProps.type"
import React, { forwardRef, type Ref }     from "react"
import { Button as SButton }               from "@zendeskgarden/react-buttons"
import type { Alignment }                  from "styles/alignments"
import { COLORS, dark, light }             from "styles/colors"
import { SPACINGS }                        from "styles/spacings"
import type { ColorProps, ContainerProps } from "styles/types"
import styled, { css }                     from "styled-components"

const fitContent   = css`width: fit-content;`
const fitContainer = css`width: 100%;`
const colors       = css`
    background: ${({ flat, primary, color }) => flat || !primary ? "transparent" : color};
    border-color: ${({ flat, primary, color }) => !flat && !primary ? color : "transparent"};
    
    ${textColorForButton}
    
    :hover {
      background: ${({ color }) => light(color)};
    }
    
    :active {
      background: ${({ color }) => dark(color)};
    }
    
    :hover, :active {
      border-color: transparent;
    }
`
const alignment    = ({ alignSelf }) => (
    alignSelf ? css`align-self: ${alignSelf};` : ""
)

const baseColor = ({ color, success, danger, theme } :Props & StyledProps) => {
    if (color) return color
    if (danger) return theme.styles.colorDanger
    if (success) return theme.styles.colorSuccess

    return theme.styles.colorPrimary
}

export const BUTTON_SIZES = { SMALL: "small", LARGE: "large" }
export type ButtonSize = $Values<typeof BUTTON_SIZES>

export type Props = {
    alignSelf? :Alignment,
    children? :any,
    disabled? :boolean,
    onClick :Function,
    groupKey? :string,
    flat? :boolean,
    pill? :boolean,
    primary? :boolean,
    icon? :string,
    iconPosition? :"left" | "right",
    size? :ButtonSize,
} & ColorProps & ContainerProps

export const Button = styled(forwardRef<Props, typeof Button>((
    {
        children,
        flat,
        fluid,
        groupKey,
        icon,
        iconPosition,
        primary,
        ...props
    } :Props,
    ref :Ref,
) => {
    return (
        <SButton fluid={fluid}
                 basic={flat}
                 primary={flat ? false : primary}
                 ref={ref}
                 {...props}>
            {icon ? (
                <FlexBlock spacing={SPACINGS.XS}
                           justify={"center"}
                           alignItems={"center"}>
                    {iconPosition === "left" &&
                     <Icon color={"currentColor"} svg={icon} />}
                    {children ? <span>{children}</span> : undefined}
                    {iconPosition === "right" &&
                     <Icon color={"currentColor"} svg={icon} />}
                </FlexBlock>
            ) : (
                 <span>{children}</span>
             )}
        </SButton>
    )
})).attrs((props) => ({
    ...props,
    color: baseColor(props),
}))`
  &&&&{
    font-size: inherit;
    font-weight: bold;
    ${({ fluid }) => !fluid ? fitContent : fitContainer}
    ${alignment}
    ${({ disabled }) => !disabled ? colors : ""}
  }
`

Button.COMPONENT_NAME = "Button"

Button.defaultProps = {
    children    : "Button",
    fluid       : false,
    flat        : false,
    iconPosition: "right",
    primary     : true,
    disabled    : false,
}
