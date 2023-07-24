import { FlexBox }     from "components/layout/FlexBox"
import {
  PropsWithChildren,
  ReactNode
}                      from "react"
import styled, { css } from "styled-components"
import { CSSProp }     from "styles/types"

export type SectionFooterProps = PropsWithChildren<{
  actions?: ReactNode,
  bordered?: boolean,
  caption?: ReactNode,
  title?: ReactNode,
}> & CSSProp

export const SectionFooter = styled(({
                                       actions,
                                       bordered = false,
                                       className,
                                     }: SectionFooterProps): JSX.Element => {
  return <Container bordered={bordered}
                    className={className}
                    justifyContent={"flex-end"}>
    {actions}
  </Container>
})`
  ${({ _css }: CSSProp) => _css}
`

const sectionBorder = css`
  border-top: 1px solid ${({ theme }) => theme.styles.border.color};
`

const Container = styled(FlexBox)<{ bordered: boolean }>`
  width: 100%;
  padding: ${({ theme }) => theme.styles.section.header.padding};
  ${({ bordered }) => bordered ? sectionBorder : ""};
`
