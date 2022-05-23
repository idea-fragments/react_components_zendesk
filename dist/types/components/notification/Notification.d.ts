import { FC, ReactNode } from "react";
import { UserFeedbackProps } from "styles/UserFeedbackProps";
declare type Props = {
    body: ReactNode;
    notDismissible?: boolean;
    title?: string;
    onClose?: () => void;
} & UserFeedbackProps;
export declare const Notification: FC<Props>;
export {};
//# sourceMappingURL=Notification.d.ts.map