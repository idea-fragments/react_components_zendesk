import * as react_jsx_runtime from 'react/jsx-runtime';
import * as react from 'react';
import { ComponentType, SVGAttributes, PropsWithChildren, ReactNode, Ref, ReactElement, FC, Dispatch, SetStateAction } from 'react';
import { Nullable } from 'global';
import { ValueOf } from 'utils/types';
import * as styled_components from 'styled-components';
import { FlattenSimpleInterpolation } from 'styled-components';

type SVGComponent = ComponentType<SVGAttributes<any>>;

declare const ALIGNMENTS: {
    readonly start: "flex-start";
    readonly center: "center";
    readonly end: "flex-end";
};
type Alignment = ValueOf<typeof ALIGNMENTS>;

type ColorProps = {
    accent?: boolean;
    color?: string;
    danger?: boolean;
    neutral?: boolean;
    primary?: boolean;
    secondary?: boolean;
    success?: boolean;
    warning?: boolean;
};
type ContainerProps = {
    _css?: CSS;
    color?: string;
    compact?: boolean;
    fluid?: boolean;
    className?: any;
};
type CSS<T = any> = FlattenSimpleInterpolation | string | T;
type CSSProp<T = any> = {
    _css?: CSS<T>;
    className?: string;
};

type PromiseFunc<T = any, Rtn = any> = (...o: T[]) => Promise<Rtn>;

declare const BUTTON_SIZES: {
    readonly LARGE: "large";
    readonly MEDIUM: "medium";
    readonly SMALL: "small";
    readonly X_SMALL: "x_small";
};
type ButtonSize = (typeof BUTTON_SIZES)[keyof typeof BUTTON_SIZES];
type AutoLoadable = {
    autoLoadable: true;
    onClick: PromiseFunc;
};
type ButtonBaseProps = PropsWithChildren<{
    alignItems?: string;
    alignSelf?: Alignment;
    ariaLabel?: string;
    autoLoadable?: boolean;
    disabled?: boolean;
    flat?: boolean;
    groupKey?: string;
    icon?: Nullable<string | SVGComponent | ComponentType | ReactNode>;
    iconPosition?: "left" | "right";
    iconSize?: string;
    inline?: boolean;
    innerAs?: string;
    innerRef?: Ref<HTMLButtonElement>;
    loading?: boolean;
    pill?: boolean;
    primary?: boolean;
    size?: ButtonSize;
    wrapInlineText?: boolean;
    onClick: () => void;
}> & CSSProp & ColorProps & ContainerProps;
type ControlledLoadable = {
    loading?: boolean;
    onClick: () => void;
};
type ButtonProps = (ButtonBaseProps & ControlledLoadable) | (ButtonBaseProps & AutoLoadable);

type StyledComponentProps = {
    className?: string;
};

type UserFeedbackProps = {
    danger?: boolean;
    info?: boolean;
    success?: boolean;
    warning?: boolean;
};

type ButtonType = ReactElement & {
    props: {
        disableable: boolean;
    } & ButtonProps;
};
type ModalContent = {
    autoClose?: boolean;
    blocking?: boolean;
    body: any;
    buttons?: ButtonType[];
    isLarge?: boolean;
    isNotDismissible?: boolean;
    title?: string;
    withCancelButton?: boolean;
    withNoActions?: boolean;
    onClose?: () => void;
} & UserFeedbackProps;
type ModalProps = {
    blurBackdrop?: boolean;
    isVisible: boolean;
    closeModal: () => void;
    disableActions: boolean;
    modalContent: ModalContent | null | undefined;
} & StyledComponentProps & CSSProp;
declare let Modal: ({ blurBackdrop, isVisible, closeModal, disableActions, modalContent, className, }: ModalProps) => react_jsx_runtime.JSX.Element | null;

type ModalManagerProps = Pick<ModalProps, "blurBackdrop" | "_css">;
declare const ModalManager: FC<ModalManagerProps>;

declare const ModalStateProvider: FC<PropsWithChildren<{}>>;

type ModalContentState = Record<string, any>;
type ModalState = {
    isModalOpen: boolean;
    modalContent?: ModalContent;
    modalContentState: ModalContentState;
};
type ModalStateWithDispatch = {
    modalState: Readonly<ModalState>;
    setModalState: Dispatch<SetStateAction<ModalState>>;
};
declare const defaultUiState: ModalStateWithDispatch;
declare const ModalStateContext: react.Context<ModalStateWithDispatch>;

type ModalHelperFunctions = {
    closeModal: () => void;
    openErrorModalWith: (c: ModalContent) => void;
    openModalWith: (c: ModalContent) => void;
    openSuccessModalWith: (c: ModalContent) => void;
    openWarningModalWith: (c: ModalContent) => void;
    setModalContentState: (s: ModalContentState) => void;
};
declare const useModalState: () => ModalStateWithDispatch & ModalHelperFunctions;

type DrawerModalProps = {
    drawerModalBody: ReactNode;
    footerActions?: ReactNode[];
    isOpen: boolean;
    onCloseDrawerModal?: () => void;
    title?: string;
    width?: string;
} & CSSProp;
declare const DrawerModal: styled_components.StyledComponent<FC<DrawerModalProps>, styled_components.DefaultTheme, {}, never>;

export { DrawerModal, DrawerModalProps, Modal, ModalContent, ModalContentState, ModalHelperFunctions, ModalManager, ModalManagerProps, ModalProps, ModalState, ModalStateContext, ModalStateProvider, ModalStateWithDispatch, defaultUiState, useModalState };
