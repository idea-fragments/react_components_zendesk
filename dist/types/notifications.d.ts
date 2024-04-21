import React, { FC, ReactNode } from 'react';
import { ValueOf } from 'utils/types';
import * as styled_components from 'styled-components';
import * as prop_types from 'prop-types';
import * as _zendeskgarden_react_notifications from '@zendeskgarden/react-notifications';

declare const INFO_PANEL_TYPES: {
    readonly INFO: 0;
    readonly SUCCESS: 1;
    readonly WARNING: 2;
    readonly DANGER: 3;
};
type InfoPanelType = ValueOf<typeof INFO_PANEL_TYPES>;
type Props$2 = {
    children: ReactNode;
    className?: string;
    iconVerticalAlignment?: "center";
    type: InfoPanelType;
};
declare let InfoPanel: FC<Props$2>;

type UserFeedbackProps = {
    danger?: boolean;
    info?: boolean;
    success?: boolean;
    warning?: boolean;
};

type Props$1 = {
    body: ReactNode;
    notDismissible?: boolean;
    title?: string;
    onClose?: () => void;
} & UserFeedbackProps;
type NotificationProps = Props$1;
declare const Notification: FC<Props$1>;
declare const ToastProvider: styled_components.StyledComponent<{
    ({ limit, zIndex, placementProps, children }: React.PropsWithChildren<_zendeskgarden_react_notifications.IToastProviderProps>): JSX.Element;
    displayName: string;
    defaultProps: {
        limit: number;
    };
    propTypes: {
        limit: prop_types.Requireable<number>;
        zIndex: prop_types.Requireable<number>;
        placementProps: prop_types.Requireable<object>;
    };
}, styled_components.DefaultTheme, {
    zIndex: 1000;
}, "zIndex">;

type Return = {
    notify: (props: NotificationProps) => void;
};
declare const useToastNotifier: () => Return;

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
type GlobalAlertProps = Props;
declare const GlobalAlert: FC<Props>;

export { GlobalAlert, GlobalAlertProps, INFO_PANEL_TYPES, InfoPanel, Notification, NotificationProps, ToastProvider, useToastNotifier };
