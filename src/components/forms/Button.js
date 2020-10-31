// @flow

import {
    buttonLikeHoverable,
    getInlineStyling,
}                                          from "components/forms/buttonMixins"
import { Icon }                            from "components/Icon"
import { FlexBlock }                       from "components/layout/FlexBlock"
import type { StyledProps }                from "components/StyledProps.type"
import React, { forwardRef, type Ref }     from "react"
import { Button as SButton }               from "@zendeskgarden/react-buttons"
import type { Alignment }                  from "styles/alignments"
import { SPACINGS }                        from "styles/spacings"
import type { Theme }                      from "styles/theme/Theme.type"
import type { ColorProps, ContainerProps } from "styles/types"
import styled, { css }                     from "styled-components"

const fitContent   = css`
  width: fit-content;
  ${({ compact }) => compact ? "min-width: fit-content; padding: 0 1em;" : ""}
`
const fitContainer = css`width: 100%;`
const colors       = css`
    ${buttonLikeHoverable};
    border-color: ${({ flat, primary, inline, color }) => !flat && !primary && !inline
                                                          ? color
                                                          : "transparent"};
    
    ${getInlineStyling}
   
    :hover, :active {
      border-color: transparent;
    }
`
const alignment    = ({ alignSelf }) => (
    alignSelf ? css`align-self: ${alignSelf};` : ""
)

const casing = ({ theme } :{ theme :Theme }) => {
    const casing = theme.styles.buttons.textTransform
    return casing ? css`text-transform: ${casing};` : ""
}

const baseColor = ({ color, success, danger, warning, theme } :Props & StyledProps) => {
    if (color) return color
    if (danger) return theme.styles.colorDanger
    if (success) return theme.styles.colorSuccess
    if (warning) return theme.styles.colorWarning

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

// eslint-disable-next-line no-use-before-define
export let Button = (
    {
        children,
        flat,
        fluid,
        groupKey,
        icon,
        innerAs,
        iconPosition,
        primary,
        ...props
    } :Props,
    ref :Ref,
) => <SButton as={innerAs} ref={ref} {...props}>
    {
        icon
        ? <FlexBlock spacing={SPACINGS.XS} justify={"center"}
                     alignItems={"center"}>
            {iconPosition === "left" &&
             <Icon color={"currentColor"} svg={icon} />}
            {children ? <span>{children}</span> : undefined}
            {iconPosition === "right" &&
             <Icon color={"currentColor"} svg={icon} />}
        </FlexBlock>
        : <span>{children}</span>
    }
</SButton>


Button = forwardRef<Props, Button>(Button)
Button = styled<Props, Button>(Button).attrs((props) => ({
    ...props,
    color: baseColor(props),
}))`
  &&&&{
    font-size: inherit;
    font-weight: bold;
    ${({ fluid }) => !fluid ? fitContent : fitContainer}
    ${alignment}
    ${casing}
    ${({ disabled }) => !disabled ? colors : ""}
  }
`

Button.COMPONENT_NAME = "Button"

Button.defaultProps = {
    fluid       : false,
    flat        : false,
    iconPosition: "right",
    primary     : true,
    disabled    : false,
}
