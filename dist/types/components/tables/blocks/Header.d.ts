/// <reference types="react" />
import { ColumnConfig, Item, ItemKey, SortState } from "components/tables/Table";
declare type Props = {
    bodyScrollbarWidth: number;
    checkable?: boolean;
    checkedItems?: Set<ItemKey>;
    columnConfigs: Array<ColumnConfig>;
    hasRowActions?: boolean;
    items: Array<Item>;
    onColumnSort?: (s: SortState) => void;
    onSelectAllToggle?: (selected: boolean) => void;
    sortState?: SortState;
};
export declare const Header: ({ bodyScrollbarWidth, checkable, checkedItems, columnConfigs, hasRowActions, items, onColumnSort, onSelectAllToggle, sortState, }: Props) => JSX.Element;
export {};
//# sourceMappingURL=Header.d.ts.map