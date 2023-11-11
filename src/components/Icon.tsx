import React, { ComponentType, SVGAttributes } from "react"
import MIcon, { Stack } from "@mdi/react"
import { DO_NOTHING } from "utils/functionHelpers"
import { isArray, isString } from "utils/typeCheckers"

const COMPONENT_NAME = "Icon"
type SVGComponent = ComponentType<SVGAttributes<any>>
type Props = {
  color?: string
  size?: number | string
  svg: string | Array<string> | SVGComponent
  title?: string
  onClick?: () => void
}

export type IconProps = Props

export const Icon = ({
  color,
  size = 1,
  svg,
  title,
  onClick = DO_NOTHING,
}: Props) => {
  const svgString = svg as string
  const svgStringList = svg as string[]
  const SVGComp = svg as SVGComponent

  return isArray(svg) ? (
    <Stack
      size={size}
      title={title}
      color={color || "currentColor"}
      data-component-name={COMPONENT_NAME}>
      {svgStringList.map((s, i) => (
        <MIcon
          key={i}
          path={s}
        />
      ))}
    </Stack>
  ) : isString(svg) ? (
    <MIcon
      path={svgString}
      size={size}
      title={title}
      color={color || "currentColor"}
      data-component-name={COMPONENT_NAME}
    />
  ) : (
    <SVGComp
      fill={color || "currentColor"}
      data-component-name={COMPONENT_NAME}
      height={size}
      onClick={onClick}
      width={size}
    />
  )
}

Icon.COMPONENT_NAME = COMPONENT_NAME
