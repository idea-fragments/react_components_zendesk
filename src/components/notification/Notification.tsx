import {
  Close,
  Notification as ZNotification,
  Title,
  ToastProvider as ZToastProvider,
} from "@zendeskgarden/react-notifications"
import { Type } from "@zendeskgarden/react-notifications/dist/typings/types"
import React, { FC, ReactNode } from "react"
import styled from "styled-components"
import { UserFeedbackProps } from "styles/UserFeedbackProps"
import { DO_NOTHING } from "utils/functionHelpers"

type Props = {
  body: ReactNode
  notDismissible?: boolean
  title?: string
  onClose?: () => void
} & UserFeedbackProps

export type NotificationProps = Props

export const Notification: FC<Props> = ({
  body,
  danger,
  info,
  notDismissible,
  success,
  title,
  warning,
  onClose = DO_NOTHING,
}) => {
  const dismissible = !notDismissible

  const type = (): Type | undefined => {
    if (danger) return "error"
    if (info) return "info"
    if (success) return "success"
    if (warning) return "warning"
    return undefined
  }

  return (
    <ZNotification type={type()}>
      <Title>{title}</Title>
      <div>{body}</div>
      {dismissible ? (
        <Close
          onClick={onClose}
          aria-label="Close Notification"
        />
      ) : null}
    </ZNotification>
  )
}

export const ToastProvider = styled(ZToastProvider).attrs({
  zIndex: 1000,
})``
