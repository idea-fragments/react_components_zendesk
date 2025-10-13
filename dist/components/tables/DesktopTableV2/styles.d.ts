/// <reference types="react" />
import { CSSProp } from "styles/types";
/**
 * Main wrapper for the table with border and rounded corners
 */
export declare const TableWrapper: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
/**
 * Scrollable container for the header row.
 * Hides scrollbar but maintains scroll functionality for synchronization.
 */
export declare const HeaderScrollContainer: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {
    scrollbarWidth: number;
}, never>;
/**
 * Grid container for header cells
 */
export declare const HeaderContainer: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {
    gridTemplateColumns: string;
}, never>;
/**
 * Shared styles for sticky columns, including borders and shadows
 */
export declare const stickyColumnStyles: import("styled-components").FlattenInterpolation<import("styled-components").ThemedStyledProps<{
    stickyLeft?: string | undefined;
    stickyRight?: string | undefined;
    showStickyShadow?: boolean | undefined;
    showStickyBorder?: boolean | undefined;
}, import("styled-components").DefaultTheme>>;
/**
 * Shared styles for all table cells
 */
export declare const baseCellStyles: import("styled-components").FlattenInterpolation<import("styled-components").ThemedStyledProps<{
    isCheckbox?: boolean | undefined;
    isOverflowCell?: boolean | undefined;
}, import("styled-components").DefaultTheme>>;
/**
 * Individual header cell styled component
 */
export declare const HeaderCell: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {
    important?: boolean | undefined;
    isCheckbox?: boolean | undefined;
    isSticky?: boolean | undefined;
    isOverflowCell?: boolean | undefined;
    stickyLeft?: string | undefined;
    stickyRight?: string | undefined;
    scrollbarWidth?: number | undefined;
    showStickyShadow?: boolean | undefined;
    showStickyBorder?: boolean | undefined;
}, never>;
/**
 * Text component for header cells with emphasis styling
 */
export declare const HeaderText: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, import("styles/typography").CommonTextProps & import("styles/types").ContainerProps & import("styles/types").ColorProps & {
    children: import("react").ReactNode;
} & {
    important: boolean;
}, never>;
/**
 * Scrollable container for table body rows
 */
export declare const BodyScrollContainer: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {
    maxHeight?: string | undefined;
    headerHeight: string;
}, never>;
/**
 * Grid container for a single table row
 */
export declare const RowContainer: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {
    gridTemplateColumns: string;
}, never>;
/**
 * Individual row cell styled component with optional sticky positioning
 */
export declare const RowCell: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, CSSProp<any> & {
    isCheckbox?: boolean | undefined;
    isOverflowCell?: boolean | undefined;
    isSticky?: boolean | undefined;
    stickyLeft?: string | undefined;
    stickyRight?: string | undefined;
    showStickyShadow?: boolean | undefined;
    showStickyBorder?: boolean | undefined;
}, never>;
/**
 * Wrapper for empty state content
 */
export declare const EmptyStateWrapper: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
//# sourceMappingURL=styles.d.ts.map