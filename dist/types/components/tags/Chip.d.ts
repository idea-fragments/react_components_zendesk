/// <reference types="react" />
declare type Props = {
    danger?: boolean;
    primary?: boolean;
    success?: boolean;
};
export declare const Chip: import("styled-components").StyledComponent<"div", any, import("styles/typography").TextProps & import("../../styles/types").ContainerProps & {
    children: import("react").ReactNode;
} & {
    as: "p";
    "data-component-name": string;
} & {
    as: string;
    background: string;
    color: string;
} & Props, "color" | "data-component-name" | "as" | "background">;
export {};
//# sourceMappingURL=Chip.d.ts.map