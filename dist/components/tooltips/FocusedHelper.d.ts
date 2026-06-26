import { FC, ReactElement, ReactNode, RefObject } from "react";
export type FocusedHelperProps = {
    active: boolean;
    children?: ReactElement;
    resolveTarget?: () => Element | null;
    targetRef?: RefObject<Element>;
    renderTooltip?: (anchor: ReactElement) => ReactNode;
    zIndex?: number;
    ringPadding?: number;
    ringBorderRadius?: number | string;
    recomputeKey?: unknown;
};
export declare const FocusedHelper: FC<FocusedHelperProps>;
//# sourceMappingURL=FocusedHelper.d.ts.map