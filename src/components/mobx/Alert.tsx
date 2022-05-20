import { Alert as AlertView }        from "components/Alert"
import type { StyledComponentProps } from "components/StyledComponentProps.type"
import * as React                    from "react"
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

// TODO remove mobx
export let Alert = ({ className }: StyledComponentProps) => {
  const { ui } = useStores<{ ui: any }>()

  return useObserver(() => {
    const { closeAlert, alertContent } = ui

    return <AlertView closeAlert={closeAlert}
                      alertContent={alertContent}
                      isVisible={ui.isAlertVisible}
                      className={className} />
  })
}

Alert = styled(Alert)<{ fluid?: boolean }>`
  ${({ fluid }) => fluid ? fluidStyles : ""}
`
