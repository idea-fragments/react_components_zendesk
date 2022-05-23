import {
  Notification as ZNotification,
  Title,
  Close,
}                            from "@zendeskgarden/react-notifications"
import { Type }              from "@zendeskgarden/react-notifications/dist/typings/types"
import { FC, ReactNode }     from "react"
import React                 from "react"
import { UserFeedbackProps } from "styles/UserFeedbackProps"
import { DO_NOTHING }        from "utils/functionHelpers"

type Props = {
  body: ReactNode,
  notDismissible?: boolean,
  title?: string,
  onClose?: () => void,
} & UserFeedbackProps

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

  return <ZNotification type={type()}>
    <Title>{title}</Title>
    <div>{body}</div>
    {dismissible
     ? <Close onClick={onClose} aria-label="Close Notification" />
     : null
    }
  </ZNotification>
}
