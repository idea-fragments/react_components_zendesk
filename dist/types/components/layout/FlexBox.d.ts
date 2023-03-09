import { MediaQuery } from "styles/mediaQueries";
import { CSSProp } from "styles/types";
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
    wrapped?: boolean;
} & CSSProp;
export declare type FlexBoxProps = Props;
export declare const FlexBox: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {
    alignItems?: string | undefined;
    gap?: string | null | undefined;
    fluid?: boolean | undefined;
    inline?: boolean | undefined;
    justifyContent?: string | undefined;
    responsivePropsList?: ResponsiveProps<Props>[] | undefined;
    withRows?: boolean | undefined;
    wrapped?: boolean | undefined;
} & CSSProp<any>, never>;
//# sourceMappingURL=FlexBox.d.ts.map