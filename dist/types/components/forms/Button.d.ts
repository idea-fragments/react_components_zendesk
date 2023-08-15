import { ComponentType, PropsWithChildren, Ref } from "react";
import { Alignment } from "styles/alignments";
import { ColorProps, ContainerProps, CSSProp } from "styles/types";
import { PromiseFunc } from "utils/function.types";
export declare const BUTTON_SIZES: {
    readonly SMALL: "small";
    readonly LARGE: "large";
};
export declare type ButtonSize = typeof BUTTON_SIZES[keyof typeof BUTTON_SIZES];
declare type AutoLoadable = {
    autoLoadable: true;
    onClick: PromiseFunc;
};
declare type ButtonBaseProps = PropsWithChildren<{
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
    wrapInlineText?: false;
    onClick: () => void;
}> & CSSProp & ColorProps & ContainerProps;
declare type ControlledLoadable = {
    loading?: boolean;
    onClick: () => void;
};
export declare type Props = (ButtonBaseProps & ControlledLoadable) | (ButtonBaseProps & AutoLoadable);
export declare type ButtonProps = Props;
export declare const Button: ComponentType<ButtonProps>;
export {};
//# sourceMappingURL=Button.d.ts.map