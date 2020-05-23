// @flow

import { FlexBlock }                 from "components/layout/FlexBlock"
import type { StyledComponentProps } from "components/StyledComponentProps.type"
import { useCallback, useEffect }    from "react"
import * as React                    from "react"
import {
    Alert as ZenAlert,
    Title,
    Close,
}                                    from "@zendeskgarden/react-notifications"
import styled                        from "styled-components"

export const ALERT_TYPES = Object.freeze({
    INFO   : "info",
    SUCCESS: "success",
    ERROR  : "error",
    WARNING: "warning",
})

export type AlertType = $Values<typeof ALERT_TYPES>

export type AlertContent = {
    title? :string,
    body :any,
    onClose? :() => void,
    type? :AlertType,
}

type Props = {
    isVisible :boolean,
    closeAlert :() => void,
    alertContent :?AlertContent,
} & StyledComponentProps

export let Alert = ({
                        isVisible,
                        closeAlert,
                        alertContent,
                        className,
                    } :Props) => {

    const handleClose = useCallback(() => {
        closeAlert()
        if (alertContent.onClose) alertContent.onClose()
    }, [alertContent, closeAlert])

    useEffect(() => {
        if (!isVisible) return

        setTimeout(handleClose, 8000)
    }, [isVisible, handleClose])

    if (!isVisible) return null
    if (!alertContent) throw new Error("Alert found null alert content")

    const {
              title,
              body,
              type = ALERT_TYPES.INFO,
          } :AlertContent = alertContent

    return (
        <AbsoluteContainer>
            <ZenAlert onClose={handleClose}
                      className={className}
                      type={type}>
                <Title>{title}</Title>
                {body}
                <Close onClick={handleClose} aria-label="Close alert" />
            </ZenAlert>
        </AbsoluteContainer>
    )

}

Alert                = styled(Alert)``
Alert.COMPONENT_NAME = "Alert"
Alert.defaultProps   = {}

const AbsoluteContainer = styled(FlexBlock).attrs({
    justify   : "center",
    alignItems: "center",
})`
  position: fixed;
  width: 100%;
`
