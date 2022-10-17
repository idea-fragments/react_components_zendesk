import { PropsWithChildren, ReactNode } from "react"
import styled                           from "styled-components"
import { FlexBox }                      from "components/layout/FlexBox"
import { SPACINGS }                     from "styles/spacings"

export type SectionHeaderProps = PropsWithChildren<{
  actions?: ReactNode,
}>


export const SectionHeader = styled(({
                                       actions,
                                       children: title,
                                     }: SectionHeaderProps): JSX.Element => {
  return <Container>
    <Title>{title}</Title>
    {actions ? <FlexBox>{actions}</FlexBox> : null}
  </Container>
})``

const Container = styled(FlexBox)`
  padding: ${SPACINGS.MD} 0;
`

const Title = styled.div`
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
