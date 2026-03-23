import { SectionPaddingSize } from "components/layout/Section";
import { CSSProp } from "styles/types";
export type SectionBodyProps = {
    noHorizontalPadding?: boolean;
    paddingSize?: SectionPaddingSize;
    scrollable?: boolean;
} & CSSProp;
export declare const SectionBody: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {
    noHorizontalPadding?: boolean | undefined;
    paddingSize?: SectionPaddingSize | undefined;
    scrollable?: boolean | undefined;
} & CSSProp<any>, never>;
//# sourceMappingURL=SectionBody.d.ts.map