import * as react_jsx_runtime from 'react/jsx-runtime';
import * as react from 'react';
import { PropsWithChildren, ComponentType, Ref, ReactElement, FC, Dispatch, SetStateAction, ReactNode } from 'react';
import { ValueOf } from 'utils/types';
import * as styled_components from 'styled-components';
import { FlattenSimpleInterpolation } from 'styled-components';

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
    readonly SMALL: "small";
    readonly LARGE: "large";
};
type ButtonSize = (typeof BUTTON_SIZES)[keyof typeof BUTTON_SIZES];
type AutoLoadable = {
    autoLoadable: true;
    onClick: PromiseFunc;
};
type ButtonBaseProps = PropsWithChildren<{
    alignItems?: string;
    alignSelf?: Alignment;
    autoLoadable?: boolean;
    disabled?: boolean;
    flat?: boolean;
    groupKey?: string;
    icon?: string | ComponentType;
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
type Props = {
    isVisible: boolean;
    closeModal: () => void;
    disableActions: boolean;
    modalContent: ModalContent | null | undefined;
} & StyledComponentProps;
type ModalProps = Props;
declare let Modal: ({ isVisible, closeModal, disableActions, modalContent, className, }: Props) => react_jsx_runtime.JSX.Element | null;

declare const ModalManager: FC;

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

export { DrawerModal, DrawerModalProps, Modal, ModalContent, ModalContentState, ModalHelperFunctions, ModalManager, ModalProps, ModalState, ModalStateContext, ModalStateProvider, ModalStateWithDispatch, defaultUiState, useModalState };
