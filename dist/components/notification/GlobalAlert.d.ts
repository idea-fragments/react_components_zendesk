import { FC, ReactNode } from "react";
import { UserFeedbackProps } from "styles/UserFeedbackProps";
type Props = {
    body: ReactNode;
    notDismissible?: boolean;
    noActionButton?: boolean;
    showTitle?: boolean;
    title?: string;
    buttonText?: string;
    onActionButtonClick?: () => void;
    onClose?: () => void;
} & UserFeedbackProps;
export type GlobalAlertProps = Props;
export declare const GlobalAlert: FC<Props>;
export {};
//# sourceMappingURL=GlobalAlert.d.ts.map