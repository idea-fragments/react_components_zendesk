import { ButtonProps } from "components/forms/Button";
import React, { ComponentType } from "react";
import { ColorProps, ContainerProps } from "styles/types";
export type ButtonLinkProps = {
    to?: any;
    href?: string;
    external?: boolean;
    LinkComponent?: string | ComponentType<{
        className: string;
        to: any;
    } & any>;
    onClick?: ButtonProps["onClick"];
} & Omit<ButtonProps, "onClick"> & ColorProps & ContainerProps;
export declare const ButtonLink: React.ForwardRefExoticComponent<{
    to?: any;
    href?: string | undefined;
    external?: boolean | undefined;
    LinkComponent?: string | React.ComponentType<any> | undefined;
    onClick?: ((() => void) & (() => void)) | ((() => void) & import("../../utils/function.types").PromiseFunc<any, any>) | undefined;
} & Omit<ButtonProps, "onClick"> & ColorProps & ContainerProps & React.RefAttributes<any>>;
//# sourceMappingURL=ButtonLink.d.ts.map