import { FC, ReactNode } from "react";
import { UserFeedbackProps } from "styles/UserFeedbackProps";
declare type Props = {
    body: ReactNode;
    notDismissible?: boolean;
    noActionButton?: boolean;
    showTitle?: boolean;
    title?: string;
    buttonText?: string;
    onClose?: () => void;
} & UserFeedbackProps;
export declare type GlobalAlertProps = Props;
export declare const GlobalAlert: FC<Props>;
export {};
//# sourceMappingURL=GlobalAlert.d.ts.map