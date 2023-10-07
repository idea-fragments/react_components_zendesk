/// <reference types="react" />
import { StyledProps } from "components/StyledProps.type";
type Props = {
    danger?: boolean;
    fluid?: boolean;
    primary?: boolean;
    success?: boolean;
};
export type ChipProps = Props & StyledProps;
export declare const Chip: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, import("styles/typography").TextProps & import("../../styles/types").ContainerProps & {
    children: import("react").ReactNode;
} & import("../../styles/types").ColorProps & {
    as: "p";
    "data-component-name": string;
} & {
    as: string;
    background: string;
    color: string;
} & Props, "background" | "color" | "data-component-name" | "as">;
export {};
//# sourceMappingURL=Chip.d.ts.map