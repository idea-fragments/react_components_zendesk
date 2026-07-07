import { FC, PropsWithChildren, ComponentType, ReactNode } from 'react';
import { FlattenSimpleInterpolation, ThemedStyledProps } from 'styled-components';
import { Nullable } from 'global';

type CSS<T = any> = FlattenSimpleInterpolation | string | T;
type CSSProp<T = any> = {
    _css?: CSS<T>;
    className?: string;
};

type LoadingFunc = <T>(p: Promise<T>) => Promise<T>;
type LoaderProps = PropsWithChildren<{
    as?: ComponentType;
}> & CSSProp;
type Return = {
    isLoading: boolean;
    Loader: FC<LoaderProps>;
    withLoading: LoadingFunc;
};
declare const useLoaderV2: () => Return;

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
        scrollBar: {
            height: string;
        };
    };
    border: {
        color: string;
    };
    buttons: {
        borderRadius: string;
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
        accent: FullSpectrumColors;
        amber: FullSpectrumColors;
        azure: FullSpectrumColors;
        bark: FullSpectrumColors;
        black: string;
        blue: FullSpectrumColors;
        cream: FullSpectrumColors;
        crimson: FullSpectrumColors;
        denim: FullSpectrumColors;
        dirtyGrey: FullSpectrumColors;
        earthy: {
            bark: FullSpectrumColors;
            cream: FullSpectrumColors;
            dirtyGrey: FullSpectrumColors;
            gold: FullSpectrumColors;
            moss: FullSpectrumColors;
            terra: FullSpectrumColors;
        };
        gold: FullSpectrumColors;
        green: FullSpectrumColors;
        grey: FullSpectrumColors;
        kale: FullSpectrumColors;
        lemon: FullSpectrumColors;
        lime: FullSpectrumColors;
        magenta: FullSpectrumColors;
        mint: FullSpectrumColors;
        moss: FullSpectrumColors;
        orange: FullSpectrumColors;
        pink: FullSpectrumColors;
        primary: FullSpectrumColors;
        product: {};
        purple: FullSpectrumColors;
        red: FullSpectrumColors;
        royal: FullSpectrumColors;
        sage: FullSpectrumColors;
        teal: FullSpectrumColors;
        terra: FullSpectrumColors;
        white: string;
        yellow: FullSpectrumColors;
    };
    container: {
        horizontalPadding: string;
    };
    drawer: {
        icon: ReactNode;
        width: string;
    };
    dropdowns: {
        borderRadius: string;
        menu: {
            borderRadius: string;
        };
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
        borderRadius: string;
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
        filterButtonIcon: Nullable<string>;
    };
    tag: {
        textColorWeight: keyof FullSpectrumColors;
        backgroundColor: keyof FullSpectrumColors;
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

declare const useTheme: () => Theme;

declare const useIsMounted: () => () => boolean;

type Measurements = {
    isLargeComputer: boolean;
    isLargeTablet: boolean;
    isLargeTabletOrLarger: boolean;
    isLargeTabletOrSmaller: boolean;
    isPhone: boolean;
    isSmallComputer: boolean;
    isSmallComputerOrLarger: boolean;
    isTablet: boolean;
};
declare const useDeviceSizeWatcher: () => Measurements;

export { Measurements, useDeviceSizeWatcher, useIsMounted, useLoaderV2, useTheme };
