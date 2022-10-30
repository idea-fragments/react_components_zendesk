/// <reference types="react" />
import { StyledProps } from "components/StyledProps.type";
declare type Props = {
    danger?: boolean;
    fluid?: boolean;
    primary?: boolean;
    success?: boolean;
};
export declare type ChipProps = Props & StyledProps;
export declare const Chip: import("styled-components").StyledComponent<"div", any, import("styles/typography").TextProps & import("../../styles/types").ContainerProps & {
    children: import("react").ReactNode;
} & {
    as: "p";
    "data-component-name": string;
} & {
    as: string;
    background: string;
    color: string;
} & Props, "color" | "as" | "data-component-name" | "background">;
export {};
//# sourceMappingURL=Chip.d.ts.map