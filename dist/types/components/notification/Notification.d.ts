import React, { FC, ReactNode } from "react";
import { UserFeedbackProps } from "styles/UserFeedbackProps";
declare type Props = {
    body: ReactNode;
    notDismissible?: boolean;
    title?: string;
    onClose?: () => void;
} & UserFeedbackProps;
export declare type NotificationProps = Props;
export declare const Notification: FC<Props>;
export declare const ToastProvider: import("styled-components").StyledComponent<{
    ({ limit, zIndex, placementProps, children }: React.PropsWithChildren<import("@zendeskgarden/react-notifications").IToastProviderProps>): JSX.Element;
    displayName: string;
    defaultProps: {
        limit: number;
    };
    propTypes: {
        limit: import("prop-types").Requireable<number>;
        zIndex: import("prop-types").Requireable<number>;
        placementProps: import("prop-types").Requireable<object>;
    };
}, any, {
    zIndex: 1000;
}, "zIndex">;
export {};
//# sourceMappingURL=Notification.d.ts.map