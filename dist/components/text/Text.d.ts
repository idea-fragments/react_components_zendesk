import { ReactNode } from "react";
import { ColorProps, ContainerProps } from "styles/types";
import { CommonTextProps } from "styles/typography";
export type TextProps = CommonTextProps & ContainerProps & ColorProps & {
    children: ReactNode;
};
export declare const Text: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, CommonTextProps & ContainerProps & ColorProps & {
    children: ReactNode;
}, never>;
//# sourceMappingURL=Text.d.ts.map