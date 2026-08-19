import { SectionBody } from "components/layout/SectionBody"
import { SectionFooter } from "components/layout/SectionFooter"
import { SectionHeader } from "components/layout/SectionHeader"
import styled, { css } from "styled-components"
import { mediaQueries } from "styles/mediaQueries"
import { textColorForBackground } from "styles/mixins"
import { SPACINGS } from "styles/spacings"
import { SectionPartPadding } from "styles/theme/Theme.type"
import { ColorProps, CSSProp } from "styles/types"
import { ValueOf } from "utils/types"

export const SECTION_PADDING_SIZES = {
  DEFAULT: "default",
  MEDIUM: "medium",
  SMALL: "small",
} as const

export type SectionPaddingSize = ValueOf<typeof SECTION_PADDING_SIZES>

export type SectionPart = "body" | "footer" | "header"

const PADDING_OVERRIDES: Record<
  SectionPart,
  Record<SectionPaddingSize, string | null>
> = {
  body: {
    [SECTION_PADDING_SIZES.DEFAULT]: null,
    [SECTION_PADDING_SIZES.MEDIUM]: SPACINGS.MD,
    [SECTION_PADDING_SIZES.SMALL]: SPACINGS.SM,
  },
  footer: {
    [SECTION_PADDING_SIZES.DEFAULT]: null,
    [SECTION_PADDING_SIZES.MEDIUM]: `${SPACINGS.SM} ${SPACINGS.MD} ${SPACINGS.MD}`,
    [SECTION_PADDING_SIZES.SMALL]: SPACINGS.SM,
  },
  header: {
    [SECTION_PADDING_SIZES.DEFAULT]: null,
    [SECTION_PADDING_SIZES.MEDIUM]: `${SPACINGS.MD} ${SPACINGS.MD} ${SPACINGS.SM}`,
    [SECTION_PADDING_SIZES.SMALL]: SPACINGS.SM,
  },
}

export const sectionPartPadding = ({
  paddingSize = SECTION_PADDING_SIZES.DEFAULT,
  part,
}: {
  paddingSize?: SectionPaddingSize
  part: SectionPart
}) => css`
  ${({ theme }) => {
    const override = PADDING_OVERRIDES[part][paddingSize]
    if (override)
      return css`
        padding: ${override};
      `

    const p: SectionPartPadding = theme.styles.section[part]
    return css`
      padding: ${p.paddingY} ${p.paddingX};
      ${p.mobile
        ? mediaQueries().forPhones(css`
            padding: ${p.mobile.paddingY} ${p.mobile.paddingX};
          `)
        : ""}
    `
  }}
`

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
