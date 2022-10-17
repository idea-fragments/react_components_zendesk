import { FlexBox }              from "components/layout/FlexBox"
import React, { FC, ReactNode } from "react"
import styled                   from "styled-components"

export type Props = {
  appBar: ReactNode,
  mainContent: ReactNode,
}
export type AppBarLayoutV2Props = Props

export const AppBarLayoutV2: FC<Props> = ({
                                            appBar,
                                            mainContent,
                                          }) => {
  return (
    <Container withRows>
      <FlexBox gap={"unset"} withRows>{mainContent}</FlexBox>
      {appBar}
    </Container>
  )
}

const Container = styled(FlexBox)`
  height: 100%;
`
