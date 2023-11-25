/// <reference types="react" />
export type DrawerModalProps = {
    isOpen: boolean;
    width?: string;
    title?: string;
    footer?: React.ReactNode;
    drawerModalBody: React.ReactNode;
    onCloseDrawerModal?: () => void;
};
export declare const DrawerModal: React.FC<DrawerModalProps>;
//# sourceMappingURL=DrawerModal.d.ts.map