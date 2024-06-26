import { FlexBox } from "components/layout/FlexBox"
import { Dots } from "components/loaders/Dots"
import React, { ComponentType, PropsWithChildren, useContext } from "react"
import styled, { ThemeContext } from "styled-components"
import { Theme } from "styles/theme/Theme.type"
import { CSSProp } from "styles/types"

type Props = {
  className?: string
  innerAs?: ComponentType<any>
  isLoading: boolean
} & CSSProp

export let TranslucentLoader = ({
  _css,
  children,
  className,
  innerAs,
  isLoading = true,
}: PropsWithChildren<Props>) => {
  const theme = useContext<Theme>(ThemeContext)

  return (
    <Container
      as={innerAs}
      className={className}
      _css={_css}>
      {children}
      {isLoading ? (
        <SpinnerContainer
          alignItems={"center"}
          justifyContent={"center"}>
          <Dots color={theme.styles.colorPrimary} />
        </SpinnerContainer>
      ) : null}
    </Container>
  )
}

TranslucentLoader = styled(TranslucentLoader)<Props>``

const Container = styled.div<{ _css?: CSSProp; fluid?: boolean }>`
  position: relative;
  ${({ _css }) => (_css ? _css : "")}
`

const SpinnerContainer = styled(FlexBox)`
  background: white;
  opacity: 0.7;
  top: 0;
  left: 0;
  position: fixed;
  height: 100%;
  width: 100%;
  z-index: 100;
`
