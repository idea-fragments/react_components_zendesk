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
    flexible?: boolean;
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
export type DesktopTableV2Props = {
    showStickyShadow?: boolean;
    showStickyBorder?: boolean;
};
export type TableProps = {
    actions?: TableAction[];
    checkable?: boolean;
    checkedItems?: Set<ItemKey>;
    columnConfigs: Array<ColumnConfig>;
    desktopTableProps?: DesktopTableV2Props;
    emptyState?: ReactNode;
    filterState?: FilterState;
    helpText?: ReactNode;
    items: Array<Item>;
    maxHeight?: string;
    mobileListview?: boolean;
    mobileListviewNodes?: ReactNode[];
    onColumnSort?: (s: SortState) => void;
    onFiltersChange?: (changes: FilterState) => void;
    onItemChecked?: (key: ItemKey, isChecked: boolean) => void;
    onItemClick?: (key: ItemKey) => void;
    onItemHoverEnd?: (key: ItemKey) => void;
    onItemHoverStart?: (key: ItemKey) => void;
    onItemsChecked?: (rows: Set<ItemKey>) => void;
    sortState?: SortState;
    title?: string;
    useLegacyDesktopTable?: boolean;
    useLegacyMobileTable?: boolean;
};
type Props = TableProps & {
    className?: string;
    pagination?: PaginationData;
    onPageChange?: (p: number) => void;
    onPageSizeChange?: (size: number) => void;
};
export type FinalizedTableProps = Props;
export declare let Table: ({ actions, className, desktopTableProps, onItemsChecked, onPageChange, onPageSizeChange, pagination, useLegacyDesktopTable, useLegacyMobileTable, ...props }: Props) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=Table.d.ts.map