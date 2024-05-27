import { NotificationProps as ZNotificationProps } from "components/notification/Notification";
import { ReactNode } from "react";
export type NotificationProps = Omit<ZNotificationProps, "body"> & {
    body?: ReactNode;
};
export type Return = {
    notify: (props: NotificationProps) => void;
};
export declare const useToastNotifier: () => Return;
//# sourceMappingURL=useToastNotifier.d.ts.map