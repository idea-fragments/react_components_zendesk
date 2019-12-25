// @flow

import styled       from "styled-components"
import { SPACINGS } from "styles/spacings"
import * as React   from "react"

const COMPONENT_NAME = "FlexBlock"

export type Props = {
    compactAxis? :boolean,
    compact? :boolean,
    withRows? :boolean,
    justify? :string,
    /*
     When deriving a new Styled Component based off any Block/FlexBlock
     component, if spacing is being used, flexDirection needs to be set as
     a attrs prop, rather as a css property.

     ex:
     CORRECT
     const FormContainer = styled(FlexBlock).attrs({
     spacing: SPACINGS.SM,
     withRows: true,
     })``

     INCORRECT
     const FormContainer = styled(FlexBlock).attrs({
     spacing: SPACINGS.SM,
     })`
     flex-direction: column;
     `
     */
    spacing? :string | null,
}

const getFlexDirection = ({ withRows } :Props) => {
    return withRows ? "column" : "row"
}

const getSpacingDirection = (direction) => {
    return direction === "column" ? "margin-bottom" : "margin-right"
}

const getDisplay = ({ compact, hidden } :Props) => {
    if (hidden) return "none"
    return compact ? "inline-flex" : "flex"
}

export const FlexBlock :React.ComponentType<Props> = styled.div.attrs(({spacing}) => ({
    "data-component-name": COMPONENT_NAME,
    spacing              : spacing === undefined ? SPACINGS.SM : spacing,
}))`
  display: ${getDisplay};
  justify-content: ${(p) => p.justify || "initial"};
  align-items: ${({ alignItems }) => alignItems ? alignItems : "initial"}; 
  // align-self: ${({ compactAxis }) => compactAxis ? "initial" : "stretch"};
  flex-direction: ${getFlexDirection};
  flex: ${({ fluid } :Props) => fluid ? 1 : "unset"};
  
  ${({ spacing, ...props } :Props) => {
    if (!spacing) return ""

    return `& > *:not(:last-child) {
      ${getSpacingDirection(getFlexDirection(props))}: ${spacing};
    }`
}}
`

FlexBlock.COMPONENT_NAME = COMPONENT_NAME

FlexBlock.defaultProps = {
    compactAxis: false,
    compact    : false,
    withRows   : false,
}

export const PaddedFlexBlock   = styled(FlexBlock).attrs(() => ({
    "data-component-name": "PaddedFlexBlock",
}))`
  padding: ${SPACINGS.SM};
`
PaddedFlexBlock.COMPONENT_NAME = "PaddedFlexBlock"
