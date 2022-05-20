import {
  Notification as ZNotification,
  Title,
  Close,
  /*@ts-ignore*/
}                        from "@zendeskgarden/react-notifications"
import { FC, ReactNode } from "react"
import React             from "react"
import { DO_NOTHING }    from "utils/functionHelpers"

type Props = {
  body: ReactNode,
  danger?: boolean,
  info?: boolean,
  notDismissible?: boolean,
  success?: boolean,
  title?: string,
  warning?: boolean,
  onClose?: () => void,
}

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

  const type = (): string | null => {
    if (danger) return "error"
    if (info) return "info"
    if (success) return "success"
    if (warning) return "warning"
    return null
  }

  return <ZNotification type={type()}>
    <Title>{title}</Title>
    <div>{body}</div>
    {dismissible
     ? <Close onClick={onClose} aria-label="Close Notification" />
     : null
    }
  </ZNotification>
}
