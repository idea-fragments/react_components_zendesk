import { StyledComponentProps } from "components/StyledComponentProps.type";
import { Nullable } from "global";
import { FC } from "react";
export declare const ALERT_TYPES: {
    readonly INFO: "info";
    readonly SUCCESS: "success";
    readonly ERROR: "error";
    readonly WARNING: "warning";
};
export declare type AlertType = typeof ALERT_TYPES[keyof typeof ALERT_TYPES];
export declare type AlertContent = {
    title?: string;
    body: any;
    onClose?: () => void;
    type?: AlertType;
};
declare type Props = {
    isVisible: boolean;
    closeAlert: () => void;
    alertContent: Nullable<AlertContent>;
} & StyledComponentProps;
export declare let Alert: FC<Props>;
export {};
//# sourceMappingURL=Alert.d.ts.map
