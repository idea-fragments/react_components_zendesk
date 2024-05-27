type _ResponsiveProps = {
    mediaQueryFunc: Function;
    props: FlexBlockProps;
};
export type FlexBlockProps = {
    alignItems?: string;
    compactAxis?: boolean;
    compact?: boolean;
    fluid?: boolean;
    hidden?: boolean;
    withRows?: boolean;
    justify?: string;
    spacing?: string | null;
    responsivePropsList?: Array<_ResponsiveProps>;
};
export declare const FlexBlock: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, FlexBlockProps, never>;
export declare const PaddedFlexBlock: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, FlexBlockProps, never>;
export {};
//# sourceMappingURL=FlexBlock.d.ts.map