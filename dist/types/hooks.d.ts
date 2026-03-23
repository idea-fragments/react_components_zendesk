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
        black: string;
        white: string;
        product: {};
        grey: FullSpectrumColors;
        blue: FullSpectrumColors;
        red: FullSpectrumColors;
        yellow: FullSpectrumColors;
        green: FullSpectrumColors;
        kale: FullSpectrumColors;
        orange: FullSpectrumColors;
        amber: FullSpectrumColors;
        lemon: FullSpectrumColors;
        purple: FullSpectrumColors;
        magenta: FullSpectrumColors;
        pink: FullSpectrumColors;
        primary: FullSpectrumColors;
        crimson: FullSpectrumColors;
        lime: FullSpectrumColors;
        mint: FullSpectrumColors;
        teal: FullSpectrumColors;
        azure: FullSpectrumColors;
        denim: FullSpectrumColors;
        royal: FullSpectrumColors;
        sage: FullSpectrumColors;
    };
    container: {
        horizontalPadding: string;
    };
    drawer: {
        icon: ReactNode;
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
