import { FC, PropsWithChildren, ComponentType } from 'react';
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
