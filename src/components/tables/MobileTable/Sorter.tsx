import {
  mdiClose,
  mdiSwapVertical
}                                      from "@mdi/js"
import { Button }                      from "components/forms/Button"
import { IconButton }                  from "components/forms/IconButton"
import { Dropdown }                    from "components/forms/selectors/Dropdown"
import { SearchableSelector }          from "components/forms/selectors/SearchableSelector"
import {
  SelectorItemKey,
  StateChange
}                                      from "components/forms/selectors/types"
import { FlexBox }                     from "components/layout/FlexBox"
import {
  ColumnConfig,
  SortDirection,
  SortState
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
import {
  excludeBlanks,
  isEmpty,
  isNotEmpty
}                                      from "utils/arrayHelpers"
import { DO_NOTHING }                  from "utils/functionHelpers"

export type SorterProps = {
  columnConfigs: ColumnConfig[],
  // onColumnSort?: (columnName: string, direction: SortDirection) => void,
  onColumnSort?: (state: SortState) => void,
  sortState?: SortState,
}

const IGNORABLE_STATE_CHANGES: StateChangeTypes[] = [
  Downshift.stateChangeTypes.blurInput,
  Downshift.stateChangeTypes.blurButton,
  Downshift.stateChangeTypes.mouseUp,
  Downshift.stateChangeTypes.touchEnd,
]

export const Sorter: FC<SorterProps> = ({
                                          columnConfigs,
                                          onColumnSort,
                                          sortState = {},
                                        }) => {

  const initialState = useMemo(() => {
    const keys      = Object.keys(sortState)
    const fieldName = isNotEmpty(keys) ? keys[0] : ""
    const direction = sortState[fieldName] ?? ""

    return fieldName && direction ? `${fieldName}::${direction}` : ""
  }, [sortState])

  const [state, setState]                 = useState<SelectorItemKey>(initialState)
  const [dropdownState, setDropdownState] = useState({ isOpen: false })
  const theme                             = useTheme()

  const closeMenu = useCallback(() => { setDropdownState({ isOpen: false }) }, [])

  const applySort = useCallback(() => {
    if (!state) {
      onColumnSort!({})
    } else {
      const [fieldName, direction] = (state as string).split("::")
      onColumnSort!({ [fieldName]: direction as SortDirection })
    }

    closeMenu()
  }, [closeMenu, onColumnSort, state])

  const processDropdownStateChange = ({ isOpen, type }: StateChange) => {
    if (isOpen == null || IGNORABLE_STATE_CHANGES.includes(type)) return
    setDropdownState({ isOpen })
  }

  const sortConfigs = useMemo(
    () => excludeBlanks(columnConfigs.map((c) => c.sort)),
    [columnConfigs]
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

  return <Dropdown
    appendMenuToNode={document.body}
    isOpen={dropdownState.isOpen}
    menuCSS={css`&& { font-size: ${({ theme }) => theme.styles.font.size}; }`}
    onStateChange={processDropdownStateChange}
    options={[
      <FlexBox as={"li"}
               _css={css`padding: ${SPACINGS.SM}; width: 300px; max-width: 100%; max-height: 100%;`}
               key={"table_sort_menu"}
               withRows>
        <IconButton _css={css`align-self: flex-end; padding: .5rem; margin-bottom: -2rem;`}
                    color={theme.styles.textColorPrimary}
                    compact
                    icon={mdiClose}
                    onClick={closeMenu} />

        <SearchableSelector appendMenuToNode={document.body}
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

        <FlexBox _css={css`margin-top: ${SPACINGS.SM};`} withRows>
          <Button fluid onClick={applySort}>Apply</Button>
        </FlexBox>
      </FlexBox>
    ]}
    trigger={
      <Button fluid
              icon={mdiSwapVertical}
              onClick={DO_NOTHING}
              primary={false}>
        Sort By
      </Button>}
    useRawOptions
  />
}
