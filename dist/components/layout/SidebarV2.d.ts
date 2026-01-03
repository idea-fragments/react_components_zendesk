import { NavigationAction } from "components/layout/NavigationAction";
import { FC, ReactNode } from "react";
type Action = NavigationAction;
export type SidebarV2Props = {
    actions: Action[];
    actionIconSize?: string;
    activeAction?: string;
    logo: ReactNode;
    lowerActions?: Action[];
};
export declare const SidebarV2: FC<SidebarV2Props>;
export {};
//# sourceMappingURL=SidebarV2.d.ts.map