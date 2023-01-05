import { FlexBox }              from "components/layout/FlexBox"
import React, { FC, ReactNode } from "react"
import styled, { css }          from "styled-components"
import { useTheme }             from "styles/theme/useTheme"

export type Props = {
  appBar: ReactNode,
  mainContent: ReactNode,
}
export type AppBarLayoutV2Props = Props

export const AppBarLayoutV2: FC<Props> = ({
                                            appBar,
                                            mainContent,
                                          }) => {
  const theme        = useTheme()
  const appBarHeight = theme.styles.appBar.height

  return (
    <Container>
      <FlexBox _css={css`min-height: calc(100% - ${appBarHeight});`}
               gap={"unset"}
               withRows>
        {mainContent}
      </FlexBox>
      {appBar}
    </Container>
  )
}

const Container = styled.div`
  height: 100%;
`
