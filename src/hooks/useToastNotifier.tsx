import { useToast }    from "@zendeskgarden/react-notifications"
import {
  Notification,
  NotificationProps
}                      from "components/notification/Notification"
import { useCallback } from "react"

export type Return = {
  notify: (props: NotificationProps) => void
}

export const useToastNotifier = (): Return => {
  const { addToast } = useToast()

  const notify = useCallback((p: NotificationProps) => {
    addToast(({ close }) => (<Notification {...p} onClose={close} />))
  }, [addToast])

  return { notify }
}
