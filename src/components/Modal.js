// @flow

import { Button, type Props as ButtonProps } from "components/forms/Button"
import type { StyledComponentProps }         from "components/StyledComponentProps.type"
import * as React                            from "react"
import {
    Modal as ZenModal,
    Header as ZenHeader,
    Body,
    Footer,
    FooterItem,
    Close,
}                                            from "@zendeskgarden/react-modals"
import styled                                from "styled-components"
import { textWithColor }                     from "styles/mixins"

export type ModalContent = {
    autoClose? :boolean,
    blocking? :boolean,
    body :any,
    buttons? :Array<{ +props :{ disableable :boolean } & ButtonProps }>,
    isDanger? :boolean,
    isSuccess? :boolean,
    isWarning? :boolean,
    title? :string,
    withCancelButton? :boolean,
    withNoActions? :boolean,
    onClose? :() => void,
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
    buttons :Array<React.Node>,
    closeModal :() => void,
    shouldDisable :boolean,
    autoClose :boolean,
) => (
    // $FlowFixMe
    buttons.map((b :React.Element<{ +props :{ disableable :boolean } & ButtonProps }>) => {
        const { onClick, disabled, disableable } = b.props
        return (
            <FooterItem key={b.key}>
                {React.cloneElement(
                    b,
                    {
                        onClick : async () => {
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
          } :ModalContent = modalContent

    const handleClose = () => {
        closeModal()
        if (onClose) onClose()
    }

    const footerItems = () => (
        buttons
        ? createButtons(buttons, handleClose, disableActions, autoClose)
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
                      onClick: (e :SyntheticMouseEvent<HTMLElement>) => {
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

Modal.COMPONENT_NAME = "Modal"
Modal.defaultProps   = {}
