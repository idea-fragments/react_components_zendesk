import { FlexBox }                                             from "components/layout/FlexBox"
import { Dots }                                                from "components/loaders/Dots"
import React, { ComponentType, PropsWithChildren, useContext } from "react"
import styled, { ThemeContext }                                from "styled-components"
import { Theme }                                               from "styles/theme/Theme.type"

type Props = {
  className?: string,
  innerAs?: ComponentType<any>,
  isLoading: boolean,
}

export let TranslucentLoader = ({
                                  children,
                                  className,
                                  innerAs,
                                  isLoading = true
                                }: PropsWithChildren<Props>) => {
  const theme = useContext<Theme>(ThemeContext)

  return (
    <Container as={innerAs} className={className}>
      {children}
      {
        isLoading
        ? <FlexBox alignItems={"center"}
                   justifyContent={"center"}
                   css={`
                     background: white;
                     opacity: .7;
                     top: 0;
                     left: 0;
                     position: absolute;
                     height: 100%;
                     width: 100%;
                   `}>
          <Dots color={theme.styles.colorPrimary} />
        </FlexBox>
        : null
      }
    </Container>
  )
}

TranslucentLoader = styled(TranslucentLoader)<Props>``

const Container = styled.div`
  position: relative;
`
