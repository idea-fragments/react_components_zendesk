import { StyledProps } from "components/StyledProps.type";
import { Nullable } from "global";
export declare type ContainerStyles = {
    background?: string;
    borderRadius?: string;
    height?: string;
    margin?: string;
    padding?: string;
    shadow?: string;
    zIndex?: number;
};
export declare type Styles = {
    appBar: ContainerStyles;
    border: {
        color: string;
    };
    buttons: {
        textTransform: Nullable<string>;
    };
    colorAccent: string;
    colorSecondary: string;
    colorPrimary: string;
    colorPrimaryDark: string;
    colorWarning: string;
    colorDanger: string;
    colorSuccess: string;
    container: {
        horizontalPadding: string;
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
    section: ContainerStyles;
    sidebar: {
        background: string;
        boxShadow: string;
        zIndex: number;
    };
    table: {
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
export declare type Theme = {
    isDark: boolean;
    styles: Styles;
};
//# sourceMappingURL=Theme.type.d.ts.map