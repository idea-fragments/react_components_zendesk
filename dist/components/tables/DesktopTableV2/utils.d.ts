import { ColumnConfig } from "components/tables/Table";
/**
 * Extracts and calculates the width for a table column.
 * Supports explicit width property, css property extraction, and flexible columns.
 *
 * For flexible columns, uses CSS Grid minmax() to allow expansion while respecting minimum width.
 *
 * @param c - The column configuration object
 * @returns A CSS Grid width value (e.g., "150px", "minmax(150px, 1fr)", "1fr")
 */
export declare const getColumnWidth: (c: ColumnConfig) => string;
//# sourceMappingURL=utils.d.ts.map