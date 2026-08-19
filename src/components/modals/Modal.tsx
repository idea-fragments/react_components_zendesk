import { mdiClose } from "@mdi/js"
import {
  Body as ZBody,
  Footer,
  FooterItem,
  Header as ZenHeader,
  Modal as ZenModal,
} from "@zendeskgarden/react-modals"
import { Button, BUTTON_SIZES, ButtonProps } from "components/forms/Button"
import { StyledComponentProps } from "components/StyledComponentProps.type"
import React, { ReactElement, ReactNode, useState } from "react"
import styled, { css } from "styled-components"
import { mediaQueries } from "styles/mediaQueries"
import { textWithColor } from "styles/mixins"
import { SPACINGS } from "styles/spacings"
import { CSSProp } from "styles/types"
import { FONT_SIZES } from "styles/typography"
import { useTheme } from "styles/theme/useTheme"
import { UserFeedbackProps } from "styles/UserFeedbackProps"

type ButtonType = ReactElement & {
  props: { disableable: boolean } & ButtonProps
}

export const MODAL_SIZES = {
  FULL_SCREEN: "FULL_SCREEN",
  LG: "LG",
  SM: "SM",
  XL: "XL",
} as const
export type ModalSize = (typeof MODAL_SIZES)[keyof typeof MODAL_SIZES]

export type ModalContent = {
  autoClose?: boolean
  blocking?: boolean
  body: any
  buttons?: ButtonType[]
  isNotDismissible?: boolean
  size?: ModalSize
  title?: ReactNode
  withCancelButton?: boolean
  withNoActions?: boolean
  onClose?: () => void
} & UserFeedbackProps

const Header = styled(ZenHeader).attrs<UserFeedbackProps>(
  ({ danger, success, warning, theme }) => {
    let color = theme.styles.textColorPrimary
    if (danger) color = theme.styles.colorDanger
    if (success) color = theme.styles.colorSuccess
    if (warning) color = theme.styles.colorWarning

    return { color }
  },
)<UserFeedbackProps & { color: string; inline?: boolean | undefined }>`
  ${textWithColor}
`

const createButtons = (
  buttons: ButtonType[],
  closeModal: () => void,
  shouldDisable: boolean,
  autoClose: boolean,
  adjustModalState: () => void,
) =>
  buttons.map((b: ButtonType) => {
    const { onClick, disabled, disableable } = b.props
    return (
      <FooterItem key={b.key}>
        {React.cloneElement(b, {
          onClick: async () => {
            adjustModalState()
            await onClick()
            if (autoClose) closeModal()
          },
          disabled: disableable ? shouldDisable : disabled,
        })}
      </FooterItem>
    )
  })

export type ModalProps = {
  blurBackdrop?: boolean
  isVisible: boolean
  closeModal: () => void
  disableActions: boolean
  modalContent: ModalContent | null | undefined
} & StyledComponentProps &
  CSSProp

export let Modal = ({
  blurBackdrop,
  isVisible,
  closeModal,
  disableActions,
  modalContent,
  className,
}: ModalProps) => {
  const [isProcessing, setIsProcessingTo] = useState(false)
  const theme = useTheme()
  if (!isVisible) return null
  if (!modalContent) throw new Error("Modal found null modal content")

  const {
    autoClose = true,
    body,
    buttons,
    danger,
    isNotDismissible,
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

  const footerItems = () =>
    buttons ? (
      createButtons(
        buttons,
        handleClose,
        disableActions,
        autoClose,
        setProcessingState,
      )
    ) : (
      <FooterItem>
        <Button
          onClick={handleClose}
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
    <ZenModal
      onClose={isNotDismissible ? () => {} : handleClose}
      className={className}
      isAnimated
      backdropProps={{
        style: {
          backdropFilter: blurBackdrop ? "blur(4px)" : undefined,
          fontFamily: "inherit",
          zIndex: theme.styles.modal.zIndex,
        },
      }}>
      {title ? (
        <Header
          color={""}
          danger={danger}
          success={success}
          warning={warning}>
          {title}
        </Header>
      ) : null}

      <Body>{body}</Body>
      {withNoActions ? null : (
        <Footer>
          {withCancelButton ? (
            <FooterItem>
              <Button
                onClick={handleClose}
                flat
                loading={isProcessing}
                success={success}
                danger={danger}
                warning={warning}>
                Cancel
              </Button>
            </FooterItem>
          ) : null}

          {footerItems()}
        </Footer>
      )}
      {isNotDismissible ? null : (
        <CloseButtonWrap>
          <Button
            aria-label={"Close modal"}
            compact
            danger={danger}
            flat
            icon={mdiClose}
            iconSize={FONT_SIZES.MD}
            onClick={handleClose}
            primary={false}
            size={BUTTON_SIZES.X_SMALL}
            success={success}
            warning={warning}
          />
        </CloseButtonWrap>
      )}
    </ZenModal>
  )
}

const Body = styled(ZBody)`
  font-size: inherit;
`

const CloseButtonWrap = styled.div`
  position: absolute;
  right: 2.3rem;
  top: 1.3rem;
`

Modal = styled(Modal)<ModalProps>`
  &&&& {
    margin-left: ${SPACINGS.SM};
    margin-right: ${SPACINGS.SM};
    color: ${({ theme }) => theme.styles.textColorPrimary};
    border-radius: ${({ theme }) => theme.styles.modal.borderRadius};
    max-width: calc(100vw - ${SPACINGS.SM} * 2);
    width: ${({ modalContent, theme }) =>
      theme.styles.modal.sizes[modalContent?.size ?? MODAL_SIZES.SM]};
    z-index: ${({ theme }) => theme.styles.modal.zIndex};

    ${({ modalContent }) =>
      modalContent?.size === MODAL_SIZES.FULL_SCREEN
        ? css`
            height: calc(100vh - (${SPACINGS.SM} * 2));
            max-height: calc(100vh - (${SPACINGS.SM} * 2));
            margin: ${SPACINGS.SM};
            width: calc(100vw - (${SPACINGS.SM} * 2));
          `
        : mediaQueries().forPhones(css`
            width: calc(100% - (${SPACINGS.SM} * 2));
          `)}

    ${({ _css }) => _css}
  }
`
