import type { ReactNode } from "react";
export declare type TooltipProps = {
    arrow?: boolean;
    children: ReactNode;
    maxWidth?: string;
    placement?: "start";
    trigger: ReactNode;
    type?: "light" | null;
};
export declare let Tooltip: import("styled-components").StyledComponent<any, any, object & {
    delayMilliseconds: number;
    zIndex: number;
} & TooltipProps, string | number | symbol>;
//# sourceMappingURL=Tooltip.d.ts.map