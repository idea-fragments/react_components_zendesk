import React, { ComponentType } from "react"
import MIcon, { Stack }         from "@mdi/react"
import { DO_NOTHING }           from "utils/functionHelpers"
import { isArray, isString }    from "utils/typeCheckers"

const COMPONENT_NAME = "Icon"

type Props = {
  color?: string,
  size?: number | string,
  svg: string | Array<string> | ComponentType,
  title?: string,
  onClick?: () => void,
}

export type IconProps = Props

export const Icon = ({
                       color,
                       size = 1,
                       svg: SVG,
                       title,
                       onClick = DO_NOTHING,
                     }: Props) => {
  return isArray(SVG)
    // @ts-ignore
         ? <Stack onClick={onClick}
                  size={size}
                  title={title}
                  color={color || "currentColor"}
                  data-component-name={COMPONENT_NAME}>
           {(SVG as string[]).map((s, i) => <MIcon key={i} path={s} />)}
         </Stack>
         : (
           isString(SVG)
           ? <MIcon path={SVG as string}
             // @ts-ignore
                    onClick={onClick}
                    size={size}
                    title={title}
                    color={color || "currentColor"}
                    data-component-name={COMPONENT_NAME} />
             // @ts-ignore
           : <SVG fill={color || "currentColor"}
                  data-component-name={COMPONENT_NAME}
                  height={size}
                  onClick={onClick}
                  width={size}
                  title={title} />
         )
}

Icon.COMPONENT_NAME = COMPONENT_NAME
