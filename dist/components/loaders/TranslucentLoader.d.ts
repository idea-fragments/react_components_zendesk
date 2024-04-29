import { ComponentType, PropsWithChildren } from "react";
import { CSSProp } from "styles/types";
type Props = {
    className?: string;
    innerAs?: ComponentType<any>;
    isLoading: boolean;
} & CSSProp;
export declare let TranslucentLoader: ({ _css, children, className, innerAs, isLoading, }: PropsWithChildren<Props>) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=TranslucentLoader.d.ts.map