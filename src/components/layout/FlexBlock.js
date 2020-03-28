// @flow

import * as React   from "react"
import styled       from "styled-components"
import { SPACINGS } from "styles/spacings"

const COMPONENT_NAME = "FlexBlock"

type ResponsiveProps = {
    mediaQueryFunc :Function,
    // eslint-disable-next-line no-use-before-define
    props :Props
}

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
    responsivePropsList? :Array<ResponsiveProps>
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

const getSpacing = ({ spacing, ...props } :Props) => {
    if (!spacing) return ""

    return `& > *:not(:last-child) {
      margin: 0;
      ${getSpacingDirection(getFlexDirection(props))}: ${spacing};
    }`
}

const responsiveStyles = ({ responsivePropsList, ...originalProps } :Props) => (
    responsivePropsList.map(({
                                 mediaQueryFunc,
                                 props: rProps,
                             } :ResponsiveProps) :string => {
        const props = { ...originalProps, ...rProps }
        const {
                  alignItems,
                  justify,
                  compactAxis,
                  fluid,
              }     = props

        return mediaQueryFunc(`
              display: ${getDisplay(props)};
              justify-content: ${justify || "initial"};
              align-items: ${alignItems ? alignItems : "initial"}; 
              // align-self: ${compactAxis ? "initial" : "stretch"};
              flex-direction: ${getFlexDirection(props)};
              flex: ${fluid ? 1 : "unset"};
              ${getSpacing(props)}
          `).join("")
    })
)

export const FlexBlock :React.ComponentType<Props> = styled.div.attrs(({ spacing, ...rest }) => ({
    "data-component-name": rest["data-component-name"] || COMPONENT_NAME,
    spacing              : spacing === undefined ? SPACINGS.SM : spacing,
}))`
  display: ${getDisplay};
  justify-content: ${(p) => p.justify || "initial"};
  align-items: ${({ alignItems }) => alignItems ? alignItems : "initial"}; 
  // align-self: ${({ compactAxis }) => compactAxis ? "initial" : "stretch"};
  flex-direction: ${getFlexDirection};
  flex: ${({ fluid } :Props) => fluid ? 1 : "unset"};
  ${getSpacing}
  
  ${responsiveStyles}
`

FlexBlock.COMPONENT_NAME = COMPONENT_NAME

FlexBlock.defaultProps = {
    compactAxis        : false,
    compact            : false,
    withRows           : false,
    responsivePropsList: [],
}

export const PaddedFlexBlock   = styled(FlexBlock).attrs((props) => ({
    "data-component-name": props["data-component-name"] || "PaddedFlexBlock",
}))`
  padding: ${SPACINGS.SM};
`
PaddedFlexBlock.COMPONENT_NAME = "PaddedFlexBlock"
