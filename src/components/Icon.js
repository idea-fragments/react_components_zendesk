// @flow

import React, { Fragment } from "react"
import MIcon, { Stack }    from "@mdi/react"
import { DO_NOTHING }      from "utils/functionHelpers"
import { isArray }         from "utils/typeCheckers"

const COMPONENT_NAME = "Icon"

// eslint-disable-next-line
type Props = {
    size :number,
    svg :string | Array,
    title? :string,
    color? :string,
    onClick :() => void,
}

export const Icon = ({ size, svg, title, color, onClick } :Props) => {
    return isArray(svg)
           ? <Stack onClick={onClick}
                    size={size}
                    title={title}
                    color={color || "currentColor"}
                    data-component-name={COMPONENT_NAME}>
               {svg.map((s, i) => {
                   return <MIcon key={i} path={s}/>
               })}
           </Stack>
           : <MIcon path={svg}
                    onClick={onClick}
                    size={size}
                    title={title}
                    color={color || "currentColor"}
                    data-component-name={COMPONENT_NAME} />
}

Icon.COMPONENT_NAME = COMPONENT_NAME
Icon.defaultProps   = {
    size   : 1,
    onClick: DO_NOTHING,
}
