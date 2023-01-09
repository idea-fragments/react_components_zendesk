// @ts-ignore
import { Tag as ZTag }               from "@zendeskgarden/react-tags"
import { MouseEventHandler }         from "react"
import styled, { ThemedStyledProps } from "styled-components"
import { Theme }                     from "styles/theme/Theme.type"

export const Close = styled(ZTag.Close)`

`

export type TagProps = {
  children: any | typeof Close
  color?: string,
  onClick?: MouseEventHandler<HTMLDivElement>,
  size?: "small" | "large",
  success?: boolean,
}

export const Tag = styled(ZTag).attrs((props: ThemedStyledProps<TagProps, Theme>) => ({
  hue: finalizeColor(props)
}))<TagProps>`
  && {
    cursor: ${({ onClick }) => onClick ? "pointer" : "initial"};
  }
`

const finalizeColor = ({ color, success, theme }: ThemedStyledProps<TagProps, Theme>) => {
  if (success) return theme.styles.colorSuccess
  if (color) return color
  return undefined
}

