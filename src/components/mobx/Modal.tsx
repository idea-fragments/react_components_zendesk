import { Modal as ModalView }   from "components/modals/Modal"
import { StyledComponentProps } from "components/StyledComponentProps.type"
import * as React                    from "react"
import { useStores }                 from "stores/useStores"
import { useObserver }               from "mobx-react"
import styled, { css }               from "styled-components"
import { mediaQueries }              from "styles/mediaQueries"

const stylesForDevices = css`
  ${mediaQueries().forLargeTabletsAndUp(css`
    width: 544px;
    margin: 0;
    left: unset;
    right: unset;
  `)}
`

export let Modal = ({ className }: StyledComponentProps) => {
  const { ui } = useStores<{ ui: any }>()

  return useObserver(() => {
    const {
            closeModal,
            modalContent,
            areModalActionsDisabled,
          } = ui

    return <ModalView closeModal={closeModal}
                      modalContent={modalContent}
                      isVisible={ui.isModalVisible}
                      disableActions={areModalActionsDisabled}
                      className={className} />
  })
}

Modal = styled(Modal)`
  &&& {
    left: 0;
    width: unset;
    margin: 1rem;
    right: 0;
    ${({ fluid }: { fluid: boolean }) => fluid ? "" : stylesForDevices}
  }
`
