/// <reference types="react" />
import { ColumnConfig, Item, ItemKey } from "components/tables/Table";
declare type Props = {
    checkable?: boolean;
    checkedItems?: Set<ItemKey>;
    columnConfigs: Array<ColumnConfig>;
    hasRowActions?: boolean;
    initialFilterValues?: {
        [key: string]: string;
    };
    items: Array<Item>;
    onFilterChange?: (name: string, value: any) => void;
    onSelectAllToggle?: (selected: boolean) => void;
};
export declare const Header: ({ checkable, checkedItems, columnConfigs, hasRowActions, initialFilterValues, items, onFilterChange, onSelectAllToggle, }: Props) => JSX.Element;
export {};
//# sourceMappingURL=Header.d.ts.map
