import { GlobalAlert as ZGlobalAlert } from "@zendeskgarden/react-notifications"
import { Type } from "@zendeskgarden/react-notifications/dist/typings/types"
import { FC, ReactNode } from "react"
import { UserFeedbackProps } from "styles/UserFeedbackProps"
import { DO_NOTHING } from "utils/functionHelpers"

type Props = {
  body: ReactNode
  notDismissible?: boolean
  noActionButton?: boolean
  showTitle?: boolean
  title?: string
  buttonText?: string
  onActionButtonClick?: () => void
  onClose?: () => void
} & UserFeedbackProps

export type GlobalAlertProps = Props

export const GlobalAlert: FC<Props> = ({
  body,
  danger,
  info,
  notDismissible,
  noActionButton,
  showTitle = false,
  success,
  title,
  buttonText,
  warning,
  onActionButtonClick = DO_NOTHING,
  onClose = DO_NOTHING,
}) => {
  const dismissible = !notDismissible
  const hasActionButton = !noActionButton

  const type = (): Type => {
    if (danger) return "error"
    if (success) return "success"
    if (warning) return "warning"
    return "info"
  }

  // @ts-ignore
  return (
    <ZGlobalAlert type={type()}>
      <ZGlobalAlert.Content>
        {showTitle ? <ZGlobalAlert.Title>{title}</ZGlobalAlert.Title> : null}
        <div>{body}</div>
      </ZGlobalAlert.Content>
      {hasActionButton ? (
        <ZGlobalAlert.Button onClick={onActionButtonClick}>
          {buttonText}
        </ZGlobalAlert.Button>
      ) : null}
      {dismissible ? (
        <ZGlobalAlert.Close
          onClick={onClose}
          aria-label="Close Alert"
        />
      ) : null}
    </ZGlobalAlert>
  )
}
