import { FlexBox }     from "components/layout/FlexBox"
import {
  PropsWithChildren,
  ReactNode
}                      from "react"
import styled, { css } from "styled-components"

export type SectionHeaderProps = PropsWithChildren<{
  actions?: ReactNode,
  bordered?: boolean,
  caption?: ReactNode,
  title?: ReactNode,
}>

export const SectionHeader = styled(({
                                       actions,
                                       bordered = false,
                                       children,
                                       caption,
                                       title = children,
                                     }: SectionHeaderProps): JSX.Element => {
  return <Container bordered={bordered} withRows>
    <FlexBox alignItems={"center"} fluid>
      <Text>{title}</Text>
      {actions ? <FlexBox>{actions}</FlexBox> : null}
    </FlexBox>
    {caption ? <Text>{caption}</Text> : null}
  </Container>
})``

const sectionBorder = css`
  border-bottom: 1px solid ${({ theme }) => theme.styles.border.color};
`

const Container = styled(FlexBox)<{ bordered: boolean }>`
  width: 100%;
  padding: ${({ theme }) => theme.styles.section.header.padding};
  ${({ bordered }) => bordered ? sectionBorder : ""};
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
