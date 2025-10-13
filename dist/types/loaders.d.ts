import { FC, PropsWithChildren, ComponentType } from 'react';
import { ValueOf } from 'utils/types';
import * as react_jsx_runtime from 'react/jsx-runtime';
import { FlattenSimpleInterpolation } from 'styled-components';

type Props$2 = {
    className?: string;
    debugId?: number;
    opaqueSpinner?: boolean;
    showSpinner: boolean;
};
declare let Loadable: FC<PropsWithChildren<Props$2>>;

declare const FONT_SIZES: {
    readonly XXS: ".8rem";
    readonly XS: ".9rem";
    readonly SM: "1rem";
    readonly MD: "1.3rem";
    readonly LG: "1.7rem";
    readonly XL: "2.3rem";
    readonly XXL: "3.3rem";
    readonly XXXL: "4rem";
    readonly XXXXL: "5rem";
    readonly XXXXXL: "6rem";
};
type FontSize = ValueOf<typeof FONT_SIZES>;

type Props$1 = {
    color?: string;
    size?: FontSize;
};
declare const Dots: FC<Props$1>;

type CSS<T = any> = FlattenSimpleInterpolation | string | T;
type CSSProp<T = any> = {
    _css?: CSS<T>;
    className?: string;
};

type Props = {
    className?: string;
    innerAs?: ComponentType<any>;
    isLoading: boolean;
} & CSSProp;
declare let TranslucentLoader: ({ _css, children, className, innerAs, isLoading, }: PropsWithChildren<Props>) => react_jsx_runtime.JSX.Element;

export { Dots, Loadable, TranslucentLoader };
