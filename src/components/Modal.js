// @flow

import { Button, type Props as ButtonProps } from "components/forms/Button"
import type { StyledComponentProps }         from "components/StyledComponentProps.type"
import * as React                            from "react"
import {
    Modal as ZenModal,
    Header,
    Body,
    Footer,
    FooterItem,
    Close,
}                                            from "@zendeskgarden/react-modals"
import type { ModalContent }                 from "stores/UiStore"
import styled                                from "styled-components"


const createButtons = (
    buttons :Array<React.Node>,
    closeModal :() => void,
    shouldDisable :boolean,
) => (
    // $FlowFixMe
    buttons.map((b :React.Element<{ +props :{ disableable :boolean } & ButtonProps }>) => {
        const { onClick, disabled, disableable } = b.props
        return (
            <FooterItem key={b.key}>
                {React.cloneElement(
                    b,
                    {
                        onClick : () => {
                            onClick()
                            closeModal()
                        },
                        disabled: disableable ? shouldDisable : disabled,
                    },
                )}
            </FooterItem>
        )
    })
)

type Props = {
    isVisible :boolean,
    closeModal :() => void,
    disableActions :boolean,
    modalContent :?ModalContent,
} & StyledComponentProps

export let Modal = ({
                        isVisible,
                        closeModal,
                        disableActions,
                        modalContent,
                        className,
                    } :Props) => {

    if (!isVisible) return null
    if (!modalContent) throw new Error("Modal found null modal content")

    const {
              title,
              body,
              buttons,
              onClose,
              withCancelButton,
              withNoActions,
              isDanger,
              isSuccess,
          } :ModalContent = modalContent

    const handleClose = () => {
        closeModal()
        if (onClose) onClose()
    }

    const footerItems = () => (
        buttons
        ? createButtons(buttons, handleClose, disableActions)
        : <FooterItem>
            <Button onClick={handleClose}
                    primary
                    disabled={disableActions}
                    success={isSuccess}
                    danger={isDanger}>
                OK
            </Button>
        </FooterItem>
    )

    return (
        <ZenModal onClose={handleClose}
                  className={className}
                  animate
                  backdropProps={{
                      onClick: (e :SyntheticMouseEvent<HTMLElement>) => {
                          e.preventDefault()
                      },
                  }}>
            <Header danger={isDanger}>{title}</Header>
            <Body>{body}</Body>
            {
                withNoActions
                ? null
                : <Footer>
                    {withCancelButton
                     ? <FooterItem>
                         <Button onClick={handleClose} flat>
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

Modal                = styled(Modal)`
    ${Body} {
      font-size: inherit;
    }
`
Modal.COMPONENT_NAME = "Modal"
Modal.defaultProps   = {}
