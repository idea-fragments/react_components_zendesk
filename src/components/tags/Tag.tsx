import { Tag as ZTag } from "@zendeskgarden/react-tags"
import {
  ForwardedRef,
  forwardRef,
  MouseEvent,
  MouseEventHandler,
  ReactNode,
  useCallback,
  useMemo,
} from "react"
import styled, { css } from "styled-components"
import { FullSpectrumColors } from "styles/theme/Theme.type"
import { CSSProp } from "styles/types"
import { isString } from "utils/typeCheckers"

export const Close = styled(ZTag.Close)``
export type TagProps = {
  backgroundColor?: string
  backgroundColorWeight?: keyof FullSpectrumColors
  children: ReactNode
  className?: string // coming from styled components
  color?: FullSpectrumColors
  onClick?: MouseEventHandler<HTMLDivElement>
  onClose?: () => void
  rounded?: boolean
  size?: "small" | "large"
  success?: boolean
  textColor?: string
  wrapText?: boolean
} & CSSProp

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
      wrapText: ___,
      ...props
    }: TagProps,
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    const ariaLabel = useMemo(() => {
      if (!onClose) return undefined
      const childrenText = isString(children) ? children : "tag"
      return `remove ${childrenText}`
    }, [children, onClose])

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
        {onClose ? (
          <Close
            aria-label={ariaLabel}
            onClick={onCloseClicked}
          />
        ) : null}
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
)<TagProps>`
  && {
    flex-shrink: 0;
    flex-grow: 0;
    max-width: fit-content;
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
    ${({ rounded }) => (rounded ? `border-radius: 10px;` : "")}
    cursor: ${({ onClick }) => (onClick ? "pointer" : "initial")};
    ${({ wrapText }) =>
      wrapText
        ? css`
            white-space: normal;
            height: unset;
            padding-top: 4px;
            padding-bottom: 4px;
          `
        : ""}
    ${({ _css }) => _css}
`
