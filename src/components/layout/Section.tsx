import styled, { css }            from "styled-components"
import { textColorForBackground } from "styles/mixins"
import { ColorProps }             from "styles/types"

export type SectionProps = {
    titleHidden? :boolean
} & ColorProps

const hideTitle = css`
  & > h1,
  & > h2,
  & > h3,
  & > h4,
  & > h5,
  & > h6 {
    display: none;
  }
`

export const Section = styled.section<SectionProps>`
  background: ${({ color, theme }) => color ? color : theme.styles.section.background};
  border-radius: ${(p) => p.theme.styles.section.borderRadius};
  box-shadow: ${(p) => p.theme.styles.section.shadow};
  margin: ${(p) => p.theme.styles.section.margin};
  padding: ${(p) => p.theme.styles.section.padding};
  ${({titleHidden}) => titleHidden ? hideTitle : ""};
  ${({color}) => color ? textColorForBackground : ""};
  
  & > :first-child {
    margin-top: 0;
    padding-top: 0;
  }
  
  & > section {
    padding-bottom: 0;
  }
  
  & + section {
    //padding-top: 0;
  }
`
