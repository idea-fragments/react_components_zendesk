import { FC, ReactNode } from "react";
declare type Props = {
    body: ReactNode;
    danger?: boolean;
    info?: boolean;
    notDismissible?: boolean;
    success?: boolean;
    title?: string;
    warning?: boolean;
    onClose?: () => void;
};
export declare const Notification: FC<Props>;
export {};
//# sourceMappingURL=Notification.d.ts.map