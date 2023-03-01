import { ModalContent } from "components/modals/Modal";
import { Dispatch, SetStateAction } from "react";
export declare type ModalContentState = Record<string, any>;
export declare type ModalState = {
    isModalOpen: boolean;
    modalContent?: ModalContent;
    modalContentState: ModalContentState;
};
export declare type ModalStateWithDispatch = {
    modalState: Readonly<ModalState>;
    setModalState: Dispatch<SetStateAction<ModalState>>;
};
export declare const defaultUiState: ModalStateWithDispatch;
export declare const ModalStateContext: import("react").Context<ModalStateWithDispatch>;
//# sourceMappingURL=ModalState.d.ts.map