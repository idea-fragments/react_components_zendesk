import { SectionPaddingSize } from "components/layout/Section"
import styled, { css } from "styled-components"
import { SPACINGS } from "styles/spacings"
import { CSSProp } from "styles/types"

export type SectionBodyProps = {
  noHorizontalPadding?: boolean
  paddingSize?: SectionPaddingSize
  scrollable?: boolean
} & CSSProp

const removeHorizontalPadding = css`
  padding-left: 0;
  padding-right: 0;
`

export const SectionBody = styled.div<SectionBodyProps>`
  width: 100%;
  flex: 1;
  overflow-y: ${({ scrollable }) => (scrollable ? "scroll" : "unset")};
  ${({ paddingSize, theme }) => {
    if (paddingSize === "small")
      return css`
        padding: ${SPACINGS.SM};
      `
    if (paddingSize === "medium")
      return css`
        padding: ${SPACINGS.MD};
      `
    return css`
      padding: ${theme.styles.section.body.padding};
    `
  }}
  ${({ noHorizontalPadding }) =>
    noHorizontalPadding ? removeHorizontalPadding : ""};
  ${({ _css }: CSSProp) => _css}

  & > :first-child {
    margin-top: 0;
  }

  & > :last-child {
    margin-bottom: 0;
  }
`
