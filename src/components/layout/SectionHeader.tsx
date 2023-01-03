import { ComputersOnly }        from "components/layout/ComputersOnly"
import { FlexBox }              from "components/layout/FlexBox"
import { PhonesAndTabletsOnly } from "components/layout/PhonesAndTabletsOnly"
import {
  PropsWithChildren,
  ReactNode
}                               from "react"
import styled                   from "styled-components"

export type SectionHeaderProps = PropsWithChildren<{
  actions?: ReactNode,
  caption?: ReactNode,
  title?: ReactNode,
}>

export const SectionHeader = styled(({
                                       actions,
                                       children,
                                       caption,
                                       title = children,
                                     }: SectionHeaderProps): JSX.Element => {
  return <Container withRows>
    <FlexBox fluid>
      <Text>{title}</Text>
      <ComputersOnly>{actions ? <FlexBox>{actions}</FlexBox> : null}</ComputersOnly>
    </FlexBox>
    <Text>{caption}</Text>
    <PhonesAndTabletsOnly>
      {actions ? <FlexBox withRows>{actions}</FlexBox> : null}
    </PhonesAndTabletsOnly>
  </Container>
})``

const Container = styled(FlexBox)`
  width: 100%;
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
