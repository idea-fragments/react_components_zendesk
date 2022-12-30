/// <reference types="react" />
import { ColumnConfig, Item, ItemKey } from "components/tables/Table";
declare type Props = {
    checkable?: boolean;
    checkedItems?: Set<ItemKey>;
    columnConfigs: Array<ColumnConfig>;
    hasRowActions?: boolean;
    items: Array<Item>;
    onSelectAllToggle?: (selected: boolean) => void;
};
export declare const Header: ({ checkable, checkedItems, columnConfigs, hasRowActions, items, onSelectAllToggle, }: Props) => JSX.Element;
export {};
//# sourceMappingURL=Header.d.ts.map