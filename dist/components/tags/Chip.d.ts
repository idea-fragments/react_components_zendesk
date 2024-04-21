/// <reference types="react" />
import { StyledProps } from "components/StyledProps.type";
type Props = {
    danger?: boolean;
    fluid?: boolean;
    primary?: boolean;
    success?: boolean;
};
export type ChipProps = Props & StyledProps;
export declare const Chip: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, import("styles/typography").CommonTextProps & import("../../styles/types").ContainerProps & import("../../styles/types").ColorProps & {
    children: import("react").ReactNode;
} & {
    as: "p";
} & {
    as: string;
    background: string;
    color: string;
} & Props, "background" | "color" | "as">;
export {};
//# sourceMappingURL=Chip.d.ts.map