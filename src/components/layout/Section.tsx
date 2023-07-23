import styled, { css }            from "styled-components"
import { textColorForBackground } from "styles/mixins"
import { ColorProps }             from "styles/types"

export type SectionProps = {
  bordered?: boolean,
                             rounded?: boolean,
                             shadowed?: boolean,
                           } & ColorProps


const boxShadow = css`
  box-shadow: ${(p) => p.theme.styles.section.shadow};
`

const roundBorder = css`
  border-radius: ${(p) => p.theme.styles.section.borderRadius};
`

const sectionBorder = css`
  border: 1px solid ${({ theme }) => theme.styles.border.color};
`

export const Section = styled.section<SectionProps>`
  background: ${({ color, theme }) => color ? color : theme.styles.section.background};

  ${({ bordered }) => bordered ? sectionBorder : ""};
  ${({ color }) => color ? textColorForBackground : ""};
  ${({ rounded }) => rounded ? roundBorder : ""};
  ${({ shadowed }) => shadowed ? boxShadow : ""};

  //& > section {
  //  padding-bottom: 0;
  //}

  //& + section {
  //  padding-top: 0;
  //}
`
