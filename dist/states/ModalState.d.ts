import { ModalContent } from "components/modals/Modal";
import { Dispatch, SetStateAction } from "react";
export type ModalContentState = Record<string, any>;
export type ModalState = {
    isModalOpen: boolean;
    modalContent?: ModalContent;
    modalContentState: ModalContentState;
};
export type ModalStateWithDispatch = {
    modalState: Readonly<ModalState>;
    setModalState: Dispatch<SetStateAction<ModalState>>;
};
export declare const defaultUiState: ModalStateWithDispatch;
export declare const ModalStateContext: import("react").Context<ModalStateWithDispatch>;
//# sourceMappingURL=ModalState.d.ts.map