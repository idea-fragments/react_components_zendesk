/// <reference types="react" />
import * as react from 'react';
import { ReactNode, MouseEventHandler } from 'react';
import * as styled_components from 'styled-components';
import { FlattenSimpleInterpolation, ThemedStyledProps } from 'styled-components';
import { ValueOf } from 'utils/types';
import { Nullable } from 'global';

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

type FullSpectrumColors = {
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
};
type PartialSpectrumColors = {
    400: string;
    M400: string;
    600: string;
    M600: string;
};
type ContainerStyles = {
    background?: string;
    borderRadius?: string;
    height?: string;
    margin?: string;
    padding?: string;
    shadow?: string;
    zIndex?: number;
};
type Styles = {
    appBar: Required<Pick<ContainerStyles, "background" | "height" | "shadow" | "zIndex">> & {
        screenPosition: "top" | "bottom";
    };
    border: {
        color: string;
    };
    buttons: {
        textTransform: Nullable<string>;
    };
    chat: {
        message: {
            currentUser: {
                icon: {
                    background: string;
                };
                text: {
                    background: string;
                };
            };
            other: {
                icon: {
                    background: string;
                };
                text: {
                    background: string;
                };
            };
        };
    };
    colorAccent: string;
    colorDanger: string;
    colorPrimary: string;
    colorPrimaryDark: string;
    colorSuccess: string;
    colorTertiary: string;
    colorWarning: string;
    colors: {
        black: string;
        white: string;
        product: {};
        grey: FullSpectrumColors;
        blue: FullSpectrumColors;
        red: FullSpectrumColors;
        yellow: FullSpectrumColors;
        green: FullSpectrumColors;
        kale: FullSpectrumColors;
        fuschia: PartialSpectrumColors;
        pink: PartialSpectrumColors;
        crimson: PartialSpectrumColors;
        orange: PartialSpectrumColors;
        lemon: PartialSpectrumColors;
        lime: PartialSpectrumColors;
        mint: PartialSpectrumColors;
        teal: PartialSpectrumColors;
        azure: PartialSpectrumColors;
        royal: PartialSpectrumColors;
        purple: PartialSpectrumColors;
    };
    container: {
        horizontalPadding: string;
    };
    drawer: {
        width: string;
    };
    font: {
        size: string;
    };
    footer: {
        background: string;
    };
    infoPanel: {
        background: string;
    };
    modal: {
        backdrop: {
            background: string;
        };
    };
    nav: {
        linkColor: string;
    };
    notifications: {
        zIndex: number;
    };
    overlayBackground: string;
    pageBackground: string;
    scrollbar: {
        thumbColor: string;
        trackColor: string;
    };
    scrollbarColor: string;
    section: ContainerStyles & {
        body: {
            padding: string;
        };
        header: {
            padding: string;
        };
    };
    sidebar: {
        actionButton: {
            borderRadius: string;
            color: string;
        };
        background: string;
        boxShadow: string;
        padding: string;
        width: string;
        zIndex: number;
    };
    table: {
        borderColor: string;
        borderSize: string;
    };
    textColorDark: string;
    textColorLight: string;
    textColorOverPrimaryBg: string;
    textColorPrimary: string;
    textColorSecondary: string;
    tooltip: {
        darkBackground: string;
    };
    getTextColorForBackground: (p: StyledProps<{
        color: string;
    }>) => string;
};
type Theme = {
    isDark: boolean;
    styles: Styles;
};

type StyledProps<Props = {}> = ThemedStyledProps<Props, Theme>;

type Props = {
    danger?: boolean;
    fluid?: boolean;
    primary?: boolean;
    success?: boolean;
};
type ChipProps = Props & StyledProps;
declare const Chip: styled_components.StyledComponent<"div", styled_components.DefaultTheme, CommonTextProps & ContainerProps & ColorProps & {
    children: react.ReactNode;
} & {
    as: "p";
} & {
    as: string;
    background: string;
    color: string;
} & Props, "background" | "color" | "as">;

declare const Close: styled_components.StyledComponent<react.ForwardRefExoticComponent<react.ButtonHTMLAttributes<HTMLButtonElement> & react.RefAttributes<HTMLButtonElement>>, styled_components.DefaultTheme, {}, never>;
type TagProps = {
    children: ReactNode;
    className?: string;
    color?: string;
    onClick?: MouseEventHandler<HTMLDivElement>;
    onClose?: () => void;
    size?: "small" | "large";
    success?: boolean;
};
declare let Tag: react.ForwardRefExoticComponent<TagProps & react.RefAttributes<HTMLDivElement>>;

export { Chip, ChipProps, Close, Tag, TagProps };
