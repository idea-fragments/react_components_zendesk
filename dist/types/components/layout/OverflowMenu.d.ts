import { MenuPlacement } from "components/forms/selectors/Dropdown";
import React from "react";
export declare type OverflowMenuItem = {
    label: string;
    action: () => void;
};
declare type Props = {
    appendToNode?: HTMLElement;
    placement?: MenuPlacement;
    actions: Array<OverflowMenuItem>;
};
export declare const OverflowButton: import("styled-components").StyledComponent<React.ForwardRefExoticComponent<import("@zendeskgarden/react-tables/dist/typings/elements/OverflowButton").IOverflowButtonProps & React.RefAttributes<HTMLButtonElement>>, import("styled-components").DefaultTheme, {
    icon: string;
    "data-component-name": string;
    compact: boolean;
    color: string;
    "aria-label": "Row actions";
    size: string;
    primary: boolean;
    iconSize: string;
    as: React.ComponentType<import("components/forms/Button").Props>;
}, "color" | "primary" | "size" | "data-component-name" | "aria-label" | "as" | "compact" | "icon" | "iconSize">;
export declare const OverflowMenu: ({ actions, appendToNode, placement }: Props) => JSX.Element;
export {};
//# sourceMappingURL=OverflowMenu.d.ts.map