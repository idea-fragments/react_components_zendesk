// @flow

import React            from "react"
import MIcon, { Stack } from "@mdi/react"
import { DO_NOTHING }   from "utils/functionHelpers"
import { isArray }      from "utils/typeCheckers"

const COMPONENT_NAME = "Icon"

type Props = {
    color? :string,
    size? :number | string,
    svg :string | Array<string>,
    title? :string,
    onClick? :() => void,
}

export const Icon = ({
                         color,
                         size = 1,
                         svg,
                         title,
                         onClick = DO_NOTHING,
                     } :Props) => {
    return isArray(svg)
           ? <Stack onClick={onClick}
                    size={size}
                    title={title}
                    color={color || "currentColor"}
                    data-component-name={COMPONENT_NAME}>
               {svg.map((s, i) => <MIcon key={i} path={s} />)}
           </Stack>
           : <MIcon path={svg}
                    onClick={onClick}
                    size={size}
                    title={title}
                    color={color || "currentColor"}
                    data-component-name={COMPONENT_NAME} />
}

Icon.COMPONENT_NAME = COMPONENT_NAME
