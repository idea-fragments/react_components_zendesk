import { Button, BUTTON_SIZES } from "components/forms/Button"
import { Dropdown } from "components/forms/selectors/Dropdown"
import { StateChange } from "components/forms/selectors/types"
import { TableFilters } from "components/tables/blocks/TableFilters"
import { ColumnConfig, FilterState } from "components/tables/Table"
import Downshift from "downshift"
import React, { FC, useCallback, useState } from "react"
import { useTheme } from "styles/theme/useTheme"
import { DO_NOTHING } from "utils/functionHelpers"

type Props = {
  columnConfigs: ColumnConfig[]
  filterState: FilterState
  onFiltersChange: (fs: FilterState) => void
}

export const TableFiltersDropdown: FC<Props> = ({
  columnConfigs,
  filterState,
  onFiltersChange,
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const theme = useTheme()

  const handleFiltersChange = useCallback(
    (fs: FilterState) => {
      onFiltersChange(fs)
      setIsOpen(false)
    },
    [onFiltersChange],
  )

  const handleStateChange = useCallback((changes: StateChange<unknown>) => {
    if (
      changes.isOpen == null ||
      changes.type === Downshift.stateChangeTypes.blurInput ||
      changes.type === Downshift.stateChangeTypes.blurButton
    ) {
      return
    }
    setIsOpen(changes.isOpen)
  }, [])

  return (
    <Dropdown
      isOpen={isOpen}
      menuCSS={`
        max-width: 400px;
        min-width: 300px;
        padding: 1rem;
      `}
      options={[
        <TableFilters
          columnConfigs={columnConfigs}
          filterState={filterState}
          key="filter-menu"
          onFiltersChange={handleFiltersChange}
        />,
      ]}
      placement={"bottom-end"}
      trigger={
        <Button
          icon={theme.styles.table.filterButtonIcon}
          onClick={DO_NOTHING}
          primary={false}
          size={BUTTON_SIZES.SMALL}>
          Filter
        </Button>
      }
      useRawOptions
      onStateChange={handleStateChange}
    />
  )
}
