import { NavigationAction } from "components/layout/NavigationAction";
import { FC } from "react";
export type IconAppBarProps = {
    actions: NavigationAction[];
    activeAction?: string;
    actionIconSize?: string;
    bordered?: boolean;
    fallbackToText?: boolean;
    scrollable?: boolean;
};
export declare let IconAppBar: FC<IconAppBarProps>;
//# sourceMappingURL=IconAppBar.d.ts.map