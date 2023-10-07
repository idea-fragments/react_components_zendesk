import { ComponentType, PropsWithChildren, Ref } from "react";
import { Alignment } from "styles/alignments";
import { ColorProps, ContainerProps, CSSProp } from "styles/types";
import { PromiseFunc } from "utils/function.types";
export declare const BUTTON_SIZES: {
    readonly SMALL: "small";
    readonly LARGE: "large";
};
export type ButtonSize = typeof BUTTON_SIZES[keyof typeof BUTTON_SIZES];
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
    wrapInlineText?: false;
    onClick: () => void;
}> & CSSProp & ColorProps & ContainerProps;
type ControlledLoadable = {
    loading?: boolean;
    onClick: () => void;
};
export type Props = (ButtonBaseProps & ControlledLoadable) | (ButtonBaseProps & AutoLoadable);
export type ButtonProps = Props;
export declare const Button: ComponentType<ButtonProps>;
export {};
//# sourceMappingURL=Button.d.ts.map