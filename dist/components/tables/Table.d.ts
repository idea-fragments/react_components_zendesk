import { ButtonProps } from "components/forms/Button";
import { ItemProps } from "components/forms/selectors/Dropdown/Item";
import { ComponentType, PropsWithChildren, ReactNode } from "react";
import { CSS } from "styles/types";
export type TableAction = {
    buttonProps?: Partial<ButtonProps>;
    Component?: ComponentType<PropsWithChildren<Record<string, any>>>;
    componentProps?: Record<string, any>;
    label: string;
    notCompactable?: boolean;
    onClick: () => void;
    dropdownItemProps?: Partial<ItemProps>;
};
export type ItemKey = number | string;
export type ItemContainerStyles = string;
export type ItemAction = {
    action: () => void;
    label: string;
};
export type ItemFilterOptions = {
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
export type FilterState = Record<string, string | string[] | undefined>;
export type Item = {
    [key: string]: ReactNode;
} & {
    actions?: Array<ItemAction>;
    checkDisabled?: boolean;
    clickDisabled?: boolean;
    containerStyles?: ItemContainerStyles;
    key: ItemKey;
};
export type SortConfig = {
    fieldName: string;
    label: string;
};
export type ColumnConfig = {
    collapsible: boolean;
    css?: CSS;
    filter?: ItemFilterOptions;
    important: boolean;
    name: string;
    sort?: SortConfig;
    width?: string;
};
export type PaginationData = {
    page: number;
    pageSize: number;
    totalCount: number;
};
export type SortDirection = "asc" | "desc" | undefined;
export type SortState = Record<string, SortDirection>;
export type TableProps = {
    actions?: TableAction[];
    checkable?: boolean;
    checkedItems?: Set<ItemKey>;
    columnConfigs: Array<ColumnConfig>;
    emptyState?: ReactNode;
    filterState?: FilterState;
    helpText?: ReactNode;
    items: Array<Item>;
    mobileListview?: boolean;
    mobileListviewNodes?: ReactNode[];
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
type Props = TableProps & {
    className?: string;
    pagination?: PaginationData;
    onPageChange?: (p: number) => void;
};
export type FinalizedTableProps = Props;
export declare let Table: ({ actions, className, pagination, onItemsChecked, onPageChange, ...props }: Props) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=Table.d.ts.map