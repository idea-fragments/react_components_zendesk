import { Props as ButtonProps } from "components/forms/Button";
import { StyledComponentProps } from "components/StyledComponentProps.type";
import { ReactElement } from "react";
declare type ButtonType = ReactElement & {
    props: {
        disableable: boolean;
    } & ButtonProps;
};
export declare type ModalContent = {
    autoClose?: boolean;
    blocking?: boolean;
    body: any;
    buttons?: ButtonType[];
    isDanger?: boolean;
    isNotDismissible?: boolean;
    isSuccess?: boolean;
    isWarning?: boolean;
    title?: string;
    withCancelButton?: boolean;
    withNoActions?: boolean;
    onClose?: () => void;
};
declare type Props = {
    isVisible: boolean;
    closeModal: () => void;
    disableActions: boolean;
    modalContent: ModalContent | null | undefined;
} & StyledComponentProps;
export declare let Modal: ({ isVisible, closeModal, disableActions, modalContent, className, }: Props) => JSX.Element | null;
export {};
//# sourceMappingURL=Modal.d.ts.map