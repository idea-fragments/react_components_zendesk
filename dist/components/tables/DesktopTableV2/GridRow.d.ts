import { ColumnConfig, Item, ItemKey } from "components/tables/Table";
/**
 * Props for the GridRow component
 */
export type GridRowProps = {
    item: Item;
    checkable?: boolean;
    checkedItems?: Set<ItemKey>;
    columnConfigs: Array<ColumnConfig>;
    hasRowActions?: boolean;
    gridTemplateColumns: string;
    getStickyLeft: (index: number) => string;
    getColumnStickyProps: (index: number, isSticky: boolean) => {
        isSticky: boolean;
        stickyLeft: string | undefined;
        showStickyShadow: boolean;
        showStickyBorder: boolean;
    };
    lastLeftStickyIndex: number;
    showStickyShadow?: boolean;
    showStickyBorder?: boolean;
    onItemChecked?: (key: ItemKey, isChecked: boolean) => void;
    onItemClick?: (key: ItemKey) => void;
    onItemHoverStart?: (key: ItemKey) => void;
    onItemHoverEnd?: (key: ItemKey) => void;
};
/**
 * GridRow component renders a single table row using CSS Grid layout.
 * Handles checkbox selection, sticky columns, and row actions.
 *
 * @param props - The GridRow component props
 * @returns A rendered table row
 */
export declare const GridRow: ({ item, checkable, checkedItems, columnConfigs, hasRowActions, gridTemplateColumns, getStickyLeft, getColumnStickyProps, lastLeftStickyIndex, showStickyShadow, showStickyBorder, onItemChecked, onItemClick, onItemHoverStart, onItemHoverEnd, }: GridRowProps) => import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=GridRow.d.ts.map