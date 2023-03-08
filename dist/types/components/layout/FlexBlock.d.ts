declare type ResponsiveProps = {
    mediaQueryFunc: Function;
    props: Props;
};
export declare type Props = {
    alignItems?: string;
    compactAxis?: boolean;
    compact?: boolean;
    fluid?: boolean;
    hidden?: boolean;
    withRows?: boolean;
    justify?: string;
    spacing?: string | null;
    responsivePropsList?: Array<ResponsiveProps>;
};
export declare const FlexBlock: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, Props, never>;
export declare const PaddedFlexBlock: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, Props, never>;
export {};
//# sourceMappingURL=FlexBlock.d.ts.map