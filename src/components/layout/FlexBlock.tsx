import styled from "styled-components"
import { SPACINGS } from "styles/spacings"

type _ResponsiveProps = {
  mediaQueryFunc: Function
  // eslint-disable-next-line no-use-before-define
  props: FlexBlockProps
}

export type FlexBlockProps = {
  alignItems?: string
  compactAxis?: boolean
  compact?: boolean
  fluid?: boolean
  hidden?: boolean
  withRows?: boolean
  justify?: string
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
  spacing?: string | null
  responsivePropsList?: Array<_ResponsiveProps>
}

const getFlexDirection = ({ withRows }: FlexBlockProps) => {
  return withRows ? "column" : "row"
}

const getSpacingDirection = (direction: string) => {
  return direction === "column" ? "margin-bottom" : "margin-right"
}

const getDisplay = ({ compact, hidden }: FlexBlockProps) => {
  if (hidden) return "none"
  return compact ? "inline-flex" : "flex"
}

const getSpacing = ({ spacing, ...props }: FlexBlockProps) => {
  if (!spacing) return ""

  return `& > *:not(:last-child) {
      margin: 0;
      ${getSpacingDirection(getFlexDirection(props))}: ${spacing};
    }`
}

const responsiveStyles = ({
  responsivePropsList,
  ...originalProps
}: FlexBlockProps) =>
  responsivePropsList?.map(
    ({ mediaQueryFunc, props: rProps }: _ResponsiveProps): string => {
      const props = { ...originalProps, ...rProps }
      const { alignItems, justify, compactAxis, fluid } = props

      return mediaQueryFunc(`
              display: ${getDisplay(props)};
              justify-content: ${justify || "initial"};
              align-items: ${alignItems ? alignItems : "initial"}; 
              // align-self: ${compactAxis ? "initial" : "stretch"};
              flex-direction: ${getFlexDirection(props)};
              flex: ${fluid ? 1 : "unset"};
              ${getSpacing(props)}
          `).join("")
    },
  )

export const FlexBlock = styled.div.attrs<FlexBlockProps>(({ spacing }) => ({
  spacing: spacing === undefined ? SPACINGS.SM : spacing,
}))`
  display: ${getDisplay};
  justify-content: ${(p) => p.justify || "initial"};
  align-items: ${({ alignItems }) => (alignItems ? alignItems : "initial")};
  // align-self: ${({ compactAxis }) => (compactAxis ? "initial" : "stretch")};
  flex-direction: ${getFlexDirection};
  flex: ${({ fluid }: FlexBlockProps) => (fluid ? 1 : "unset")};
  ${getSpacing}

  ${responsiveStyles}
`

FlexBlock.defaultProps = {
  compactAxis: false,
  compact: false,
  withRows: false,
  responsivePropsList: [],
}

export const PaddedFlexBlock = styled(FlexBlock).attrs((props) => ({}))`
  padding: ${SPACINGS.SM};
`
