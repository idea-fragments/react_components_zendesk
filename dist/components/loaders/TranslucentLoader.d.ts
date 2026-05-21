import { ComponentType, PropsWithChildren } from "react";
import { CSSProp } from "styles/types";
type Props = {
    className?: string;
    delayMs?: number;
    innerAs?: ComponentType<any>;
    isLoading: boolean;
    fullScreenBackdrop?: boolean;
} & CSSProp;
export declare let TranslucentLoader: ({ _css, children, className, delayMs, innerAs, isLoading, fullScreenBackdrop, }: PropsWithChildren<Props>) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=TranslucentLoader.d.ts.map