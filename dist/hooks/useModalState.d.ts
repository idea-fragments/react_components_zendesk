import { ModalContent } from "components/modals/Modal";
import { ModalContentState, ModalStateWithDispatch } from "states/ModalState";
export type ModalHelperFunctions = {
    closeModal: () => void;
    openErrorModalWith: (c: ModalContent) => void;
    openModalWith: (c: ModalContent) => void;
    openSuccessModalWith: (c: ModalContent) => void;
    openWarningModalWith: (c: ModalContent) => void;
    setModalContentState: (s: ModalContentState) => void;
};
export declare const useModalState: () => ModalStateWithDispatch & ModalHelperFunctions;
//# sourceMappingURL=useModalState.d.ts.map