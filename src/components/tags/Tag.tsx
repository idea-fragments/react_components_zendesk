// @ts-ignore
import { Tag as ZTag } from "@zendeskgarden/react-tags"
import {
  ForwardedRef,
  forwardRef,
  MouseEvent,
  MouseEventHandler,
  ReactNode,
  useCallback
}                      from "react"
import styled          from "styled-components"
import { useTheme }    from "styles/theme/useTheme"

export const Close = styled(ZTag.Close)`

`
export type TagProps = {
  children: ReactNode,
  className?: string, // coming from styled components
  color?: string,
  onClick?: MouseEventHandler<HTMLDivElement>,
  onClose?: () => void,
  size?: "small" | "large",
  success?: boolean,
}

export let Tag = forwardRef((
  {
    children,
    className,
    color,
    onClose,
    success,
    ...props
  }: TagProps,
  ref: ForwardedRef<HTMLDivElement>
) => {
  const theme = useTheme()

  const finalizedColor = () => {
    if (success) return theme.styles.colorSuccess
    if (color) return color
    return undefined
  }

  const onCloseClicked = useCallback((e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    e.stopPropagation()
    onClose!()
  }, [onClose])

  return <ZTag className={className} hue={finalizedColor()} ref={ref} {...props}>
    {children}
    {onClose ? <Close onClick={onCloseClicked} /> : null}
  </ZTag>
})

Tag = styled(Tag)`
  && {
    cursor: ${({ onClick }) => onClick ? "pointer" : "initial"};
  }
`
