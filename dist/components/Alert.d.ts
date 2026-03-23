import { StyledComponentProps } from "components/StyledComponentProps.type";
import { FC } from "react";
import { ValueOf } from "utils/types";
export declare const ALERT_TYPES: {
    readonly ACCENT: "accent";
    readonly ERROR: "error";
    readonly INFO: "info";
    readonly PRIMARY: "primary";
    readonly SUCCESS: "success";
    readonly WARNING: "warning";
};
export type AlertType = ValueOf<typeof ALERT_TYPES>;
export type AlertContent = {
    title?: string;
    body: any;
    onClose?: () => void;
    type?: AlertType;
};
type AlertProps = {
    autoDismissSeconds?: number;
    alertContent: AlertContent;
    closeAlert: () => void;
    isVisible: boolean;
} & StyledComponentProps;
export declare let Alert: FC<AlertProps>;
export {};
//# sourceMappingURL=Alert.d.ts.map