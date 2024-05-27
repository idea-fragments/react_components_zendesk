import { useToast } from "@zendeskgarden/react-notifications"
import {
  Notification,
  NotificationProps as ZNotificationProps,
} from "components/notification/Notification"
import { ReactNode, useCallback } from "react"

export type NotificationProps = Omit<ZNotificationProps, "body"> & {
  body?: ReactNode
}

export type Return = {
  notify: (props: NotificationProps) => void
}

export const useToastNotifier = (): Return => {
  const { addToast } = useToast()

  const notify = useCallback(
    (p: NotificationProps) => {
      addToast(({ close }) => (
        <Notification
          {...(p as ZNotificationProps)}
          onClose={close}
        />
      ))
    },
    [addToast],
  )

  return { notify }
}
