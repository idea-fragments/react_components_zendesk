import { MouseEventHandler } from "react";
export declare const Close: import("styled-components").StyledComponent<import("react").ForwardRefExoticComponent<import("react").HTMLAttributes<HTMLDivElement> & import("react").RefAttributes<HTMLDivElement>>, any, {}, never>;
export declare type TagProps = {
    children: any | typeof Close;
    color?: string;
    onClick?: MouseEventHandler<HTMLDivElement>;
    size?: "small" | "large";
    success?: boolean;
};
export declare const Tag: import("styled-components").StyledComponent<import("react").ForwardRefExoticComponent<import("@zendeskgarden/react-tags").ITagProps & import("react").RefAttributes<HTMLDivElement>> & {
    Avatar: {
        (props: import("react").HTMLAttributes<HTMLElement>): JSX.Element;
        displayName: string;
    };
    Close: import("react").ForwardRefExoticComponent<import("react").HTMLAttributes<HTMLDivElement> & import("react").RefAttributes<HTMLDivElement>>;
}, any, {
    hue: string | undefined;
} & TagProps, "hue">;
//# sourceMappingURL=Tag.d.ts.map