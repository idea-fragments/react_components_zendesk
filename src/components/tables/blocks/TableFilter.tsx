import { MultiSelector }      from "components/forms/selectors/MultiSelector"
import { SearchableSelector } from "components/forms/selectors/SearchableSelector"
import { Selector }           from "components/forms/selectors/Selector"
import { SelectorProps }      from "components/forms/selectors/types"
import { TextField }          from "components/forms/textfields/TextField"
import {
  FilterState,
  ItemFilterOptions
}                             from "components/tables/Table"
import React, {
  FC,
  useCallback,
  useMemo
}                             from "react"
import { Logger }             from "utils/logging/Logger"
import { ValueOf }            from "utils/types"

const logger = new Logger("TableFilter")

type Props = ItemFilterOptions & {
  onChange: (name: string, value: any) => void,
  value: ValueOf<FilterState>,
}

export const TableFilter = ({
                              name,
                              onChange,
                              options,
                              type,
                              value,
                            }: Props) => {
  logger.writeInfo("render", name, value)

  const sendChanges = useCallback((v: string) => {
    onChange(name, v)
  }, [name, onChange])

  // @ts-ignore
  const SelectorComponent: FC<SelectorProps> | undefined = useMemo(() => {
    if (type === "multi-select") return MultiSelector
    if (type === "select") return Selector
    if (type === "searchable-select") return SearchableSelector
    return undefined
  }, [type])

  const selectorEmptyState = () => {
    if (type === "multi-select") return "Select one or more"
    if (type === "searchable-select") return "Type to search"
    if (type === "select") return "Select one"
    return ""
  }

  if (SelectorComponent) {
    return <SelectorComponent appendMenuToNode={document.body}
                              clearable
                              emptyState={selectorEmptyState()}
                              keyField={"value"}
                              label={name}
                              labelField={"label"}
                              maxMenuHeight={"200px"}
                              menuPopperModifiers={[{ name: "flip", enabled: true }]}
      // @ts-ignore
                              onChange={sendChanges}
                              options={options!}
                              placement={"bottom"}
                              {
                                ...(type === "multi-select"
                                    ? { selectedKeys: value as string[] ?? [], maxItems: 2 }
                                    : { selectedKey: value as string })
                              }
                              small
    />
  }

  return <TextField label={name}
                    emptyState={name}
                    onChange={sendChanges}
                    small
                    useNewOnChange
                    value={value as string ?? ""}
  />
}
