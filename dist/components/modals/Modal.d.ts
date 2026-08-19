import { ButtonProps } from "components/forms/Button";
import { StyledComponentProps } from "components/StyledComponentProps.type";
import { ReactElement, ReactNode } from "react";
import { CSSProp } from "styles/types";
import { UserFeedbackProps } from "styles/UserFeedbackProps";
type ButtonType = ReactElement & {
    props: {
        disableable: boolean;
    } & ButtonProps;
};
export declare const MODAL_SIZES: {
    readonly FULL_SCREEN: "FULL_SCREEN";
    readonly LG: "LG";
    readonly SM: "SM";
    readonly XL: "XL";
};
export type ModalSize = (typeof MODAL_SIZES)[keyof typeof MODAL_SIZES];
export type ModalContent = {
    autoClose?: boolean;
    blocking?: boolean;
    body: any;
    buttons?: ButtonType[];
    isNotDismissible?: boolean;
    size?: ModalSize;
    title?: ReactNode;
    withCancelButton?: boolean;
    withNoActions?: boolean;
    onClose?: () => void;
} & UserFeedbackProps;
export type ModalProps = {
    blurBackdrop?: boolean;
    isVisible: boolean;
    closeModal: () => void;
    disableActions: boolean;
    modalContent: ModalContent | null | undefined;
} & StyledComponentProps & CSSProp;
export declare let Modal: ({ blurBackdrop, isVisible, closeModal, disableActions, modalContent, className, }: ModalProps) => import("react/jsx-runtime").JSX.Element | null;
export {};
//# sourceMappingURL=Modal.d.ts.map