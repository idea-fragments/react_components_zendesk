/// <reference types="react" />
import { TableProps } from "components/tables/Table";
declare type Props = TableProps & {
    hasRowActions: boolean;
    onSelectAllToggle?: (b: boolean) => void;
};
export declare const DesktopTable: {
    ({ actions, checkable, checkedItems, columnConfigs, emptyState, filterState, hasRowActions, helpText, items, maxHeight, sortState, title, onColumnSort, onFiltersChange, onItemChecked, onItemClick, onItemHoverEnd, onItemHoverStart, onSelectAllToggle, }: Props): JSX.Element;
    COMPONENT_NAME: string;
};
export {};
//# sourceMappingURL=DesktopTable.d.ts.map