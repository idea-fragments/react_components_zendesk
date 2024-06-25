import * as _zendeskgarden_react_theming from '@zendeskgarden/react-theming';
import * as styled_components from 'styled-components';
import { ThemedStyledProps, FlattenSimpleInterpolation } from 'styled-components';
import { Nullable } from 'global';
import { ValueOf } from 'utils/types';
import { PropsWithChildren, FC } from 'react';

type StyledProps<Props = {}> = ThemedStyledProps<Props, Theme>;

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

declare const hasGoodContrast: (a: string, b: string) => boolean;
declare const fade: (c: string, amount?: number) => string;
declare const light: (c: string, amount?: number) => string;
declare const lighter: (c: string) => string;
declare const lightness: (c: string, amount?: number) => string;
declare const lightnessDelta: (c: string, delta: number) => string;
declare const veryLight: (c: string) => string;
declare const dark: (c: string, amount?: number) => string;
declare const darker: (c: string) => string;
declare const veryDark: (c: string) => string;
declare const desaturate: (c: string) => string;
declare const saturate: (c: string) => string;

declare const SPACINGS: Readonly<{
    XS: ".5rem";
    SM: "1rem";
    MD: "1.5rem";
    LG: "2rem";
    XL: "2.5rem";
    XXL: "3rem";
    XXXL: "4rem";
    XXXXL: "5rem";
}>;
declare const SPACE_DIRECTIONS: Readonly<{
    DOWN: "down";
    RIGHT: "right";
}>;

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
declare const FONT_SIZES_EM: Readonly<{
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
type CSSProp<T = any> = {
    _css?: CSS<T>;
    className?: string;
};

declare const backgroundPrimaryWithText: styled_components.FlattenInterpolation<styled_components.ThemeProps<styled_components.DefaultTheme>>;
declare const textColorForBackground: styled_components.FlattenInterpolation<styled_components.ThemedStyledProps<{
    color?: string | undefined;
}, styled_components.DefaultTheme>>;
declare const textColorPrimary: styled_components.FlattenInterpolation<styled_components.ThemeProps<styled_components.DefaultTheme>>;
declare const textWithColor: styled_components.FlattenInterpolation<styled_components.ThemedStyledProps<{
    color: string;
    inline?: boolean | undefined;
}, styled_components.DefaultTheme>>;

declare const PHONE_SIZE = 560;
declare const TABLET_SIZE = 840;
type MediaQuery = (styles: CSS) => CSS;
type MediaQueriesI = {
    forPhones: MediaQuery;
    forTablets: MediaQuery;
    forTabletsAndUp: MediaQuery;
    forLargeTabletsAndUp: MediaQuery;
    forSmallComputersAndUp: MediaQuery;
    forLargeComputers: MediaQuery;
};
declare const mediaQueries: (wideLayout?: boolean) => MediaQueriesI;
declare const rem: (px: number) => string;
declare const unit: (px: number) => string;
declare const remSize: (e?: HTMLElement) => number;

type Props = PropsWithChildren<{
    theme: object;
}>;
declare const ThemeProvider: FC<Props>;

declare const THEMES: {
    light: Theme;
    light2: Theme;
    dark: Theme;
    __ZENDESK_DEFAULT_THEME__: _zendeskgarden_react_theming.IGardenTheme;
};

export { CSS, CSSProp, ColorProps, CommonTextProps, ContainerProps, ContainerStyles, FONT_SIZES, FONT_SIZES_EM, FONT_TAGS, FONT_WEIGHTS, FontSize, FontTag, FontWeight, MediaQueriesI, MediaQuery, PHONE_SIZE, Props, SPACE_DIRECTIONS, SPACINGS, StyledProps, Styles, TABLET_SIZE, THEMES, TextAlignment, Theme, ThemeProvider, backgroundPrimaryWithText, dark, darker, desaturate, fade, hasGoodContrast, light, lighter, lightness, lightnessDelta, mediaQueries, rem, remSize, saturate, textColorForBackground, textColorPrimary, textWithColor, unit, veryDark, veryLight };
