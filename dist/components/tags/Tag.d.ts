import { MouseEventHandler, ReactNode } from "react";
import { FullSpectrumColors } from "styles/theme/Theme.type";
export declare const Close: import("styled-components").StyledComponent<import("react").ForwardRefExoticComponent<import("react").ButtonHTMLAttributes<HTMLButtonElement> & import("react").RefAttributes<HTMLButtonElement>>, import("styled-components").DefaultTheme, {}, never>;
export type TagProps = {
    backgroundColor?: string;
    backgroundColorWeight?: keyof FullSpectrumColors;
    children: ReactNode;
    className?: string;
    color?: FullSpectrumColors;
    onClick?: MouseEventHandler<HTMLDivElement>;
    onClose?: () => void;
    size?: "small" | "large";
    success?: boolean;
    textColor?: string;
};
export declare let Tag: import("react").ForwardRefExoticComponent<TagProps & import("react").RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=Tag.d.ts.map