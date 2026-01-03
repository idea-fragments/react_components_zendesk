import { Tag as ZTag } from "@zendeskgarden/react-tags"
import {
  ForwardedRef,
  forwardRef,
  MouseEvent,
  MouseEventHandler,
  ReactNode,
  useCallback,
} from "react"
import styled, { css } from "styled-components"
import { FullSpectrumColors } from "styles/theme/Theme.type"

export const Close = styled(ZTag.Close)``
export type TagProps = {
  backgroundColor?: string
  backgroundColorWeight?: keyof FullSpectrumColors
  children: ReactNode
  className?: string // coming from styled components
  color?: FullSpectrumColors
  onClick?: MouseEventHandler<HTMLDivElement>
  onClose?: () => void
  size?: "small" | "large"
  success?: boolean
  textColor?: string
}

export let Tag = forwardRef(
  (
    {
      backgroundColor: _,
      backgroundColorWeight: __,
      children,
      className,
      color,
      onClose,
      success,
      textColor,
      ...props
    }: TagProps,
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    const onCloseClicked = useCallback(
      (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        e.stopPropagation()
        onClose!()
      },
      [onClose],
    )

    return (
      <ZTag
        className={className}
        ref={ref}
        {...props}>
        {children}
        {onClose ? <Close onClick={onCloseClicked} /> : null}
      </ZTag>
    )
  },
)

Tag = styled(Tag).attrs(
  ({
    backgroundColor: backgroundColorProp,
    backgroundColorWeight,
    color,
    success,
    textColor: textColorProp,
    theme,
    ...props
  }) => {
    const finalizedFullSpectrumColors = (): FullSpectrumColors | undefined => {
      if (success) return theme.styles.colors.green
      if (color) return color as FullSpectrumColors
      return undefined
    }

    const getBackgroundColor = () => {
      if (backgroundColorProp) return backgroundColorProp
      return backgroundColorWeight
        ? finalizedFullSpectrumColors()?.[backgroundColorWeight]
        : finalizedFullSpectrumColors()?.[100]
    }

    const backgroundColor = getBackgroundColor()

    const getTextColor = () => {
      if (textColorProp) return textColorProp
      if (!backgroundColor) return undefined

      if (backgroundColorWeight) {
        return theme.styles.getTextColorForBackground({
          color: backgroundColor,
          theme,
        })
      }

      return finalizedFullSpectrumColors()?.[600]
    }

    const textColor = getTextColor()

    return {
      textColor,
      backgroundColor,
      ...props,
    }
  },
)`
  && {
    ${({ backgroundColor }) => {
      if (backgroundColor) {
        return `background-color: ${backgroundColor};`
      }
    }};
    ${({ textColor }) => {
      if (textColor) {
        return css`
          color: ${textColor};

          & ${Close} {
            color: ${textColor};
          }
        `
      }
    }};
    cursor: ${({ onClick }) => (onClick ? "pointer" : "initial")};
  }
`
