/// <reference types="react" />
import * as react from 'react';
import { ReactNode } from 'react';
import * as styled_components from 'styled-components';
import { FlattenSimpleInterpolation } from 'styled-components';
import { ValueOf } from 'utils/types';

type ColorProps = {
    accent?: boolean;
    color?: string;
    danger?: boolean;
    neutral?: boolean;
    primary?: boolean;
    secondary?: boolean;
    success?: boolean;
    warning?: boolean;
};
type ContainerProps = {
    _css?: CSS;
    color?: string;
    compact?: boolean;
    fluid?: boolean;
    className?: any;
};
type CSS<T = any> = FlattenSimpleInterpolation | string | T;

declare const FONT_TAGS: {
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
declare const FONT_SIZES: {
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
declare const FONT_WEIGHTS: {
    readonly THIN: "100";
    readonly LIGHT: "300";
    readonly REGULAR: "400";
    readonly MEDIUM: "500";
    readonly BOLD: "700";
    readonly BLACK: "800";
};
type FontSize = ValueOf<typeof FONT_SIZES>;
type FontWeight = ValueOf<typeof FONT_WEIGHTS>;
type FontTag = ValueOf<typeof FONT_TAGS>;
type TextAlignment = "center" | "left" | "right";
type CommonTextProps = {
    align?: TextAlignment;
    as?: FontTag;
    hasSubText?: boolean;
    size?: FontSize;
    weight?: FontWeight;
};

declare const H1: styled_components.StyledComponent<"div", styled_components.DefaultTheme, CommonTextProps & ContainerProps & ColorProps & {
    children: react.ReactNode;
} & {
    as: "h1";
}, "as">;
declare const H2: styled_components.StyledComponent<"div", styled_components.DefaultTheme, CommonTextProps & ContainerProps & ColorProps & {
    children: react.ReactNode;
} & {
    as: "h2";
}, "as">;
declare const H3: styled_components.StyledComponent<"div", styled_components.DefaultTheme, CommonTextProps & ContainerProps & ColorProps & {
    children: react.ReactNode;
} & {
    as: "h3";
}, "as">;
declare const H4: styled_components.StyledComponent<"div", styled_components.DefaultTheme, CommonTextProps & ContainerProps & ColorProps & {
    children: react.ReactNode;
} & {
    as: "h4";
}, "as">;
declare const H5: styled_components.StyledComponent<"div", styled_components.DefaultTheme, CommonTextProps & ContainerProps & ColorProps & {
    children: react.ReactNode;
} & {
    as: "h5";
}, "as">;
declare const H6: styled_components.StyledComponent<"div", styled_components.DefaultTheme, CommonTextProps & ContainerProps & ColorProps & {
    children: react.ReactNode;
} & {
    as: "h6";
}, "as">;

declare const Label: styled_components.StyledComponent<"div", styled_components.DefaultTheme, CommonTextProps & ContainerProps & ColorProps & {
    children: react.ReactNode;
} & {
    as: "label";
}, "as">;

declare const Paragraph: styled_components.StyledComponent<"div", styled_components.DefaultTheme, CommonTextProps & ContainerProps & ColorProps & {
    children: react.ReactNode;
} & {
    as: "p";
}, "as">;
declare const XXS: styled_components.StyledComponent<"div", styled_components.DefaultTheme, CommonTextProps & ContainerProps & ColorProps & {
    children: react.ReactNode;
} & {
    as: "p";
}, "as">;
declare const XS: styled_components.StyledComponent<"div", styled_components.DefaultTheme, CommonTextProps & ContainerProps & ColorProps & {
    children: react.ReactNode;
} & {
    as: "p";
}, "as">;
declare const MD: styled_components.StyledComponent<"div", styled_components.DefaultTheme, CommonTextProps & ContainerProps & ColorProps & {
    children: react.ReactNode;
} & {
    as: "p";
}, "as">;
declare const LG: styled_components.StyledComponent<"div", styled_components.DefaultTheme, CommonTextProps & ContainerProps & ColorProps & {
    children: react.ReactNode;
} & {
    as: "p";
}, "as">;
declare const XL: styled_components.StyledComponent<"div", styled_components.DefaultTheme, CommonTextProps & ContainerProps & ColorProps & {
    children: react.ReactNode;
} & {
    as: "p";
}, "as">;

type TextProps = CommonTextProps & ContainerProps & ColorProps & {
    children: ReactNode;
};
declare const Text: styled_components.StyledComponent<"div", styled_components.DefaultTheme, CommonTextProps & ContainerProps & ColorProps & {
    children: ReactNode;
}, never>;

declare const Hint: styled_components.StyledComponent<"div", styled_components.DefaultTheme, CommonTextProps & ContainerProps & ColorProps & {
    children: react.ReactNode;
} & {
    as: "p";
}, "as">;

export { H1, H2, H3, H4, H5, H6, Hint, LG, Label, MD, Paragraph, Text, TextProps, XL, XS, XXS };
