import { MenuPlacement } from "components/forms/selectors/Dropdown";
import React from "react";
export type OverflowMenuItem = {
    label: string;
    action: () => void;
};
type Props = {
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
    as: React.ComponentType<import("components/forms/Button").ButtonProps>;
}, "color" | "primary" | "size" | "data-component-name" | "aria-label" | "compact" | "icon" | "iconSize" | "as">;
export declare const OverflowMenu: ({ actions, appendToNode, placement }: Props) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=OverflowMenu.d.ts.map