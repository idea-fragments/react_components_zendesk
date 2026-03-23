import { FlexBox } from "components/layout/FlexBox"
import { SectionPaddingSize } from "components/layout/Section"
import { ForwardedRef, PropsWithChildren, ReactNode, forwardRef } from "react"
import styled, { css } from "styled-components"
import { SPACINGS } from "styles/spacings"
import { CSSProp } from "styles/types"

export type SectionHeaderProps = PropsWithChildren<{
  actions?: ReactNode
  bordered?: boolean
  caption?: ReactNode
  paddingSize?: SectionPaddingSize
  title?: ReactNode
}> &
  CSSProp

export const SectionHeader = styled(
  forwardRef(
    (
      {
        actions,
        bordered = false,
        caption,
        children,
        className,
        paddingSize = "default",
        title = children,
      }: SectionHeaderProps,
      ref: ForwardedRef<HTMLDivElement>,
    ): JSX.Element => {
      return (
        <Container
          bordered={bordered}
          className={className}
          paddingSize={paddingSize}
          ref={ref}
          withRows>
          <FlexBox
            alignItems={"center"}
            fluid>
            <Text>{title}</Text>
            {actions ? <FlexBox>{actions}</FlexBox> : null}
          </FlexBox>
          {caption ? <Text>{caption}</Text> : null}
        </Container>
      )
    },
  ),
)`
  ${({ _css }: CSSProp) => _css}
`

const sectionBorder = css`
  border-bottom: 1px solid ${({ theme }) => theme.styles.border.color};
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
        padding: ${SPACINGS.MD} ${SPACINGS.MD} ${SPACINGS.SM};
      `
    return css`
      padding: ${theme.styles.section.header.padding};
    `
  }}
  ${({ bordered }) => (bordered ? sectionBorder : "")};
`

const Text = styled.div`
  flex: 1;

  & h1,
  & h2,
  & h3,
  & h4,
  & h5,
  & h6,
  & p {
    margin: 0;
  }
`
