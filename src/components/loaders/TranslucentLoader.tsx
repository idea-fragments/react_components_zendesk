import { FlexBox } from "components/layout/FlexBox"
import { Dots } from "components/loaders/Dots"
import React, {
  ComponentType,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react"
import styled, { ThemeContext } from "styled-components"
import { Theme } from "styles/theme/Theme.type"
import { CSSProp } from "styles/types"

type Props = {
  className?: string
  delayMs?: number
  innerAs?: ComponentType<any>
  isLoading: boolean
  fullScreenBackdrop?: boolean
} & CSSProp

export let TranslucentLoader = ({
  _css,
  children,
  className,
  delayMs,
  innerAs,
  isLoading = true,
  fullScreenBackdrop = false,
}: PropsWithChildren<Props>) => {
  const theme = useContext<Theme>(ThemeContext)
  const showSpinner = useDelayedLoading(isLoading, delayMs)

  return (
    <Container
      as={innerAs}
      className={className}
      _css={_css}>
      {children}
      {showSpinner ? (
        <SpinnerContainer
          alignItems={"center"}
          fullScreen={fullScreenBackdrop}
          justifyContent={"center"}>
          <Dots color={theme.styles.colorPrimary} />
        </SpinnerContainer>
      ) : null}
    </Container>
  )
}

const useDelayedLoading = (isLoading: boolean, delayMs?: number): boolean => {
  const [visible, setVisible] = useState(!delayMs && isLoading)

  useEffect(() => {
    if (!isLoading) {
      setVisible(false)
      return
    }

    if (!delayMs) {
      setVisible(true)
      return
    }

    const timer = setTimeout(() => setVisible(true), delayMs)
    return () => clearTimeout(timer)
  }, [isLoading, delayMs])

  return visible
}

TranslucentLoader = styled(TranslucentLoader)<Props>``

const Container = styled.div<{ _css?: CSSProp; fluid?: boolean }>`
  position: relative;
  ${({ _css }) => (_css ? _css : "")}
`

const SpinnerContainer = styled(FlexBox)<{ fullScreen: boolean }>`
  background: white;
  opacity: 0.7;
  top: 0;
  left: 0;
  position: ${({ fullScreen }) => (fullScreen ? "fixed" : "absolute")};
  height: 100%;
  width: 100%;
  z-index: 100;
`
