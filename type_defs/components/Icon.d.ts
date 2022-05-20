/// <reference types="react" />
declare type Props = {
    color?: string;
    size?: number | string;
    svg: string | Array<string>;
    title?: string;
    onClick?: () => void;
};
export declare type IconProps = Props;
export declare const Icon: {
    ({ color, size, svg, title, onClick, }: Props): JSX.Element;
    COMPONENT_NAME: string;
};
export {};
//# sourceMappingURL=Icon.d.ts.map