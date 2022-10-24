import { ComponentType } from "react";
export declare type NavigationAction = {
    as?: ComponentType<{
        href: string;
    }>;
    href?: string;
    icon?: any | ComponentType;
    label: string;
    onClick?: () => any;
} & (NavigationLinkProps | NavigationButtonProps);
declare type NavigationLinkProps = {
    href: string;
};
declare type NavigationButtonProps = {
    onClick: () => any;
};
export {};
//# sourceMappingURL=NavigationAction.d.ts.map