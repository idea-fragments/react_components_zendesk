import * as react_jsx_runtime from 'react/jsx-runtime';
import { ComponentType, SVGAttributes } from 'react';

type SVGComponent = ComponentType<SVGAttributes<any>>;
type Props = {
    color?: string;
    size?: number | string;
    svg: string | Array<string> | SVGComponent;
    title?: string;
    onClick?: () => void;
};
type IconProps = Props;
declare const Icon: {
    ({ color, size, svg, title, onClick, }: Props): react_jsx_runtime.JSX.Element;
    COMPONENT_NAME: string;
};

export { Icon, IconProps };
