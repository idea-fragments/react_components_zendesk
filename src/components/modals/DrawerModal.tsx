import { DrawerModal as ZenDrawerModal } from "@zendeskgarden/react-modals"

export type DrawerModalProps = {
  isOpen: boolean
  width?: string
  title?: string
  footer?: React.ReactNode
  drawerModalBody: React.ReactNode
  onCloseDrawerModal?: () => void
}

export const DrawerModal: React.FC<DrawerModalProps> = ({
  isOpen = false,
  width,
  title,
  footer,
  onCloseDrawerModal,
  drawerModalBody,
}) => {
  return (
    <ZenDrawerModal
      isOpen={isOpen}
      onClose={onCloseDrawerModal}
      css={`
        width: ${width};
      `}>
      {title ? (
        <ZenDrawerModal.Header tag="h2">{title}</ZenDrawerModal.Header>
      ) : null}
      <ZenDrawerModal.Body>{drawerModalBody}</ZenDrawerModal.Body>
      {footer ? (
        <ZenDrawerModal.Footer>
          <ZenDrawerModal.FooterItem>{footer}</ZenDrawerModal.FooterItem>
        </ZenDrawerModal.Footer>
      ) : null}
      {title ? <ZenDrawerModal.Close /> : null}
    </ZenDrawerModal>
  )
}
