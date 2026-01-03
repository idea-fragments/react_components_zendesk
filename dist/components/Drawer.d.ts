import { StyledComponentProps } from "components/StyledComponentProps.type";
import { Nullable } from "global";
import { FC, ReactNode } from "react";
import { CSSProp } from "styles/types";
import { ValueOf } from "utils/types";
export declare const DRAWER_SIZES: {
    DEFAULT: string;
    FULL_WIDTH: string;
    LARGE: string;
};
export type DrawerContent = {
    body: ReactNode;
    onClose?: () => void;
    size: ValueOf<typeof DRAWER_SIZES>;
    title?: string;
    withCancelButton?: boolean;
    withNoActions?: boolean;
};
export type DrawerProps = {
    closeDrawer: () => void;
    drawerContent: Nullable<DrawerContent>;
    isOpen: boolean;
    width?: string;
} & CSSProp & StyledComponentProps;
export declare let Drawer: FC<DrawerProps>;
//# sourceMappingURL=Drawer.d.ts.map