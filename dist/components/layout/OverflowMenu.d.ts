import { ButtonProps } from "components/forms/Button";
import { MenuPlacement } from "components/forms/selectors/Dropdown";
import React, { FC } from "react";
import { CSSProp } from "styles/types";
export type OverflowMenuItem = {
    action: () => void;
    label: string;
};
export type OverflowButtonProps = ButtonProps & CSSProp;
export declare const OverflowButton: import("styled-components").StyledComponent<React.ForwardRefExoticComponent<import("@zendeskgarden/react-tables/dist/typings/elements/OverflowButton").IOverflowButtonProps & React.RefAttributes<HTMLButtonElement>>, import("styled-components").DefaultTheme, {}, never>;
export type OverflowMenuProps = {
    actions: Array<OverflowMenuItem>;
    appendToNode?: HTMLElement;
    overflowButtonProps?: OverflowButtonProps;
    placement?: MenuPlacement;
};
export declare const OverflowMenu: FC<OverflowMenuProps>;
//# sourceMappingURL=OverflowMenu.d.ts.map