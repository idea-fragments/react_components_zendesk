import React            from "react"
import MIcon, { Stack } from "@mdi/react"
import { DO_NOTHING }   from "utils/functionHelpers"
import { isArray }      from "utils/typeCheckers"

const COMPONENT_NAME = "Icon"

type Props = {
  color?: string,
  size?: number | string,
  svg: string | Array<string>,
  title?: string,
  onClick?: () => void,
}

export type IconProps = Props

export const Icon = ({
                       color,
                       size = 1,
                       svg,
                       title,
                       onClick = DO_NOTHING,
                     }: Props) => {
  return isArray(svg)
    // @ts-ignore
         ? <Stack onClick={onClick}
                  size={size}
                  title={title}
                  color={color || "currentColor"}
                  data-component-name={COMPONENT_NAME}>
           {(svg as string[]).map((s, i) => <MIcon key={i} path={s} />)}
         </Stack>
         : <MIcon path={svg as string}
           // @ts-ignore
                  onClick={onClick}
                  size={size}
                  title={title}
                  color={color || "currentColor"}
                  data-component-name={COMPONENT_NAME} />
}

Icon.COMPONENT_NAME = COMPONENT_NAME
