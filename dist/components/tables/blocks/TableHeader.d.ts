import { ColumnConfig, FilterState, SortState, TableAction } from "components/tables/Table";
type Props = {
    actions?: TableAction[];
    checkable?: boolean;
    columnConfigs: ColumnConfig[];
    filterState?: FilterState;
    selectedCount: number;
    sortState?: SortState;
    totalPageCount: number;
    onFiltersChange?: (changes: FilterState) => void;
    onColumnSort?: (s: SortState) => void;
    onSelectAllToggle?: (isChecked: boolean) => void;
};
/**
 * TableHeader displays selection count and table actions with responsive behavior.
 * - Desktop: Shows selection count text and standard table actions
 * - Mobile: Shows "Select All/Deselect All" button and compact table actions
 */
export declare const TableHeader: ({ actions, columnConfigs, filterState, selectedCount, sortState, totalPageCount, onFiltersChange, onColumnSort, }: Props) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=TableHeader.d.ts.map