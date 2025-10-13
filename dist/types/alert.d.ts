import { Nullable } from 'global';
import { FC } from 'react';

type StyledComponentProps = {
    className?: string;
};

declare const ALERT_TYPES: {
    readonly INFO: "info";
    readonly SUCCESS: "success";
    readonly ERROR: "error";
    readonly WARNING: "warning";
};
type AlertType = (typeof ALERT_TYPES)[keyof typeof ALERT_TYPES];
type AlertContent = {
    title?: string;
    body: any;
    onClose?: () => void;
    type?: AlertType;
};
type Props = {
    isVisible: boolean;
    closeAlert: () => void;
    alertContent: Nullable<AlertContent>;
} & StyledComponentProps;
declare let Alert: FC<Props>;

export { ALERT_TYPES, Alert, AlertContent, AlertType };
