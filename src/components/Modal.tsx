import {
  Body as ZBody,
  Close,
  Footer,
  FooterItem,
  Header as ZenHeader,
  Modal as ZenModal,
  /* @ts-ignore */
}                                                    from "@zendeskgarden/react-modals"
import {
  Button,
  Props as ButtonProps
}                                                    from "components/forms/Button"
import { StyledComponentProps }                      from "components/StyledComponentProps.type"
import React, { MouseEvent, ReactElement, useState } from "react"
import styled, { css }                               from "styled-components"
import { textWithColor }                             from "styles/mixins"
import { UserFeedbackProps }                         from "styles/UserFeedbackProps"

type ButtonType =
  ReactElement
  & { props: { disableable: boolean } & ButtonProps }

export type ModalContent = {
  autoClose?: boolean,
  blocking?: boolean,
  body: any,
  buttons?: ButtonType[],
  isLarge?: boolean,
  isNotDismissible?: boolean,
  title?: string,
  withCancelButton?: boolean,
  withNoActions?: boolean,
  onClose?: () => void,
} & UserFeedbackProps

const Header = styled(ZenHeader).attrs<UserFeedbackProps>(({
                                                             danger,
                                                             success,
                                                             warning,
                                                             theme,
                                                           }) => {
  // Color is overwritten by a class style from zendesk :(
  let color = theme.styles.textColorPrimary
  if (danger) color = theme.styles.colorDanger
  if (success) color = theme.styles.colorSuccess
  if (warning) color = theme.styles.colorWarning

  return { color }
})`
  ${textWithColor}
`

const createButtons = (
  buttons: ButtonType[],
  closeModal: () => void,
  shouldDisable: boolean,
  autoClose: boolean,
  adjustModalState: () => void,
) => (
  buttons.map((b: ButtonType) => {
    const { onClick, disabled, disableable } = b.props
    return (
      <FooterItem key={b.key}>
        {React.cloneElement(
          b,
          {
            onClick:  async () => {
              adjustModalState()
              await onClick()
              if (autoClose) closeModal()
            },
            disabled: disableable ? shouldDisable : disabled,
          },
        )}
      </FooterItem>
    )
  })
)

type Props = {
  isVisible: boolean,
  closeModal: () => void,
  disableActions: boolean,
  modalContent: ModalContent | null | undefined,
} & StyledComponentProps

export type ModalProps = Props

export let Modal = ({
                      isVisible,
                      closeModal,
                      disableActions,
                      modalContent,
                      className,
                    }: Props) => {

  const [isProcessing, setIsProcessingTo] = useState(false)
  if (!isVisible) return null
  if (!modalContent) throw new Error("Modal found null modal content")

  const {
          autoClose = true,
          body,
          buttons,
          danger,
          isLarge,
          success,
          title,
          warning,
          withCancelButton,
          withNoActions,
          onClose,
        }: ModalContent = modalContent

  const handleClose = () => {
    closeModal()
    setIsProcessingTo(false)
    if (onClose) onClose()
  }

  const setProcessingState = () => setIsProcessingTo(true)

  const footerItems = () => (
    buttons
    ? createButtons(
      buttons,
      handleClose,
      disableActions,
      autoClose,
      setProcessingState
    )
    : <FooterItem>
      <Button onClick={handleClose}
              primary
              disabled={disableActions}
              success={success}
              danger={danger}
              warning={warning}>
        OK
      </Button>
    </FooterItem>
  )


  return (
    <ZenModal onClose={handleClose}
              className={className}
              isAnimated
              isLarge={isLarge}
              backdropProps={{
                onClick: (e: MouseEvent<HTMLElement>) => { e.preventDefault() },
                style:   { fontFamily: "inherit" },
              }}>
      {
        title
          // @ts-ignore
        ? <Header danger={danger} success={success} warning={warning}>
          {title}
        </Header>
        : null
      }

      <Body>{body}</Body>
      {
        withNoActions
        ? null
        : <Footer>
          {withCancelButton
           ? <FooterItem>
             <Button onClick={handleClose}
                     flat
                     loading={isProcessing}
                     success={success}
                     danger={danger}
                     warning={warning}>
               Cancel
             </Button>
           </FooterItem>
           : null}

          {footerItems()}
        </Footer>
      }
      <Close aria-label="Close modal" />
    </ZenModal>
  )
}

const hideCloseButton = css`
  button[data-garden-id="modals.close"] {
    display: none;
  }
`

const Body = styled(ZBody)`
  font-size: inherit;
`

Modal = styled(Modal)<Props>`
  &&&& {
    color: ${({ theme }) => theme.styles.textColorPrimary};

    ${({ modalContent }) => modalContent?.isNotDismissible
                            ? hideCloseButton
                            : ""}
  }
`
