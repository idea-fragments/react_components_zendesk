import { mdiFilterVariant } from "@mdi/js"
import { Button }           from "components/forms/Button"
import { Dropdown }         from "components/forms/selectors/Dropdown"
import { FlexBox }          from "components/layout/FlexBox"
import { TableFilter }      from "components/tables/blocks/TableFilter"
import {
  FilterState,
  ItemFilterOptions,
  TableProps
}                           from "components/tables/Table"
import React, {
  FC,
  useCallback,
  useMemo,
  useState
}                           from "react"
import { css }              from "styled-components"
import { SPACINGS }         from "styles/spacings"
import { isEmpty }          from "utils/arrayHelpers"
import { DO_NOTHING }       from "utils/functionHelpers"

export type FiltersProps = Required<Pick<TableProps, "columnConfigs" | "filterState" | "onFiltersChange">>

export const Filters: FC<FiltersProps> = ({
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

  const trackChanges = useCallback((name: string, value: string) => {
    console.log("trackChanges", name, value)
    setState((prev) => ({ ...prev, [name]: value }))
  }, [])

  if (isEmpty(filters)) return null

  return (
    <FlexBox>
      <Dropdown
        appendMenuToNode={document.body}
        menuCSS={css`&& { font-size: ${({ theme }) => theme.styles.font.size}; }`}
        options={[
          <FlexBox as={"li"}
                   _css={css`padding: ${SPACINGS.SM}; width: 300px; max-width: 100%; max-height: 100%;`}
                   key={"table_filters_menu"}
                   withRows>
            {filters.map((f: ItemFilterOptions) => (
              // @ts-ignore
              <TableFilter key={f.name}
                           name={f.name}
                           onChange={trackChanges}
                           options={f.options}
                           type={f.type}
                           value={state[f.name]} />
            ))}

            <Button _css={css`margin-top: ${SPACINGS.SM};`}
                    fluid
                    onClick={applyFilters}>
              Apply
            </Button>
          </FlexBox>
        ]}
        trigger={
          <Button icon={mdiFilterVariant}
                  onClick={DO_NOTHING}
                  primary={false}>
            Filter
          </Button>}
        useRawOptions>
      </Dropdown>
    </FlexBox>
  )
}
