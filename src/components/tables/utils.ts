import { ColumnConfig } from "components/tables/Table"
import { css, Interpolation, ThemeProps } from "styled-components"
import { CSS } from "styles/types"
import { isNotEmpty, splitArray } from "utils/arrayHelpers"

export type StickyColumnProps = {
  checkableRow?: boolean
  columnConfigs?: ColumnConfig[]
  index?: number
}
export type SortableColumnProps = {
  sortable?: boolean
}

const calculateStickyPosition = ({
  checkableRow,
  columnConfigs,
  index,
}: Required<StickyColumnProps>): CSS => {
  const configs = [...columnConfigs] as Partial<ColumnConfig>[]
  if (checkableRow) configs.unshift({ important: true, width: "37.6px" })

  const [left] = splitArray(configs, index)
  const widths = left.map((c) => c.width)

  return css`
    left: calc(${widths.join(" + ")});
  `
}

const calculateStickyShadow = ({
  checkableRow,
  columnConfigs,
  index,
}: Required<StickyColumnProps>): CSS => {
  const configs = [...columnConfigs] as Partial<ColumnConfig>[]
  if (checkableRow) configs.unshift({ important: true })

  const [, rest] = splitArray(configs, index)
  if (isNotEmpty(rest)) rest.shift()

  const notLastSticky = rest.some((c) => c.important)
  if (notLastSticky) return ""

  return css`
    ::after {
      position: absolute;
      top: 0;
      right: 0;
      bottom: -2px;
      content: "";
      width: 2px;
      box-shadow: inset 10px 0 8px -8px #00000026;
    }
  `
}

export const columnContainerStyles = (
  c: Partial<ColumnConfig>,
): ReadonlyArray<
  Interpolation<Required<StickyColumnProps> & ThemeProps<any>>
> => {
  return c.important ? stickyStyles : nonStickyStyles
}

export const columnWidth = (size: number): string => `${100 / size}%`

const nonStickyStyles = css`
  position: relative;
`

const stickyStyles = css<Required<StickyColumnProps>>`
  position: sticky;
  left: 0;
  z-index: 1;

  ${calculateStickyShadow};
  ${calculateStickyPosition};
`
