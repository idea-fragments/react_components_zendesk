/// <reference types="trusted-types" />
import * as react_jsx_runtime from 'react/jsx-runtime';
import { PropsWithChildren, ComponentType, Ref, ReactNode } from 'react';
import { ValueOf } from 'utils/types';
import { FlattenSimpleInterpolation } from 'styled-components';
import { IItemProps } from '@zendeskgarden/react-dropdowns/dist/typings/types';

declare const ALIGNMENTS: {
    readonly start: "flex-start";
    readonly center: "center";
    readonly end: "flex-end";
};
type Alignment = ValueOf<typeof ALIGNMENTS>;

type ColorProps = {
    accent?: boolean;
    color?: string;
    danger?: boolean;
    neutral?: boolean;
    primary?: boolean;
    secondary?: boolean;
    success?: boolean;
    warning?: boolean;
};
type ContainerProps = {
    _css?: CSS;
    color?: string;
    compact?: boolean;
    fluid?: boolean;
    className?: any;
};
type CSS<T = any> = FlattenSimpleInterpolation | string | T;
type CSSProp<T = any> = {
    _css?: CSS<T>;
    className?: string;
};

type PromiseFunc<T = any, Rtn = any> = (...o: T[]) => Promise<Rtn>;

declare const BUTTON_SIZES: {
    readonly SMALL: "small";
    readonly LARGE: "large";
};
type ButtonSize = (typeof BUTTON_SIZES)[keyof typeof BUTTON_SIZES];
type AutoLoadable = {
    autoLoadable: true;
    onClick: PromiseFunc;
};
type ButtonBaseProps = PropsWithChildren<{
    alignItems?: string;
    alignSelf?: Alignment;
    autoLoadable?: boolean;
    disabled?: boolean;
    flat?: boolean;
    groupKey?: string;
    icon?: string | ComponentType;
    iconPosition?: "left" | "right";
    iconSize?: string;
    inline?: boolean;
    innerAs?: string;
    innerRef?: Ref<HTMLButtonElement>;
    loading?: boolean;
    pill?: boolean;
    primary?: boolean;
    size?: ButtonSize;
    wrapInlineText?: boolean;
    onClick: () => void;
}> & CSSProp & ColorProps & ContainerProps;
type ControlledLoadable = {
    loading?: boolean;
    onClick: () => void;
};
type Props$1 = (ButtonBaseProps & ControlledLoadable) | (ButtonBaseProps & AutoLoadable);
type ButtonProps = Props$1;

type ItemProps = Omit<IItemProps, "onClick"> & {
    danger?: boolean;
    disabled?: boolean;
} & CSSProp;

type TableAction = {
    buttonProps?: Partial<ButtonProps>;
    Component?: ComponentType<PropsWithChildren<Record<string, any>>>;
    componentProps?: Record<string, any>;
    label: string;
    notCompactable?: boolean;
    onClick: () => void;
    dropdownItemProps?: Partial<ItemProps>;
};
type ItemKey = number | string;
type ItemContainerStyles = string;
type ItemAction = {
    action: () => void;
    label: string;
};
type ItemFilterOptions = {
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
type FilterState = Record<string, string | string[] | undefined>;
type Item = {
    [key: string]: ReactNode;
} & {
    actions?: Array<ItemAction>;
    checkDisabled?: boolean;
    clickDisabled?: boolean;
    containerStyles?: ItemContainerStyles;
    key: ItemKey;
};
type SortConfig = {
    fieldName: string;
    label: string;
};
type ColumnConfig = {
    collapsible: boolean;
    css?: CSS;
    filter?: ItemFilterOptions;
    important: boolean;
    name: string;
    sort?: SortConfig;
    width?: string;
};
type PaginationData = {
    page: number;
    pageSize: number;
    totalCount: number;
};
type SortDirection = "asc" | "desc" | undefined;
type SortState = Record<string, SortDirection>;
type TableProps = {
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
type FinalizedTableProps = Props;
declare let Table: ({ actions, className, pagination, onItemsChecked, onPageChange, ...props }: Props) => react_jsx_runtime.JSX.Element;

export { ColumnConfig, FilterState, FinalizedTableProps, Item, ItemAction, ItemContainerStyles, ItemFilterOptions, ItemKey, PaginationData, SortConfig, SortDirection, SortState, Table, TableAction, TableProps };
