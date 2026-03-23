import { FC } from "react";
import { CSSProp } from "styles/types";
import { ValueOf } from "utils/types";
export declare const SEPARATOR_ORIENTATIONS: {
    readonly HORIZONTAL: "horizontal";
    readonly VERTICAL: "vertical";
};
export type SeparatorProps = {
    color?: string;
    fluid?: boolean;
    orientation?: ValueOf<typeof SEPARATOR_ORIENTATIONS>;
} & CSSProp;
type StyledSeparatorProps = SeparatorProps & {
    className?: string;
};
export declare const Separator: import("styled-components").StyledComponent<FC<StyledSeparatorProps>, import("styled-components").DefaultTheme, {
    color?: string | undefined;
    fluid?: boolean | undefined;
    orientation?: ValueOf<{
        readonly HORIZONTAL: "horizontal";
        readonly VERTICAL: "vertical";
    }> | undefined;
} & CSSProp<any>, never>;
export {};
//# sourceMappingURL=Separator.d.ts.map