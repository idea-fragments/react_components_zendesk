import { mdiClose }                  from "@mdi/js"
import { Button }                    from "components/forms/Button"
import { IconButton }                from "components/forms/IconButton"
import { FlexBox }                   from "components/layout/FlexBox"
import type { StyledComponentProps } from "components/StyledComponentProps.type"
import { StyledProps }               from "components/StyledProps.type"
import { Nullable }                  from "global"
import {
  FC,
  MouseEvent,
  ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState
}                                    from "react"
import styled                        from "styled-components"
import { SPACINGS }                  from "styles/spacings"
import { useTheme }                  from "styles/theme/useTheme"
import { FONT_WEIGHTS }              from "styles/typography"
import { Logger }                    from "utils/logging/Logger"

export type DrawerContent = {
  body: ReactNode,
  title?: string,
  withCancelButton?: boolean,
  // withNoActions?: boolean,
  onClose?: () => void,
}

type Props = {
  closeDrawer: () => void,
  drawerContent: Nullable<DrawerContent>,
  isOpen: boolean,
} & StyledComponentProps

const ANIMATION_DURATION_MS = 300
const MARGIN_SIZE           = SPACINGS.MD
const logger                = new Logger("Drawer")

export let Drawer: FC<Props> = ({
                                  closeDrawer,
                                  drawerContent,
                                  isOpen: isOpenProp,
                                }) => {
  const backdropRef                 = useRef<HTMLDivElement>(null)
  const cachedContent               = useRef<ReactNode>()
  const htmlOverflow                = useRef<string>()
  const [isOpen, setIsOpenTo]       = useState(false)
  const [isClosing, setIsClosingTo] = useState(false)
  const theme                       = useTheme()
  const {
          body,
          onClose,
          title,
          withCancelButton
        }                           = drawerContent ?? {} as DrawerContent

  const animateClose = useCallback(() => {
    setIsClosingTo(true)
    setTimeout(() => {
      logger.writeInfo("setting to close")
      setIsOpenTo(false)
      setIsClosingTo(false)
      cachedContent.current = undefined
    }, ANIMATION_DURATION_MS)
  }, [])

  const closeButtonColor = theme.styles.getTextColorForBackground({
    color: theme.styles.sidebar.background,
    theme,
  })

  const handleBackdropClick = ({ target, currentTarget }: MouseEvent) => {
    logger.writeInfo(
      "backdrop click - target:", target,
      "current target:", currentTarget
    )

    if (target === currentTarget && target === backdropRef.current) handleClose()
  }

  const handleClose = () => {
    closeDrawer()
    if (onClose) onClose()
  }

  useEffect(() => { if (isOpenProp) setIsOpenTo(true) }, [isOpenProp])

  useEffect(() => {
    if (isOpenProp || !isOpen) return
    animateClose()
  }, [animateClose, isOpen, isOpenProp])

  useEffect(() => {
    if (!drawerContent || !drawerContent.body) return
    cachedContent.current = drawerContent.body
  }, [drawerContent])

  useEffect(() => {
    const root      = document.querySelector("html")!!
    const resetRoot = () => { root.style.overflow = htmlOverflow.current!! }

    if (isOpen) {
      htmlOverflow.current = root.style.overflow
      root.style.overflow  = "hidden"
      return resetRoot
    }

    if (!isOpen) resetRoot()
  }, [isOpen])

  logger.writeInfo("isOpen", isOpen)
  if (!isOpen) return null
  if (!drawerContent && !cachedContent.current)
    throw new Error("Drawer found null drawer content")

  return (
    <Backdrop isClosing={isClosing}
              onClick={handleBackdropClick}
              ref={backdropRef}>
      <AbsoluteContainer withRows isClosing={isClosing}>
        <Header>
          <Title>{title}</Title>
          <IconButton
            icon={mdiClose}
            color={closeButtonColor}
            onClick={handleClose}
            aria-label="Close drawer" />
        </Header>

        <Body>{body ?? cachedContent.current}</Body>
        <Footer>
          {withCancelButton
           ? <Button compact
                     disabled={isClosing}
                     flat
                     onClick={handleClose}>
             Cancel
           </Button>
           : null}
          <Button compact disabled={isClosing} onClick={handleClose}>OK</Button>
        </Footer>
      </AbsoluteContainer>
    </Backdrop>
  )

}

Drawer                = styled(Drawer)`
  html {
    overflow: hidden;
  }
`
// @ts-ignore
Drawer.COMPONENT_NAME = "Drawer"
Drawer.defaultProps   = {}

const AbsoluteContainer = styled(FlexBox)<{ isClosing: boolean }>`
  @keyframes DrawerAbsoluteContainerOpen {
    from {right: -380px;}
    to {right: 0;}
  }

  @keyframes DrawerAbsoluteContainerClose {
    0% {right: 0;}
    20% {right: 20px;}
    to {right: -380px;}
  }

  animation: ${ANIMATION_DURATION_MS}ms ease-out 0s 1 normal forwards running;
  animation-name: ${({ isClosing }) => isClosing
                                       ? "DrawerAbsoluteContainerClose"
                                       : "DrawerAbsoluteContainerOpen"};
  background: ${({ theme }) => theme.styles.sidebar.background};
  box-shadow: ${({ theme }) => theme.styles.sidebar.boxShadow} 0 20px 28px 0;
  height: 100vh;
  gap: unset;
  //padding: 1rem;
  position: fixed;
  right: 0;
  top: 0;
  width: min(380px, 90vw);
  z-index: 1000;
`

const Backdrop = styled.div<{ isClosing: boolean }>`
  @keyframes ModalBackdropOpen {
    from {opacity: 0;}
    to {opacity: 100%;}
  }

  @keyframes ModalBackdropClose {
    0% {opacity: 100%;}
    50% {opacity: 100%;}
    to {opacity: 0;}
  }

  animation: ${ANIMATION_DURATION_MS}ms ease-out 0s 1 normal forwards running;
  animation-name: ${({ isClosing }) => isClosing
                                       ? "ModalBackdropClose"
                                       : "ModalBackdropOpen"};
  background-color: ${(p: StyledProps) => p.theme.styles.modal.backdrop.background};
  display: flex;
  inset: 0;
  overflow: auto;
  position: fixed;
  z-index: 400;
`

const Body = styled(FlexBox)`
  flex: 1;
  overflow: auto;
  padding: ${MARGIN_SIZE};
`

const Footer = styled(FlexBox)`
  border-top: 1px solid ${(p: StyledProps) => p.theme.styles.border.color};
  justify-content: flex-end;
  padding: ${MARGIN_SIZE};
`

const Header = styled(FlexBox)`
  align-items: center;
  border-bottom: 1px solid ${(p: StyledProps) => p.theme.styles.border.color};
  padding: ${MARGIN_SIZE};
`

const Title = styled.div`
  flex: 1;
  font-weight: ${FONT_WEIGHTS.BOLD};
`
