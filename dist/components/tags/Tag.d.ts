import { MouseEventHandler, ReactNode } from "react";
export declare const Close: import("styled-components").StyledComponent<import("react").ForwardRefExoticComponent<import("react").ButtonHTMLAttributes<HTMLButtonElement> & import("react").RefAttributes<HTMLButtonElement>>, import("styled-components").DefaultTheme, {}, never>;
export type TagProps = {
    children: ReactNode;
    className?: string;
    color?: string;
    onClick?: MouseEventHandler<HTMLDivElement>;
    onClose?: () => void;
    size?: "small" | "large";
    success?: boolean;
};
export declare let Tag: import("react").ForwardRefExoticComponent<TagProps & import("react").RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=Tag.d.ts.map