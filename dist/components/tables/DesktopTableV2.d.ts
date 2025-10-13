import { TableProps } from "components/tables/Table";
/**
 * Extended props for DesktopTableV2 component
 */
type Props = TableProps & {
    hasRowActions: boolean;
    showStickyShadow?: boolean;
    showStickyBorder?: boolean;
    onSelectAllToggle?: (b: boolean) => void;
};
/**
 * DesktopTableV2 is an advanced table component using CSS Grid layout.
 *
 * Features:
 * - CSS Grid-based layout for better column control
 * - Sticky columns (both left and right) with optional shadows and borders
 * - Horizontal scroll synchronization between header and body
 * - Checkbox selection with select-all functionality
 * - Sortable columns
 * - Filterable columns
 * - Row actions via overflow menu
 * - Flexible columns that expand to fill available space
 * - Empty state support
 *
 * @param props - The component props
 * @returns A feature-rich data table component
 */
export declare const DesktopTableV2: {
    ({ actions, checkable, checkedItems, columnConfigs, emptyState, filterState, hasRowActions, helpText, items, maxHeight, showStickyShadow, showStickyBorder, sortState, title, onColumnSort, onFiltersChange, onItemChecked, onItemClick, onItemHoverEnd, onItemHoverStart, onSelectAllToggle, }: Props): import("react/jsx-runtime").JSX.Element;
    COMPONENT_NAME: string;
};
export {};
//# sourceMappingURL=DesktopTableV2.d.ts.map