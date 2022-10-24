import { NavigationAction } from "components/layout/NavigationAction";
import { FC, ReactNode } from "react";
declare type Action = NavigationAction;
export declare type SidebarProps = {
    actions: Action[];
    actionIconSize?: string;
    activeAction?: string;
    logo: ReactNode;
    lowerActions?: Action[];
};
export declare const Sidebar: FC<SidebarProps>;
export {};
//# sourceMappingURL=Sidebar.d.ts.map