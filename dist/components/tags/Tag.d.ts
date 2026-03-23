import { MouseEventHandler, ReactNode } from "react";
import { FullSpectrumColors } from "styles/theme/Theme.type";
import { CSSProp } from "styles/types";
export declare const Close: import("styled-components").StyledComponent<import("react").ForwardRefExoticComponent<import("react").ButtonHTMLAttributes<HTMLButtonElement> & import("react").RefAttributes<HTMLButtonElement>>, import("styled-components").DefaultTheme, {}, never>;
export type TagProps = {
    backgroundColor?: string;
    backgroundColorWeight?: keyof FullSpectrumColors;
    children: ReactNode;
    className?: string;
    color?: FullSpectrumColors;
    onClick?: MouseEventHandler<HTMLDivElement>;
    onClose?: () => void;
    rounded?: boolean;
    size?: "small" | "large";
    success?: boolean;
    textColor?: string;
    wrapText?: boolean;
} & CSSProp;
export declare let Tag: import("react").ForwardRefExoticComponent<{
    backgroundColor?: string | undefined;
    backgroundColorWeight?: keyof FullSpectrumColors | undefined;
    children: ReactNode;
    className?: string | undefined;
    color?: FullSpectrumColors | undefined;
    onClick?: MouseEventHandler<HTMLDivElement> | undefined;
    onClose?: (() => void) | undefined;
    rounded?: boolean | undefined;
    size?: "small" | "large" | undefined;
    success?: boolean | undefined;
    textColor?: string | undefined;
    wrapText?: boolean | undefined;
} & CSSProp<any> & import("react").RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=Tag.d.ts.map