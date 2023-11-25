import { FC, ReactNode } from "react";
import { CSSProp } from "styles/types";
export type DrawerModalProps = {
    drawerModalBody: ReactNode;
    footer?: ReactNode;
    isOpen: boolean;
    onCloseDrawerModal?: () => void;
    title?: string;
    width?: string;
} & CSSProp;
export declare const DrawerModal: import("styled-components").StyledComponent<FC<DrawerModalProps>, import("styled-components").DefaultTheme, {}, never>;
//# sourceMappingURL=DrawerModal.d.ts.map