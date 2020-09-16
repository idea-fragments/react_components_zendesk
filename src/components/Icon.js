// @flow

import React          from "react"
import MIcon          from "@mdi/react"
import { DO_NOTHING } from "utils/functionHelpers"

const COMPONENT_NAME = "Icon"

// eslint-disable-next-line
type Props = {
    size :number,
    svg :string,
    title? :string,
    color? :string,
    onClick :() => void,
}

export const Icon = ({ size, svg, title, color, onClick } :Props) => {
    return <MIcon path={svg}
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
