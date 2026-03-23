import { FlexBox } from "components/layout/FlexBox"
import { SectionPaddingSize } from "components/layout/Section"
import { PropsWithChildren, ReactNode } from "react"
import styled, { css } from "styled-components"
import { SPACINGS } from "styles/spacings"
import { CSSProp } from "styles/types"

export type SectionFooterProps = PropsWithChildren<{
  actions?: ReactNode
  bordered?: boolean
  caption?: ReactNode
  paddingSize?: SectionPaddingSize
  title?: ReactNode
}> &
  CSSProp

export const SectionFooter = styled(
  ({
    actions,
    bordered = false,
    className,
    paddingSize = "default",
  }: SectionFooterProps): JSX.Element => {
    return (
      <Container
        bordered={bordered}
        className={className}
        justifyContent={"flex-end"}
        paddingSize={paddingSize}>
        {actions}
      </Container>
    )
  },
)`
  ${({ _css }: CSSProp) => _css}
`

const sectionBorder = css`
  border-top: 1px solid ${({ theme }) => theme.styles.border.color};
`

const Container = styled(FlexBox)<{
  bordered: boolean
  paddingSize: SectionPaddingSize
}>`
  width: 100%;
  ${({ paddingSize, theme }) => {
    if (paddingSize === "small")
      return css`
        padding: ${SPACINGS.SM};
      `
    if (paddingSize === "medium")
      return css`
        padding: ${SPACINGS.SM} ${SPACINGS.MD} ${SPACINGS.MD};
      `
    return css`
      padding: ${theme.styles.section.header.padding};
    `
  }}
  ${({ bordered }) => (bordered ? sectionBorder : "")};
`
