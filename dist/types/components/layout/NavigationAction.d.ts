import { ComponentType } from "react";
export declare type NavigationAction = {
    alwaysActive?: boolean;
    as?: ComponentType<{
        href: string;
    }>;
    href?: string;
    icon?: any | ComponentType;
    label: string;
    onClick?: () => void;
} & (NavigationLinkProps | NavigationButtonProps);
declare type NavigationLinkProps = {
    href: string;
};
declare type NavigationButtonProps = {
    onClick: () => void;
};
export {};
//# sourceMappingURL=NavigationAction.d.ts.map