// @ts-ignore
import { Dots as ZDots }        from "@zendeskgarden/react-loaders"
import React, { FC }            from "react"
import { FONT_SIZES, FontSize } from "styles/typography"

type Props = {
  color?: string,
  size?: FontSize
}

export const Dots: FC<Props> = ({ color, size = FONT_SIZES.XXL }) => {
  return <ZDots color={color}
                size={size}
                delayMS={100}
                velocity={-.25} />
}
