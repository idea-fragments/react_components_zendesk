import { Button }      from "components/forms/Button"
import { FlexBox }     from "components/layout/FlexBox"
import { TableFilter } from "components/tables/blocks/TableFilter"
import {
  FilterState,
  ItemFilterOptions,
  TableProps
}                      from "components/tables/Table"
import React, {
  FC,
  useCallback,
  useMemo,
  useState
}                      from "react"
import { css }         from "styled-components"
import { SPACINGS }    from "styles/spacings"
import { isEmpty }     from "utils/arrayHelpers"

export type TableFiltersProps =
  { fluidButton?: boolean }
  & Required<Pick<TableProps, "columnConfigs" | "filterState" | "onFiltersChange">>


export const TableFilters: FC<TableFiltersProps> = ({
                                                      columnConfigs,
                                                      filterState,
                                                      onFiltersChange
                                                    }) => {
  const [state, setState] = useState<FilterState>(filterState ?? {})

  const filters = useMemo(() => {
    return columnConfigs.filter((c) => c.filter).map((c) => c.filter!)
  }, [columnConfigs])

  const applyFilters = useCallback(() => {
    onFiltersChange(state)
  }, [onFiltersChange, state])

  const clearFilters = useCallback(() => {
    onFiltersChange({})
    setState({})
  }, [onFiltersChange])

  const trackChanges = useCallback((fieldName: string, value: string) => {
    setState((prev) => ({ ...prev, [fieldName]: value }))
  }, [])

  if (isEmpty(filters)) return null

  return <FlexBox _css={css`/*padding: ${SPACINGS.SM}; width: 300px;*/ max-width: 100%; max-height: 100%;`}
                  key={"table_filters_menu"}
                  withRows>
    <FlexBox withRows>
      {filters.map((f: ItemFilterOptions) => (
        // @ts-ignore
        <TableFilter key={f.fieldName}
                     fieldName={f.fieldName}
                     label={f.label}
                     onChange={trackChanges}
                     options={f.options}
                     type={f.type}
                     value={state[f.fieldName]} />
      ))}
    </FlexBox>

    <FlexBox _css={css`margin: ${SPACINGS.SM} 0;`} justifyContent={"flex-end"}>
      <Button danger flat onClick={clearFilters}>Clear All</Button>
      <Button onClick={applyFilters}>Apply</Button>
    </FlexBox>
  </FlexBox>
}
