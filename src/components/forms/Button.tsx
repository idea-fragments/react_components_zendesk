// @ts-ignore
import { Button as SButton }          from "@zendeskgarden/react-buttons"
import {
  buttonLikeHoverable,
  getInlineStyling,
}                                     from "components/forms/buttonMixins"
import { Icon }                       from "components/Icon"
import { FlexBox }                    from "components/layout/FlexBox"
import { Dots }                       from "components/loaders/Dots"
import { StyledProps }                from "components/StyledProps.type"
import { useIsMounted }               from "hooks/useIsMounted"
import React, {
  ComponentType,
  ForwardedRef,
  forwardRef,
  MouseEvent,
  PropsWithChildren,
  Ref,
  useCallback,
  useState
}                                     from "react"
import styled, { css }                from "styled-components"
import { Alignment }                  from "styles/alignments"
import { COLORS }                     from "styles/colors"
import { SPACINGS }                   from "styles/spacings"
import { Theme }                      from "styles/theme/Theme.type"
import { ColorProps, ContainerProps } from "styles/types"
import { FONT_SIZES }                 from "styles/typography"
import { PromiseFunc }                from "utils/function.types"

const fitContent   = css`
  width: fit-content;
  ${({ compact }: Props) => compact
                            ? "min-width: fit-content; padding: 0 1em;"
                            : ""}
`
const fitContainer = css`width: 100%;`
const colors       = css<Props & { color: string }>`
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
                     neutral,
                     success,
                     theme,
                     warning,
                   }: Props & StyledProps) => {
  if (color) return color
  if (danger) return theme.styles.colorDanger
  if (neutral) return COLORS.LIGHT_GREY
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

type ButtonBaseProps = PropsWithChildren<{
  alignSelf?: Alignment,
  disabled?: boolean,
  groupKey?: string,
  icon?: string | ComponentType,
  iconPosition?: "left" | "right",
  iconSize?: string,
  innerAs?: string,
  innerRef?: Ref<HTMLButtonElement>,
  loading?: boolean,
  pill?: boolean,
  primary?: boolean,
  size?: ButtonSize,
  onClick: () => void,
}>

type CommonProps = ButtonBaseProps & {
  autoLoadable?: boolean,
  flat?: boolean,
  inline?: boolean,
} & ColorProps & ContainerProps

type ControlledLoadable = {
  loading?: boolean,
  onClick: () => void,
}

export type Props = (CommonProps & ControlledLoadable)
  | (CommonProps & AutoLoadable)

const ButtonBase = styled(({
                             children,
                             disabled,
                             groupKey,
                             icon,
                             iconSize,
                             innerAs,
                             innerRef,
                             iconPosition,
                             loading,
                             onClick,
                             pill,
                             ...props
                           }: ButtonBaseProps) => {
  // @ts-ignore
  return <SButton as={innerAs}
                  disabled={disabled}
                  isPill={pill}
                  ref={innerRef}
                  onClick={onClick}
                  {...props}>
    {
      loading
      ? <LoaderContainer alignItems={"center"}
                 justifyContent={"center"}>
        <Dots size={FONT_SIZES.MD} />
      </LoaderContainer>
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
}).attrs((props: Props & StyledProps) => ({
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

export const Button: ComponentType<Props> = styled(
  forwardRef<HTMLButtonElement, Props>(
    (
      {
        autoLoadable = false,
        disabled,
        loading: loadingProp = false,
        onClick,
        ...props
      }: Props,
      ref: ForwardedRef<HTMLButtonElement>,
    ) => {
      const [isLoading, setIsLoadingTo] = useState(false)
      const isMounted                   = useIsMounted()

      const computedIsLoading = useCallback(
        () => {
          return autoLoadable ? isLoading : loadingProp
        }, [autoLoadable, isLoading, loadingProp]
      )

      const processClick = async (e: MouseEvent) => {
        setIsLoadingTo(true)
        try { await onClick(e) } catch {}
        if (isMounted()) setIsLoadingTo(false)
      }
      return <ButtonBase {...props}
                         disabled={disabled || computedIsLoading()}
                         innerRef={ref}
                         loading={computedIsLoading()}
        // @ts-ignore
                         onClick={autoLoadable
                                  ? processClick
                                  : onClick} />
    }
  )
)``

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

const LoaderContainer = styled(FlexBox)`
  min-height: 30px;
`
