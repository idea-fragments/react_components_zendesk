import { ComponentType } from "react";
type Props = {
    color?: string;
    size?: number | string;
    svg: string | Array<string> | ComponentType;
    title?: string;
    onClick?: () => void;
};
export type IconProps = Props;
export declare const Icon: {
    ({ color, size, svg: SVG, title, onClick, }: Props): import("react/jsx-runtime").JSX.Element;
    COMPONENT_NAME: string;
};
export {};
//# sourceMappingURL=Icon.d.ts.map