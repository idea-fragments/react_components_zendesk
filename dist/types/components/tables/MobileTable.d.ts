/// <reference types="react" />
import { TableProps } from "components/tables/Table";
declare type Props = TableProps & {
    hasRowActions: boolean;
    onSelectAllToggle?: (b: boolean) => void;
};
export declare const MobileTable: ({ actions, checkable, checkedItems, columnConfigs, filterState, hasRowActions, helpText, items, mobileListview, mobileListviewNodes, sortState, title, onColumnSort, onFiltersChange, onItemClick, onItemChecked, onSelectAllToggle, }: Props) => JSX.Element;
export {};
//# sourceMappingURL=MobileTable.d.ts.map