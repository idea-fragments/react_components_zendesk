import { FlattenSimpleInterpolation } from "styled-components";
export declare type ColorProps = {
    accent?: boolean;
    color?: string;
    danger?: boolean;
    neutral?: boolean;
    primary?: boolean;
    secondary?: boolean;
    success?: boolean;
    warning?: boolean;
};
export declare type ContainerProps = {
    _css?: CSS;
    color?: string;
    compact?: boolean;
    fluid?: boolean;
    className?: any;
};
export declare type CSS<T = any> = FlattenSimpleInterpolation | string | T;
export declare type CSSProp<T = any> = {
    _css?: CSS<T>;
};
//# sourceMappingURL=types.d.ts.map