import { ComponentType } from "react";
import { Props as ButtonProps } from "components/forms/Button";
import { ColorProps, ContainerProps } from "styles/types";
declare type Props = {
    to?: any;
    href?: string;
    external?: boolean;
    LinkComponent?: string | ComponentType<{
        className: string;
        to: any;
    } & any>;
} & ButtonProps & ColorProps & ContainerProps;
export declare const ButtonLink: {
    ({ LinkComponent, external, flat, icon, iconPosition, children, ...otherProps }: Props): JSX.Element;
    COMPONENT_NAME: string;
    defaultProps: {
        primary: boolean;
        onClick: (...args: any) => void;
        LinkComponent: string;
        external: boolean;
        iconPosition: string;
    };
};
export {};
//# sourceMappingURL=ButtonLink.d.ts.map
