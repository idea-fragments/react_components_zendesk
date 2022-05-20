/// <reference types="react" />
import type { MenuPlacement } from "components/forms/selectors/Dropdown";
export declare type OverflowMenuItem = {
    label: string;
    action: () => void;
};
declare type Props = {
    placement?: MenuPlacement;
    actions: Array<OverflowMenuItem>;
};
export declare const OverflowMenu: ({ actions, placement }: Props) => JSX.Element;
export {};
//# sourceMappingURL=OverflowMenu.d.ts.map