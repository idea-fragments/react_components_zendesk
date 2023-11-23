import { Button } from "components/forms/Button"
import { SearchableSelector } from "components/forms/selectors/SearchableSelector"
import { SelectorItemKey } from "components/forms/selectors/types"
import { FlexBox } from "components/layout/FlexBox"
import { ColumnConfig, SortDirection, SortState } from "components/tables/Table"
import React, { FC, useCallback, useMemo, useState } from "react"
import { css } from "styled-components"
import { SPACINGS } from "styles/spacings"
import { excludeBlanks, isEmpty, isNotEmpty } from "utils/arrayHelpers"

export type SorterProps = {
  columnConfigs: ColumnConfig[]
  onColumnSort?: (state: SortState) => void
  sortState?: SortState
}

export const TableSorter: FC<SorterProps> = ({
  columnConfigs,
  onColumnSort,
  sortState = {},
}) => {
  const initialState = useMemo(() => {
    const keys = Object.keys(sortState)
    const fieldName = isNotEmpty(keys) ? keys[0] : ""
    const direction = sortState[fieldName] ?? ""

    return fieldName && direction ? `${fieldName}::${direction}` : ""
  }, [sortState])

  const [state, setState] = useState<SelectorItemKey>(initialState)

  const applySort = useCallback(() => {
    if (!state) {
      onColumnSort!({})
    } else {
      const [fieldName, direction] = (state as string).split("::")
      onColumnSort!({ [fieldName]: direction as SortDirection })
    }
  }, [onColumnSort, state])

  const sortConfigs = useMemo(
    () => excludeBlanks(columnConfigs.map((c) => c.sort)),
    [columnConfigs],
  )

  const sortOptions = useMemo(() => {
    return sortConfigs.flatMap(({ label, fieldName }) => {
      return [
        { label: `${label} - Ascending`, value: `${fieldName}::asc` },
        { label: `${label} - Descending`, value: `${fieldName}::desc` },
      ]
    })
  }, [sortConfigs])

  if (isEmpty(sortConfigs)) return null

  return (
    <FlexBox
      key={"table_sort_menu"}
      withRows>
      <SearchableSelector
        appendMenuToNode={document.body}
        clearable
        emptyState={"Select attribute and order"}
        keyField={"value"}
        label={"Sort By"}
        labelField={"label"}
        maxMenuHeight={"200px"}
        menuPopperModifiers={[{ name: "flip", enabled: true }]}
        onChange={setState}
        options={sortOptions}
        placement={"bottom"}
        selectedKey={state}
        small
      />

      <FlexBox
        _css={css`
          margin: ${SPACINGS.SM} 0;
        `}
        justifyContent={"flex-end"}>
        <Button onClick={applySort}>Apply</Button>
      </FlexBox>
    </FlexBox>
  )
}
