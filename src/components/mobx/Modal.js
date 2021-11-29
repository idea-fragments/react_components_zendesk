// @flow

import { Modal as ModalView }        from "components/Modal"
import type { StyledComponentProps } from "components/StyledComponentProps.type"
import * as React    from "react"
import { UiStore }   from "stores/UiStore"
import { useStores } from "stores/useStores"
import { useObserver }               from "mobx-react"
import styled, { css }               from "styled-components"
import { mediaQueries }               from "styles/mediaQueries"

const stylesForDevices = css`
  ${mediaQueries().forLargeTabletsAndUp(`
    width: 544px;
    margin: 0;
    left: unset;
    right: unset;
  `)}
`

export let Modal = ({ className } :StyledComponentProps) => {
    const { ui } = useStores<{ ui :UiStore }>()

    return useObserver(() => {
        const {
                  closeModal,
                  modalContent,
                  areModalActionsDisabled,
              } = ui

      console.log("ui.isModalVisible", ui.isModalVisible)
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
    ${({ fluid }) => fluid ? "" : stylesForDevices}
  }
`

Modal.COMPONENT_NAME = "Modal"
Modal.defaultProps   = {
    fluid: false,
}
