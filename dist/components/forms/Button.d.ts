import { SVGComponent } from "components/Icon";
import { Nullable } from "global";
import { ComponentType, PropsWithChildren, ReactNode, Ref } from "react";
import { Alignment } from "styles/alignments";
import { ColorProps, ContainerProps, CSSProp } from "styles/types";
import { PromiseFunc } from "utils/function.types";
export declare const BUTTON_SIZES: {
    readonly LARGE: "large";
    readonly MEDIUM: "medium";
    readonly SMALL: "small";
    readonly X_SMALL: "x_small";
};
export type ButtonSize = (typeof BUTTON_SIZES)[keyof typeof BUTTON_SIZES];
type AutoLoadable = {
    autoLoadable: true;
    onClick: PromiseFunc;
};
type ButtonBaseProps = PropsWithChildren<{
    alignItems?: string;
    alignSelf?: Alignment;
    ariaLabel?: string;
    autoLoadable?: boolean;
    disabled?: boolean;
    flat?: boolean;
    groupKey?: string;
    icon?: Nullable<string | SVGComponent | ComponentType | ReactNode>;
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
export type ButtonProps = (ButtonBaseProps & ControlledLoadable) | (ButtonBaseProps & AutoLoadable);
export declare const Button: ComponentType<ButtonProps>;
export {};
//# sourceMappingURL=Button.d.ts.map