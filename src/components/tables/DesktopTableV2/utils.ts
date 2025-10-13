import { ColumnConfig } from "components/tables/Table"

/**
 * Extracts and calculates the width for a table column.
 * Supports explicit width property, css property extraction, and flexible columns.
 *
 * For flexible columns, uses CSS Grid minmax() to allow expansion while respecting minimum width.
 *
 * @param c - The column configuration object
 * @returns A CSS Grid width value (e.g., "150px", "minmax(150px, 1fr)", "1fr")
 */
export const getColumnWidth = (c: ColumnConfig): string => {
  let baseWidth = c.width

  if (!baseWidth && c.css) {
    let cssString = ""

    if (Array.isArray(c.css)) {
      cssString = c.css.join("")
    } else if (typeof c.css === "string") {
      cssString = c.css
    } else if (typeof c.css === "object" && c.css !== null) {
      cssString = c.css.toString()
    }

    const widthMatch = cssString.match(/width:\s*([^;]+)/)
    if (widthMatch) baseWidth = widthMatch[1].trim()
  }

  if (c.flexible && baseWidth) {
    return `minmax(${baseWidth}, 1fr)`
  }

  return baseWidth || "1fr"
}
