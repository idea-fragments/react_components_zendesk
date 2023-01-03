/// <reference types="react" />
import { ModalProps } from "components/Modal";
declare const _default: {
    title: string;
    component: ({ isVisible, closeModal, disableActions, modalContent, className, }: {
        isVisible: boolean;
        closeModal: () => void;
        disableActions: boolean;
        modalContent: import("components/Modal").ModalContent | null | undefined;
    } & import("./StyledComponentProps.type").StyledComponentProps) => JSX.Element | null;
    argTypes: {};
};
export default _default;
export declare const Default: ({ closeModal, modalContent, ...args }: ModalProps) => JSX.Element;
//# sourceMappingURL=Modal.stories.d.ts.map