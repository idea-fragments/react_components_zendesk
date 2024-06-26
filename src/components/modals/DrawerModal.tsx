import { DrawerModal as ZenDrawerModal } from "@zendeskgarden/react-modals"
import { FC, ReactNode } from "react"
import styled from "styled-components"
import { SPACINGS } from "styles/spacings"
import { CSSProp } from "styles/types"

export type DrawerModalProps = {
  drawerModalBody: ReactNode
  footerActions?: ReactNode[]
  isOpen: boolean
  onCloseDrawerModal?: () => void
  title?: string
  width?: string
} & CSSProp

export const DrawerModal = styled((({
  className,
  drawerModalBody,
  footerActions,
  isOpen = false,
  onCloseDrawerModal,
  title,
}) => {
  return (
    <ZenDrawerModal
      backdropProps={{ style: { fontFamily: "inherit" } }}
      className={className}
      isOpen={isOpen}
      onClose={onCloseDrawerModal}>
      {title ? (
        <ZenDrawerModal.Header tag="h2">{title}</ZenDrawerModal.Header>
      ) : null}
      <ZenDrawerModal.Body>{drawerModalBody}</ZenDrawerModal.Body>
      {footerActions ? (
        <ZenDrawerModal.Footer>
          {footerActions.map((n: ReactNode, i) => (
            <ZenDrawerModal.FooterItem key={i}>{n}</ZenDrawerModal.FooterItem>
          ))}
        </ZenDrawerModal.Footer>
      ) : null}
      {title ? <ZenDrawerModal.Close /> : null}
    </ZenDrawerModal>
  )
}) as FC<DrawerModalProps>)`
  font-family: inherit;
  width: ${({ width, theme }) => width ?? theme.styles.drawer.width};
  max-width: calc(100vw - ${SPACINGS.SM});
  ${({ _css }) => _css}
`
