/// <reference types="react" />
import { MenuPlacement } from "components/forms/selectors/Dropdown";
export declare type OverflowMenuItem = {
    label: string;
    action: () => void;
};
declare type Props = {
    appendToNode?: HTMLElement;
    placement?: MenuPlacement;
    actions: Array<OverflowMenuItem>;
};
export declare const OverflowMenu: ({ actions, appendToNode, placement }: Props) => JSX.Element;
export {};
//# sourceMappingURL=OverflowMenu.d.ts.map