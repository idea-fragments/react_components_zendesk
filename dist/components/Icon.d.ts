import { ComponentType, SVGAttributes } from "react";
type SVGComponent = ComponentType<SVGAttributes<any>>;
type Props = {
    color?: string;
    size?: number | string;
    svg: string | Array<string> | SVGComponent;
    title?: string;
    onClick?: () => void;
};
export type IconProps = Props;
export declare const Icon: {
    ({ color, size, svg, title, onClick, }: Props): import("react/jsx-runtime").JSX.Element;
    COMPONENT_NAME: string;
};
export {};
//# sourceMappingURL=Icon.d.ts.map