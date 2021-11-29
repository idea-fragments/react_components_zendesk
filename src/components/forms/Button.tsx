// @flow

import { Button as SButton }                                 from "@zendeskgarden/react-buttons"
import {
  buttonLikeHoverable,
  getInlineStyling,
}                                                            from "components/forms/buttonMixins"
import { Icon }                                              from "components/Icon"
import { FlexBox }                                           from "components/layout/FlexBox"
import { Dots }                                              from "components/loaders/Dots"
import { Loadable }                                          from "components/loaders/Loadable"
import type { StyledProps }                                  from "components/StyledProps.type"
import { useIsMounted }                                      from "hooks/useIsMounted"
import React, { FC, forwardRef, Ref, useCallback, useState } from "react"
import styled, { css }                                       from "styled-components"
import type { Alignment }                                    from "styles/alignments"
import { COLORS }                                            from "styles/colors"
import { SPACINGS }                        from "styles/spacings"
import type { Theme }                      from "styles/theme/Theme.type"
import type { ColorProps, ContainerProps } from "styles/types"
import { FONT_SIZES }                                        from "styles/typography"
import type { PromiseFunc }                                  from "utils/function.types"

const fitContent   = css`
  width: fit-content;
  ${({ compact }: Props) => compact
                            ? "min-width: fit-content; padding: 0 1em;"
                            : ""}
`
const fitContainer = css`width: 100%;`
const colors       = css`
  ${buttonLikeHoverable};
  border-color: ${({ flat, primary, inline, color }: Props) =>
          !flat && !primary && !inline
          ? color
          : "transparent"};

  ${getInlineStyling}
  :hover, :active {
    border-color: transparent;
  }
`
const alignment    = ({ alignSelf }: Props) => (
  alignSelf ? css`align-self: ${alignSelf};` : ""
)

const casing = ({ theme }: { theme: Theme }) => {
  const casing = theme.styles.buttons.textTransform
  return casing ? css`text-transform: ${casing};` : ""
}

const baseColor = ({
                     color,
                     danger,
                     secondary,
                     success,
                     theme,
                     warning,
                   }: Props & StyledProps) => {
  if (color) return color
  if (danger) return theme.styles.colorDanger
  if (secondary) return COLORS.LIGHT_GREY
  if (success) return theme.styles.colorSuccess
  if (warning) return theme.styles.colorWarning

  return theme.styles.colorPrimary
}

export const BUTTON_SIZES = { SMALL: "small", LARGE: "large" } as const
export type ButtonSize = typeof BUTTON_SIZES[keyof typeof BUTTON_SIZES]

type AutoLoadable = {
  autoLoadable: true,
  onClick: PromiseFunc,
}

type CommonProps = {
  autoLoadable?: boolean,
  alignSelf?: Alignment,
  children?: any,
  disabled?: boolean,
  flat?: boolean,
  groupKey?: string,
  icon?: string,
  iconPosition?: "left" | "right",
  iconSize?: string,
  innerAs?: string,
  inline?: boolean,
  loading?: boolean,
  pill?: boolean,
  primary?: boolean,
  size?: ButtonSize,
  onClick: Function,
} & ColorProps & ContainerProps

type ControlledLoadable = {
  loading?: boolean,
  onClick: Function,
}

export type Props = (CommonProps & ControlledLoadable)
  | (CommonProps & AutoLoadable)

// eslint-disable-next-line no-use-before-define
export let Button = (
  {
    autoLoadable = false,
    children,
    disabled,
    flat,
    fluid,
    groupKey,
    icon,
    iconSize,
    innerAs,
    iconPosition,
    loading: loadingProp = false,
    primary,
    secondary,
    onClick,
    ...props
  }: Props,
  ref: Ref<FC<Props>>,
) => {
  const [isLoading, setIsLoadingTo] = useState(false)
  const isMounted                   = useIsMounted()

  const computedIsLoading = useCallback(
    () => {
      return autoLoadable ? isLoading : loadingProp
    }, [autoLoadable, isLoading, loadingProp]
  )

  const processClick = async () => {
    if (!autoLoadable) {
      (onClick as Function)()
      return
    }

    setIsLoadingTo(true)
    await onClick()
    if (isMounted()) setIsLoadingTo(false)
  }
  // if (flat && !computedIsLoading()) styles.border = "none"


  return <SButton as={innerAs}
                  disabled={disabled || computedIsLoading()}
                  ref={ref}
                  onClick={processClick}
                  {...props}>
    {
      computedIsLoading()
      ? <FlexBox alignItems={"center"} css={`min-height: 30px`} justifyContent={"center"}>
        <Dots size={FONT_SIZES.MD} />
      </FlexBox>
      : (
        icon
        ? <FlexBox alignItems={"center"}
                   gap={SPACINGS.XS}
                   justifyContent={"center"}>
          {iconPosition === "left" &&
           <Icon color={"currentColor"} svg={icon} size={iconSize} />}
          {children ? <span>{children}</span> : undefined}
          {iconPosition === "right" &&
           <Icon color={"currentColor"} svg={icon} size={iconSize} />}
        </FlexBox>
        : <span>{children}</span>
      )
    }
  </SButton>
}

Button = forwardRef<typeof Button, Props>(Button)
Button = styled(Button).attrs((props: Props & StyledProps) => ({
  ...props,
  color: baseColor(props),
}))`
  &&&& {
    font-size: inherit;
    font-weight: bold;
    ${({ fluid }) => !fluid ? fitContent : fitContainer}
    ${alignment}
    ${casing}
    ${({ disabled }) => !disabled ? colors : ""}
  }
`

// @ts-ignore
Button.COMPONENT_NAME = "Button"
// @ts-ignore
Button.defaultProps   = {
  fluid:        false,
  flat:         false,
  iconPosition: "right",
  primary:      true,
  disabled:     false,
}
