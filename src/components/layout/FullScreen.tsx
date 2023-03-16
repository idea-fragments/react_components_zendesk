import { mdiClose }    from "@mdi/js"
import { Button }      from "components/forms/Button"
import { FlexBox }     from "components/layout/FlexBox"
import {
  FC,
  PropsWithChildren
}                      from "react"
import styled, { css } from "styled-components"
import { COLORS }      from "styles/colors"
import { SPACINGS }    from "styles/spacings"

export type FullScreenProps = PropsWithChildren<{
  className?: string,
  onCloseClicked: () => void,
  visible?: boolean,
}>

export let FullScreen = styled<FC<FullScreenProps>>(({
                                                       children,
                                                       className,
                                                       onCloseClicked,
                                                       visible = false,
                                                     }) => {

  return <Container className={className}
                    hidden={!visible}
                    withRows>
    <FlexBox _css={css`width: 100%;`} justifyContent={"flex-end"}>
      <Button
        _css={css`padding: .5rem; height: auto; margin-top: 1rem;`}
        color={COLORS.WHITE}
        icon={mdiClose}
        iconSize={"1.5rem"}
        onClick={onCloseClicked}
        pill
      />
    </FlexBox>
    {visible ? children : null}
  </Container>
})``

const Container = styled(FlexBox)<{ hidden: boolean }>`
  background: ${COLORS.BLACK};
  position: fixed;
  height: 100vh;
  width: 100vw;
  top: ${({ hidden }) => hidden ? "100vh" : "0"};
  left: 0;
  z-index: ${({ theme }) => theme.styles.appBar.zIndex + 1};
  padding: ${SPACINGS.SM};
  transition: top .5s ease-in-out;
`
