import { ColorProps, CSSProp } from "styles/types";
import { ValueOf } from "utils/types";
export declare const SECTION_PADDING_SIZES: {
    readonly DEFAULT: "default";
    readonly MEDIUM: "medium";
    readonly SMALL: "small";
};
export type SectionPaddingSize = ValueOf<typeof SECTION_PADDING_SIZES>;
export type SectionPart = "body" | "footer" | "header";
export declare const sectionPartPadding: ({ paddingSize, part, }: {
    paddingSize?: SectionPaddingSize | undefined;
    part: SectionPart;
}) => import("styled-components").FlattenInterpolation<import("styled-components").ThemeProps<import("styled-components").DefaultTheme>>;
export type SectionProps = {
    bordered?: boolean;
    compact?: boolean;
    rounded?: boolean;
    shadowed?: boolean;
} & ColorProps & CSSProp;
export declare const Section: import("styled-components").StyledComponent<"section", import("styled-components").DefaultTheme, {
    bordered?: boolean | undefined;
    compact?: boolean | undefined;
    rounded?: boolean | undefined;
    shadowed?: boolean | undefined;
} & ColorProps & CSSProp<any>, never>;
//# sourceMappingURL=Section.d.ts.map