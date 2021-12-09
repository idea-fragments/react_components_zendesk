import {
  Body,
  Close,
  Footer,
  FooterItem,
  Header as ZenHeader,
  Modal as ZenModal,
}                                                    from "@zendeskgarden/react-modals"
import {
  Button,
  Props as ButtonProps
}                                                    from "components/forms/Button"
import type { StyledComponentProps }                 from "components/StyledComponentProps.type"
import React, { MouseEvent, ReactElement, useState } from "react"
import styled                                        from "styled-components"
import { textWithColor }                             from "styles/mixins"

type ButtonType =
  ReactElement
  & { props: { disableable: boolean } & ButtonProps }

export type ModalContent = {
  autoClose?: boolean,
  blocking?: boolean,
  body: any,
  buttons?: ButtonType[],
  isDanger?: boolean,
  isSuccess?: boolean,
  isWarning?: boolean,
  title?: string,
  withCancelButton?: boolean,
  withNoActions?: boolean,
  onClose?: () => void,
}

const Header = styled(ZenHeader).attrs(({
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
          isDanger,
          isSuccess,
          isWarning,
          title,
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
              success={isSuccess}
              danger={isDanger}
              warning={isWarning}>
        OK
      </Button>
    </FooterItem>
  )

  return (
    <ZenModal onClose={handleClose}
              className={className}
              animate
              backdropProps={{
                onClick: (e: MouseEvent<HTMLElement>) => {
                  e.preventDefault()
                },
              }}>
      <Header danger={isDanger} success={isSuccess} warning={isWarning}>
        {title}
      </Header>
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
                     success={isSuccess}
                     danger={isDanger}
                     warning={isWarning}>
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

Modal = styled(Modal)`
  &&&& {
    color: ${({ theme }) => theme.styles.textColorPrimary};

    ${Body} {
      font-size: inherit;
    }
  }
`

// @ts-ignore
Modal.COMPONENT_NAME = "Modal"
