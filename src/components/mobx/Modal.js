// @flow

import { Modal as ModalView }        from "components/Modal"
import type { StyledComponentProps } from "components/StyledComponentProps.type"
import * as React                    from "react"
import { UiStore }                   from "stores/UiStore"
import { useStores }                 from "stores/useStores"
import { useObserver }               from "mobx-react"
import styled, { css }               from "styled-components"

const fluidStyles = css`
  &&& {
    left: 0;
    width: unset;
    margin: 1rem;
    right: 0;
  }
`

export let Modal = ({ className } :StyledComponentProps) => {
    const { ui } = useStores<{ ui :UiStore }>()

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
  ${({ fluid }) => fluid ? fluidStyles : ""}
`

Modal.COMPONENT_NAME = "Modal"
Modal.defaultProps   = {
    fluid: false,
}
