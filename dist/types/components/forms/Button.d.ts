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
    alignSelf?: Alignment;
    disabled?: boolean;
    groupKey?: string;
    icon?: string | ComponentType;
    iconPosition?: "left" | "right";
    iconSize?: string;
    innerAs?: string;
    innerRef?: Ref<HTMLButtonElement>;
    loading?: boolean;
    pill?: boolean;
    primary?: boolean;
    size?: ButtonSize;
    onClick: () => void;
}> & CSSProp;
declare type CommonProps = ButtonBaseProps & {
    autoLoadable?: boolean;
    flat?: boolean;
    inline?: boolean;
} & ColorProps & ContainerProps;
declare type ControlledLoadable = {
    loading?: boolean;
    onClick: () => void;
};
export declare type Props = (CommonProps & ControlledLoadable) | (CommonProps & AutoLoadable);
export declare type ButtonProps = Props;
export declare const Button: ComponentType<Props>;
export {};
//# sourceMappingURL=Button.d.ts.map