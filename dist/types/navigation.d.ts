import React, { FC, PropsWithChildren, ComponentType, Ref } from 'react';
import { ValueOf } from 'utils/types';
import * as styled_components from 'styled-components';
import { FlattenSimpleInterpolation } from 'styled-components';
import * as react_jsx_runtime from 'react/jsx-runtime';

declare const Breadcrumbs: FC<PropsWithChildren<{}>>;

type PromiseFunc<T = any, Rtn = any> = (...o: T[]) => Promise<Rtn>;

declare const ALIGNMENTS: {
    readonly start: "flex-start";
    readonly center: "center";
    readonly end: "flex-end";
};
type Alignment = ValueOf<typeof ALIGNMENTS>;

type ColorProps = {
    accent?: boolean;
    color?: string;
    danger?: boolean;
    neutral?: boolean;
    primary?: boolean;
    secondary?: boolean;
    success?: boolean;
    warning?: boolean;
};
type ContainerProps = {
    _css?: CSS;
    color?: string;
    compact?: boolean;
    fluid?: boolean;
    className?: any;
};
type CSS<T = any> = FlattenSimpleInterpolation | string | T;
type CSSProp<T = any> = {
    _css?: CSS<T>;
    className?: string;
};

declare const BUTTON_SIZES: {
    readonly SMALL: "small";
    readonly LARGE: "large";
};
type ButtonSize = (typeof BUTTON_SIZES)[keyof typeof BUTTON_SIZES];
type AutoLoadable = {
    autoLoadable: true;
    onClick: PromiseFunc;
};
type ButtonBaseProps = PropsWithChildren<{
    alignItems?: string;
    alignSelf?: Alignment;
    autoLoadable?: boolean;
    disabled?: boolean;
    flat?: boolean;
    groupKey?: string;
    icon?: string | ComponentType;
    iconPosition?: "left" | "right";
    iconSize?: string;
    inline?: boolean;
    innerAs?: string;
    innerRef?: Ref<HTMLButtonElement>;
    loading?: boolean;
    pill?: boolean;
    primary?: boolean;
    size?: ButtonSize;
    wrapInlineText?: boolean;
    onClick: () => void;
}> & CSSProp & ColorProps & ContainerProps;
type ControlledLoadable = {
    loading?: boolean;
    onClick: () => void;
};
type ButtonProps = (ButtonBaseProps & ControlledLoadable) | (ButtonBaseProps & AutoLoadable);

type ButtonLinkProps = {
    to?: any;
    href?: string;
    external?: boolean;
    LinkComponent?: string | ComponentType<{
        className: string;
        to: any;
    } & any>;
    onClick?: ButtonProps["onClick"];
} & Omit<ButtonProps, "onClick"> & ColorProps & ContainerProps;
declare const ButtonLink: React.ForwardRefExoticComponent<{
    to?: any;
    href?: string | undefined;
    external?: boolean | undefined;
    LinkComponent?: string | React.ComponentType<any> | undefined;
    onClick?: ((() => void) & (() => void)) | ((() => void) & PromiseFunc<any, any>) | undefined;
} & Omit<ButtonProps, "onClick"> & ColorProps & ContainerProps & React.RefAttributes<any>>;

declare const InlineButtonLink: styled_components.StyledComponent<(props: any) => react_jsx_runtime.JSX.Element, styled_components.DefaultTheme, {}, never>;

export { Breadcrumbs, ButtonLink, ButtonLinkProps, InlineButtonLink };
