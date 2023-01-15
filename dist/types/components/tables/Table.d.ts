import { ReactNode } from "react";
import { CSS } from "styles/types";
export declare type ItemKey = number | string;
export declare type ItemContainerStyles = string;
export declare type ItemAction = {
    action: () => void;
    label: string;
};
export declare type ItemFilterOptions = {
    fieldName: string;
    label: string;
} & ({
    options: {
        label: string;
        value: string;
    }[];
    type: "multi-select" | "select" | "searchable-select";
} | {
    options?: undefined;
    type: "text";
});
export declare type FilterState = Record<string, string | string[] | undefined>;
export declare type Item = {
    [key: string]: ReactNode;
} & {
    actions?: Array<ItemAction>;
    checkDisabled?: boolean;
    clickDisabled?: boolean;
    containerStyles?: ItemContainerStyles;
    key: ItemKey;
};
export declare type SortConfig = {
    fieldName: string;
    label: string;
};
export declare type ColumnConfig = {
    collapsible: boolean;
    css?: CSS;
    filter?: ItemFilterOptions;
    important: boolean;
    name: string;
    sort?: SortConfig;
    sortableAttribute?: string;
    width?: string;
};
export declare type PaginationData = {
    page: number;
    pageSize: number;
    totalCount: number;
};
export declare type SortDirection = "asc" | "desc" | undefined;
export declare type SortState = Record<string, SortDirection>;
export declare type TableProps = {
    actions?: ReactNode;
    checkable?: boolean;
    checkedItems?: Set<ItemKey>;
    columnConfigs: Array<ColumnConfig>;
    emptyState?: ReactNode;
    filterState?: FilterState;
    helpText?: ReactNode;
    items: Array<Item>;
    maxHeight?: string;
    sortState?: SortState;
    title?: string;
    onColumnSort?: (s: SortState) => void;
    onFiltersChange?: (changes: FilterState) => void;
    onItemChecked?: (key: ItemKey, isChecked: boolean) => void;
    onItemsChecked?: (rows: Set<ItemKey>) => void;
    onItemClick?: (key: ItemKey) => void;
    onItemHoverEnd?: (key: ItemKey) => void;
    onItemHoverStart?: (key: ItemKey) => void;
};
declare type Props = TableProps & {
    className?: string;
    pagination?: PaginationData;
    onPageChange?: (p: number) => void;
};
export declare type FinalizedTableProps = Props;
export declare let Table: ({ actions, className, pagination, onItemsChecked, onPageChange, ...props }: Props) => JSX.Element;
export {};
//# sourceMappingURL=Table.d.ts.map