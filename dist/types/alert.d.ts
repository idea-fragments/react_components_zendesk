import { FC } from 'react';
import { ValueOf } from 'utils/types';

type StyledComponentProps = {
    className?: string;
};

declare const ALERT_TYPES: {
    readonly ACCENT: "accent";
    readonly ERROR: "error";
    readonly INFO: "info";
    readonly PRIMARY: "primary";
    readonly SUCCESS: "success";
    readonly WARNING: "warning";
};
type AlertType = ValueOf<typeof ALERT_TYPES>;
type AlertContent = {
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
declare let Alert: FC<AlertProps>;

export { ALERT_TYPES, Alert, AlertContent, AlertType };
