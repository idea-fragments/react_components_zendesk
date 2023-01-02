import {
  mdiClose,
  mdiFilterVariant
}                                      from "@mdi/js"
import { Button }                      from "components/forms/Button"
import { IconButton }                  from "components/forms/IconButton"
import { Dropdown }                    from "components/forms/selectors/Dropdown"
import { StateChange }                 from "components/forms/selectors/types"
import { FlexBox }                     from "components/layout/FlexBox"
import { TableFilter }                 from "components/tables/blocks/TableFilter"
import {
  FilterState,
  ItemFilterOptions,
  TableProps
}                                      from "components/tables/Table"
import Downshift, { StateChangeTypes } from "downshift"
import React, {
  FC,
  useCallback,
  useMemo,
  useState
}                                      from "react"
import { css }                         from "styled-components"
import { SPACINGS }                    from "styles/spacings"
import { useTheme }                    from "styles/theme/useTheme"
import { isEmpty }                     from "utils/arrayHelpers"
import { DO_NOTHING }                  from "utils/functionHelpers"

export type FiltersProps = Required<Pick<TableProps, "columnConfigs" | "filterState" | "onFiltersChange">>

const IGNORABLE_STATE_CHANGES: StateChangeTypes[] = [
  Downshift.stateChangeTypes.blurInput,
  Downshift.stateChangeTypes.blurButton,
  Downshift.stateChangeTypes.mouseUp,
]

export const Filters: FC<FiltersProps> = ({
                                            columnConfigs,
                                            filterState,
                                            onFiltersChange
                                          }) => {
  const theme                             = useTheme()
  const [state, setState]                 = useState<FilterState>(filterState ?? {})
  const [dropdownState, setDropdownState] = useState({ isOpen: false })

  const filters = useMemo(() => {
    return columnConfigs.filter((c) => c.filter).map((c) => c.filter!)
  }, [columnConfigs])

  const closeMenu = useCallback(() => { setDropdownState({ isOpen: false }) }, [])

  const applyFilters = useCallback(() => {
    onFiltersChange(state)
    closeMenu()
  }, [closeMenu, onFiltersChange, state])

  const clearFilters = useCallback(() => {
    onFiltersChange({})
    setState({})
    closeMenu()
  }, [closeMenu, onFiltersChange])

  const processDropdownStateChange = ({ isOpen, type }: StateChange) => {
    if (isOpen == null || IGNORABLE_STATE_CHANGES.includes(type)) return
    setDropdownState({ isOpen })
  }

  const trackChanges = useCallback((fieldName: string, value: string) => {
    setState((prev) => ({ ...prev, [fieldName]: value }))
  }, [])

  if (isEmpty(filters)) return null

  return (
    <FlexBox>
      <Dropdown
        appendMenuToNode={document.body}
        isOpen={dropdownState.isOpen}
        menuCSS={css`&& { font-size: ${({ theme }) => theme.styles.font.size}; }`}
        onStateChange={processDropdownStateChange}
        options={[
          <FlexBox as={"li"}
                   _css={css`padding: ${SPACINGS.SM}; width: 300px; max-width: 100%; max-height: 100%;`}
                   key={"table_filters_menu"}
                   withRows>
            <IconButton _css={css`align-self: flex-end; padding: .5rem; margin-bottom: -2rem;`}
                        color={theme.styles.textColorPrimary}
                        compact
                        icon={mdiClose}
                        onClick={closeMenu} />
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
            <FlexBox _css={css`margin-top: ${SPACINGS.SM};`} withRows>
              <Button fluid onClick={applyFilters}>Apply</Button>
              <Button fluid
                      danger
                      onClick={clearFilters}
                      primary={false}>
                Clear All
              </Button>
            </FlexBox>
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
