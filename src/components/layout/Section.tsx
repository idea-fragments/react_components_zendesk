import { SectionBody } from "components/layout/SectionBody"
import { SectionFooter } from "components/layout/SectionFooter"
import { SectionHeader } from "components/layout/SectionHeader"
import styled, { css } from "styled-components"
import { textColorForBackground } from "styles/mixins"
import { ColorProps, CSSProp } from "styles/types"
import { ValueOf } from "utils/types"

export const SECTION_PADDING_SIZES = {
  DEFAULT: "default",
  MEDIUM: "medium",
  SMALL: "small",
} as const

export type SectionPaddingSize = ValueOf<typeof SECTION_PADDING_SIZES>

export type SectionProps = {
  bordered?: boolean
  compact?: boolean
  rounded?: boolean
  shadowed?: boolean
} & ColorProps &
  CSSProp

const boxShadow = css`
  box-shadow: ${(p) => p.theme.styles.section.shadow};
`

const compactStyling = css`
  ${SectionHeader} + ${SectionBody} {
    padding-top: 0;
  }

  ${SectionBody}:has(+ ${SectionFooter}) {
    padding-bottom: 0;
  }
`

const roundBorder = css`
  border-radius: ${(p) => p.theme.styles.section.borderRadius};
`

const sectionBorder = css`
  border: 1px solid ${({ theme }) => theme.styles.border.color};
`

export const Section = styled.section<SectionProps>`
  background: ${({ color, theme }) =>
    color ? color : theme.styles.section.background};
  display: flex;
  flex-direction: column;
  overflow: hidden;

  ${({ bordered }) => (bordered ? sectionBorder : "")};
  ${({ color }) =>
    color && color !== "transparent" ? textColorForBackground : ""};
  ${({ compact }) => (compact ? compactStyling : "")};
  ${({ rounded }) => (rounded ? roundBorder : "")};
  ${({ shadowed }) => (shadowed ? boxShadow : "")};

  ${({ _css }: CSSProp) => _css}
`
