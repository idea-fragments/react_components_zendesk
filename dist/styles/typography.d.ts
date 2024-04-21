import { ValueOf } from "utils/types";
export declare const FONT_TAGS: {
    readonly DIV: "div";
    readonly LABEL: "label";
    readonly H1: "h1";
    readonly H2: "h2";
    readonly H3: "h3";
    readonly H4: "h4";
    readonly H5: "h5";
    readonly H6: "h6";
    readonly P: "p";
    readonly SPAN: "span";
};
export declare const FONT_SIZES: {
    readonly XXS: ".8rem";
    readonly XS: ".9rem";
    readonly SM: "1rem";
    readonly MD: "1.3rem";
    readonly LG: "1.7rem";
    readonly XL: "2.3rem";
    readonly XXL: "3.3rem";
    readonly XXXL: "4rem";
    readonly XXXXL: "5rem";
    readonly XXXXXL: "6rem";
};
export declare const FONT_SIZES_EM: Readonly<{
    XXS: string;
    XS: string;
    SM: string;
    MD: string;
    LG: string;
    XL: string;
    XXL: string;
    XXXL: string;
    XXXXL: string;
    XXXXXL: string;
}>;
export declare const FONT_WEIGHTS: {
    readonly THIN: "100";
    readonly LIGHT: "300";
    readonly REGULAR: "400";
    readonly MEDIUM: "500";
    readonly BOLD: "700";
    readonly BLACK: "800";
};
export type FontSize = ValueOf<typeof FONT_SIZES>;
export type FontWeight = ValueOf<typeof FONT_WEIGHTS>;
export type FontTag = ValueOf<typeof FONT_TAGS>;
export type TextAlignment = "center" | "left" | "right";
export type CommonTextProps = {
    align?: TextAlignment;
    as?: FontTag;
    hasSubText?: boolean;
    size?: FontSize;
    weight?: FontWeight;
};
//# sourceMappingURL=typography.d.ts.map