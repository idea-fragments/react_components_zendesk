import { mdiClose } from "@mdi/js"
import { Button } from "components/forms/Button"
import { FlexBox } from "components/layout/FlexBox"
import { FC, PropsWithChildren } from "react"
import styled, { css } from "styled-components"
import { SPACINGS } from "styles/spacings"
import { useTheme } from "styles/theme/useTheme"

export type FullScreenProps = PropsWithChildren<{
  className?: string
  fluidContent?: boolean
  onCloseClicked: () => void
  visible?: boolean
}>

export let FullScreen = styled<FC<FullScreenProps>>(
  ({ children, className, fluidContent, onCloseClicked, visible = false }) => {
    const theme = useTheme()

    return (
      <Container
        className={className}
        fluidContent={fluidContent}
        hidden={!visible}
        withRows>
        <Button
          _css={css`
            align-self: flex-end;
            padding: 0.5rem;
            height: auto;
            position: ${fluidContent ? "absolute" : "relative"};
            margin-top: ${fluidContent ? "2rem" : "1rem"};
            margin-right: ${fluidContent ? "2rem" : "0"};
            z-index: 1;
          `}
          color={theme.styles.colors.white}
          icon={mdiClose}
          iconSize={"1.5rem"}
          onClick={onCloseClicked}
          pill
        />

        <Content>{visible ? children : null}</Content>
      </Container>
    )
  },
)``

const Container = styled(FlexBox)<{ fluidContent?: boolean; hidden: boolean }>`
  background: ${({ theme }) => theme.styles.colors.black};
  position: fixed;
  height: 100vh;
  width: 100vw;
  top: ${({ hidden }) => (hidden ? "100vh" : "0")};
  left: 0;
  z-index: ${({ theme }) => theme.styles.appBar.zIndex + 1};
  padding: ${({ fluidContent }) => (fluidContent ? "0" : SPACINGS.SM)};
  transition: top 0.5s ease-in-out;
`

const Content = styled.div`
  height: 100%;
  width: 100%;
`
