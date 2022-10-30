import { ReactNode } from "react";
import { CSS } from "styles/types";
export declare type ItemKey = number | string;
export declare type ItemContainerStyles = string;
export declare type ItemAction = {
    action: () => void;
    label: string;
};
export declare type ItemFilterOptions = {
    name: string;
} & ({
    options: {
        label: string;
        value: string;
    }[];
    type: "select";
} | {
    options: undefined;
    type: "text";
});
export declare type Item = {
    [key: string]: ReactNode;
} & {
    actions?: Array<ItemAction>;
    checkDisabled?: boolean;
    clickDisabled?: boolean;
    containerStyles?: ItemContainerStyles;
    key: ItemKey;
};
export declare type ColumnConfig = {
    collapsible: boolean;
    css?: CSS;
    filter?: ItemFilterOptions;
    important: boolean;
    name: string;
    width?: string;
};
export declare type PaginationData = {
    page: number;
    pageSize: number;
    totalCount: number;
};
declare type ActionsCreatorParams = {
    checkedItems: Set<ItemKey>;
};
export declare type TableProps = {
    actions?: (p: ActionsCreatorParams) => ReactNode[];
    checkable?: boolean;
    checkedItems?: Set<ItemKey>;
    columnConfigs: Array<ColumnConfig>;
    emptyState?: ReactNode;
    helpText?: ReactNode;
    initialFilterValues?: {
        [key: string]: string;
    };
    items: Array<Item>;
    title?: string;
    onFilterChange?: (name: string, value: any) => void;
    onItemChecked?: (key: ItemKey, isChecked: boolean) => void;
    onItemsChecked?: (rows: Set<ItemKey>) => void;
    onItemClick?: (key: ItemKey) => void;
    onItemHoverEnd?: (key: ItemKey) => void;
    onItemHoverStart?: (key: ItemKey) => void;
};
declare type Props = TableProps & {
    className?: string;
    nice?: boolean;
    pagination?: PaginationData;
    onPageChange?: (p: number) => void;
};
export declare type FinalizedTableProps = Props;
export declare let Table: ({ action, actions, className, nice, pagination, onItemsChecked, onPageChange, ...props }: Props) => JSX.Element;
export {};
//# sourceMappingURL=Table.d.ts.map