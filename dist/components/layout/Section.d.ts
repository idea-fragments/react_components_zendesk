import { ColorProps, CSSProp } from "styles/types";
export type SectionProps = {
    bordered?: boolean;
    rounded?: boolean;
    shadowed?: boolean;
} & ColorProps & CSSProp;
export declare const Section: import("styled-components").StyledComponent<"section", import("styled-components").DefaultTheme, {
    bordered?: boolean | undefined;
    rounded?: boolean | undefined;
    shadowed?: boolean | undefined;
} & ColorProps & CSSProp<any>, never>;
//# sourceMappingURL=Section.d.ts.map