import { Button as SButton } from "@zendeskgarden/react-buttons"
import {
  buttonLikeHoverable,
  getInlineStyling,
} from "components/forms/buttonMixins"
import { Icon } from "components/Icon"
import { FlexBox } from "components/layout/FlexBox"
import { Dots } from "components/loaders/Dots"
import { StyledProps } from "components/StyledProps.type"
import { useIsMounted } from "hooks/useIsMounted"
import React, {
  ComponentType,
  ForwardedRef,
  forwardRef,
  MouseEvent,
  PropsWithChildren,
  Ref,
  useCallback,
  useState,
} from "react"
import styled, { css } from "styled-components"
import { Alignment } from "styles/alignments"
import { SPACINGS } from "styles/spacings"
import { Theme } from "styles/theme/Theme.type"
import { ColorProps, ContainerProps, CSSProp } from "styles/types"
import { FONT_SIZES } from "styles/typography"
import { PromiseFunc } from "utils/function.types"

const fitContent = css`
  width: fit-content;
  ${({ compact }: ButtonProps) =>
    compact ? "min-width: fit-content; padding: 0 1em;" : ""}
`
const fitContainer = css`
  width: 100%;
`
const colors = css<ButtonProps & { color: string }>`
  ${buttonLikeHoverable};
  border-color: ${({ flat, primary, inline, color }: ButtonProps) =>
    !flat && !primary && !inline ? color : "transparent"};

  ${getInlineStyling};

  @media (hover: hover) {
    &:hover {
      border-color: transparent;
    }
  }

  :active {
    border-color: transparent;
  }
`
const alignment = ({ alignSelf }: ButtonProps) =>
  alignSelf
    ? css`
        align-self: ${alignSelf};
      `
    : ""

const casing = ({ theme }: { theme: Theme }) => {
  const casing = theme.styles.buttons.textTransform
  return casing
    ? css`
        text-transform: ${casing};
      `
    : ""
}

const baseColor = ({
  color,
  danger,
  neutral,
  success,
  theme,
  warning,
}: ButtonProps & StyledProps) => {
  if (color) return color
  if (danger) return theme.styles.colorDanger
  if (neutral) return theme.styles.colors.grey["300"]
  if (success) return theme.styles.colorSuccess
  if (warning) return theme.styles.colorWarning

  return theme.styles.colorPrimary
}

const inlineWrapping = css`
  white-space: normal;
  text-align: left;
  height: auto;
`

export const BUTTON_SIZES = { SMALL: "small", LARGE: "large" } as const
export type ButtonSize = (typeof BUTTON_SIZES)[keyof typeof BUTTON_SIZES]

type AutoLoadable = {
  autoLoadable: true
  onClick: PromiseFunc
}

type ButtonBaseProps = PropsWithChildren<{
  alignItems?: string
  alignSelf?: Alignment
  autoLoadable?: boolean
  disabled?: boolean
  flat?: boolean
  groupKey?: string
  icon?: string | ComponentType
  iconPosition?: "left" | "right"
  iconSize?: string
  inline?: boolean
  innerAs?: string
  innerRef?: Ref<HTMLButtonElement>
  loading?: boolean
  pill?: boolean
  primary?: boolean
  size?: ButtonSize
  wrapInlineText?: boolean
  onClick: () => void
}> &
  CSSProp &
  ColorProps &
  ContainerProps

type ControlledLoadable = {
  loading?: boolean
  onClick: () => void
}

export type ButtonProps =
  | (ButtonBaseProps & ControlledLoadable)
  | (ButtonBaseProps & AutoLoadable)

const ButtonBase = styled(
  ({
    alignItems,
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
    return (
      <SButton
        // @ts-ignore
        as={innerAs}
        disabled={disabled}
        isPill={pill}
        ref={innerRef}
        onClick={onClick}
        {...props}>
        {loading ? (
          <LoaderContainer
            alignItems={"center"}
            justifyContent={"center"}>
            <Dots size={FONT_SIZES.MD} />
          </LoaderContainer>
        ) : icon ? (
          <FlexBox
            alignItems={alignItems ?? "center"}
            gap={SPACINGS.XS}
            justifyContent={"center"}>
            {iconPosition === "left" && (
              <Icon
                color={"currentColor"}
                svg={icon}
                size={iconSize}
              />
            )}
            {children ? (
              <IconButtonTextContainer>{children}</IconButtonTextContainer>
            ) : undefined}
            {iconPosition === "right" && (
              <Icon
                color={"currentColor"}
                svg={icon}
                size={iconSize}
              />
            )}
          </FlexBox>
        ) : (
          <span>{children}</span>
        )}
      </SButton>
    )
  },
).attrs((props: ButtonProps & StyledProps) => ({
  ...props,
  color: baseColor(props),
  primary: props.flat ? false : props.primary,
}))`
  &&&& {
    font-size: inherit;
    font-weight: bold;
    ${({ wrapInlineText }) => (wrapInlineText ? inlineWrapping : "")}
    ${({ fluid }) => (!fluid ? fitContent : fitContainer)}
    ${alignment}
    ${casing}
    ${({ disabled }) => (!disabled ? colors : "")}
    ${({ _css }) => _css}
  }
`

export const Button: ComponentType<ButtonProps> = styled(
  forwardRef<HTMLButtonElement, ButtonProps>(
    (
      {
        autoLoadable = false,
        disabled,
        loading: loadingProp = false,
        onClick,
        ...props
      }: ButtonProps,
      ref: ForwardedRef<HTMLButtonElement>,
    ) => {
      const [isLoading, setIsLoadingTo] = useState(false)
      const isMounted = useIsMounted()

      const computedIsLoading = useCallback(() => {
        return autoLoadable ? isLoading : loadingProp
      }, [autoLoadable, isLoading, loadingProp])

      const processClick = async (e: MouseEvent) => {
        setIsLoadingTo(true)
        try {
          await onClick(e)
        } catch {}
        if (isMounted()) setIsLoadingTo(false)
      }
      return (
        <ButtonBase
          {...props}
          disabled={disabled || computedIsLoading()}
          innerRef={ref}
          loading={computedIsLoading()}
          // @ts-ignore
          onClick={autoLoadable ? processClick : onClick}
        />
      )
    },
  ),
)``

// @ts-ignore
Button.COMPONENT_NAME = "Button"
// @ts-ignore
Button.defaultProps = {
  fluid: false,
  flat: false,
  iconPosition: "left",
  primary: true,
  disabled: false,
}

const LoaderContainer = styled(FlexBox)`
  min-height: 30px;
`

const IconButtonTextContainer = styled.span`
  flex: 1;
`
