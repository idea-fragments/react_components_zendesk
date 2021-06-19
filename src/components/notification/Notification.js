// @flow

import {
  Notification as ZNotification,
  Title,
  Close,
}                                                  from "@zendeskgarden/react-notifications"
import type { Node, StatelessFunctionalComponent } from "react"
import React                                       from "react"
import { DO_NOTHING }                              from "utils/functionHelpers"

type Props = {
  body :Node,
  danger? :boolean,
  info? :boolean,
  notDismissible? :boolean,
  success? :boolean,
  title :string,
  warning? :boolean,
  onClose? :() => void,
}

export const Notification :StatelessFunctionalComponent<Props> = ({
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

  const type = () :string => {
    if (danger) return "danger"
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
