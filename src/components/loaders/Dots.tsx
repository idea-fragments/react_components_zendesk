import { Dots as ZDots }        from "@zendeskgarden/react-loaders"
import React, { FC }            from "react"
import { FONT_SIZES, FontSize } from "styles/typography"

type Props = {
  size: FontSize
}

export const Dots: FC<Props> = ({ size = FONT_SIZES.XXL }) => {
  return <ZDots data-component-name={`${Dots.COMPONENT_NAME}`}
                size={size}
                delayMS={100}
                velocity={-.25} />
}

// @ts-ignore
Dots.COMPONENT_NAME = "Dots"
