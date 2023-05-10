import {GlobalAlert as ZGlobalAlert} from "@zendeskgarden/react-notifications";
import {Type} from "@zendeskgarden/react-notifications/dist/typings/types";
import {FC, ReactNode} from "react";
import {UserFeedbackProps} from "styles/UserFeedbackProps";
import {DO_NOTHING} from "utils/functionHelpers";

type Props = {
  body: ReactNode,
  notDismissible?: boolean,
  noActionButton?: boolean,
  showTitle?: boolean,
  title?: string,
  buttonText?: string,
  onClose?: () => void,
} & UserFeedbackProps;

export type GlobalAlertProps = Props

export const GlobalAlert: FC<Props> = ({
                                         body,
                                         danger,
                                         info,
                                         notDismissible,
                                         noActionButton,
                                         showTitle,
                                         success,
                                         title,
                                         buttonText,
                                         warning,
                                         onClose = DO_NOTHING,
                                       }) => {
  const dismissible = !notDismissible;
  const hasActionButton = !noActionButton;

  const type = (): Type | undefined => {
    if (danger) return "error";
    if (info) return "info";
    if (success) return "success";
    if (warning) return "warning";
    return undefined;
  }

  // @ts-ignore
  return <ZGlobalAlert type={type()}>
    <ZGlobalAlert.Content>
      {showTitle
        ? <ZGlobalAlert.Title>{title}</ZGlobalAlert.Title>
        : null
      }
      <div>{body}</div>
    </ZGlobalAlert.Content>
    {hasActionButton
      ? <ZGlobalAlert.Button>{buttonText}</ZGlobalAlert.Button>
      : null
    }
    {dismissible
      ? <ZGlobalAlert.Close onClick={onClose} aria-label="Close Alert"/>
      : null
    }
  </ZGlobalAlert>
}
