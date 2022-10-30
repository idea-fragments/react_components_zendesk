import {
  PropsWithChildren,
  ReactNode
}                   from "react"
import styled       from "styled-components"
import { FlexBox }  from "components/layout/FlexBox"
import { SPACINGS } from "styles/spacings"

export type SectionHeaderProps = PropsWithChildren<{
  actions?: ReactNode,
  caption?: ReactNode,
}>


export const SectionHeader = styled(({
                                       actions,
                                       children: title,
                                       caption,
                                     }: SectionHeaderProps): JSX.Element => {
  return <Container withRows>
    <FlexBox fluid>
      <Text>{title}</Text>
      {actions ? <FlexBox>{actions}</FlexBox> : null}
    </FlexBox>
    <Text>{caption}</Text>
  </Container>
})``

const Container = styled(FlexBox)`
  padding: ${SPACINGS.MD} 0;
  width: 100%;
`

const Text = styled.div`
  flex: 1;

  & h1,
  & h2,
  & h3,
  & h4,
  & h5,
  & h6 {
    margin-top: 0;
  }

`
