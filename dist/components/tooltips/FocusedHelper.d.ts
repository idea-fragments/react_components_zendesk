import { FC, ReactElement, ReactNode } from "react";
export type FocusedHelperProps = {
    children: ReactElement;
    active: boolean;
    zIndex?: number;
    ringPadding?: number;
    ringBorderRadius?: number | string;
    renderTooltip?: (child: ReactElement) => ReactNode;
};
export declare const FocusedHelper: FC<FocusedHelperProps>;
//# sourceMappingURL=FocusedHelper.d.ts.map