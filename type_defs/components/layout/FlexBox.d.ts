import { MediaQuery } from "styles/mediaQueries";
export declare type ResponsiveProps<P> = {
    mediaQueryFunc: MediaQuery;
    props: P;
};
export declare type Props = {
    alignItems?: string;
    gap?: string | null | "unset";
    fluid?: boolean;
    inline?: boolean;
    justifyContent?: string;
    responsivePropsList?: ResponsiveProps<Props>[];
    withRows?: boolean;
    wrap?: boolean;
};
export declare type FlexBoxProps = Props;
export declare const FlexBox: import("styled-components").StyledComponent<"div", any, Props, never>;
//# sourceMappingURL=FlexBox.d.ts.map