import { StyledComponentProps } from "components/StyledComponentProps.type";
import { Nullable } from "global";
import { FC, ReactNode } from "react";
export type DrawerContent = {
    body: ReactNode;
    title?: string;
    withCancelButton?: boolean;
    withNoActions?: boolean;
    onClose?: () => void;
};
type Props = {
    closeDrawer: () => void;
    drawerContent: Nullable<DrawerContent>;
    isOpen: boolean;
} & StyledComponentProps;
export declare let Drawer: FC<Props>;
export {};
//# sourceMappingURL=Drawer.d.ts.map