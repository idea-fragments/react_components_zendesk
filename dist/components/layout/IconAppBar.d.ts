import { NavigationAction } from "components/layout/NavigationAction";
import { FC } from "react";
export type IconAppBarProps = {
    actions: NavigationAction[];
    actionIconSize?: string;
    activeAction?: string;
    fallbackToText?: boolean;
    bordered?: boolean;
};
export declare let IconAppBar: FC<IconAppBarProps>;
//# sourceMappingURL=IconAppBar.d.ts.map