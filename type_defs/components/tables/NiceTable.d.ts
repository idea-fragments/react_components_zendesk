/// <reference types="react" />
import type { TableProps } from "components/tables/Table";
declare type Props = TableProps & {
    hasRowActions: boolean;
    onSelectAllToggle?: (b: boolean) => void;
};
export declare const NiceTable: {
    ({ actions, checkable, checkedItems, columnConfigs, emptyState, hasRowActions, helpText, initialFilterValues, items, title, onFilterChange, onItemChecked, onItemClick, onItemHoverEnd, onItemHoverStart, onSelectAllToggle, }: Props): JSX.Element;
    COMPONENT_NAME: string;
};
export {};
//# sourceMappingURL=NiceTable.d.ts.map