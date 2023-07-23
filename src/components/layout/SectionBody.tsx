import styled, { css } from "styled-components"
import { CSSProp }     from "styles/types"

type SectionBodyProps = {
  noHorizontalPadding?: boolean
} & CSSProp

const removeHorizontalPadding = css`
  padding-left: 0;
  padding-right: 0;
`

export const SectionBody = styled.div<SectionBodyProps>`
  width: 100%;
  padding: ${({ theme }) => theme.styles.section.body.padding};
  ${({ noHorizontalPadding }) => noHorizontalPadding ? removeHorizontalPadding : "" };
  ${({ _css }: CSSProp) => _css}
  

  //& > :last-child {
  //  margin-bottom: 0;
  //}
`
