import { MouseEventHandler, ReactNode } from "react";
export declare const Close: import("styled-components").StyledComponent<import("react").ForwardRefExoticComponent<import("react").HTMLAttributes<HTMLDivElement> & import("react").RefAttributes<HTMLDivElement>>, import("styled-components").DefaultTheme, {}, never>;
export declare type TagProps = {
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