import { Props as ButtonProps } from "components/forms/Button";
import React from "react";
import { ColorProps, ContainerProps } from "styles/types";
export declare const ButtonLink: React.ForwardRefExoticComponent<{
    to?: any;
    href?: string | undefined;
    external?: boolean | undefined;
    LinkComponent?: string | React.ComponentType<any> | undefined;
    onClick?: ((() => void) & (() => void)) | ((() => void) & import("../../utils/function.types").PromiseFunc<any, any>) | undefined;
} & Omit<ButtonProps, "onClick"> & ColorProps & ContainerProps & React.RefAttributes<any>>;
//# sourceMappingURL=ButtonLink.d.ts.map