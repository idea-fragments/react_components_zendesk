import { FormFieldProps } from "components/forms/formField.types"
import { MenuPlacement } from "components/forms/selectors/Dropdown"
import { ItemProps } from "components/forms/selectors/Dropdown/Item"
import { StateChangeOptions } from "downshift"
import { ComponentType, PropsWithChildren } from "react"

export type SelectorItemKey = string | number | null | undefined
export type SelectorOptionOptionalAttrs = {
  Component?: ComponentType<PropsWithChildren<Record<string, any>>>
  componentProps?: Record<string, any>
  isClearingItem?: boolean
  isNextItem?: boolean
  isBackItem?: boolean
  isAddItem?: boolean
  isHeaderItem?: boolean
  itemProps?: Partial<ItemProps>
}
export type SelectorOption = {
  [key: string]: any
} & SelectorOptionOptionalAttrs
export type OnItemSelectedFunc =
  | ((k: SelectorItemKey) => void)
  | ((o: SelectorOption | null | undefined) => void)
export type OnItemsSelectedFunc =
  | ((ks: SelectorItemKey[]) => void)
  | ((o: SelectorOption[] | null | undefined) => void)
export type StateChange = StateChangeOptions<SelectorOption>

type Common = FormFieldProps & {
  appendMenuToNode?: HTMLElement
  clearable?: boolean
  options: Array<SelectorOption>
  optionsKeyMap?: { [key: string]: SelectorOption }
  keyField: string
  labelField: string
  valueField?: string
  maxMenuHeight?: string
  menuPopperModifiers?: Record<string, any>[] | undefined // See popper.js docs v2
  placement?: MenuPlacement
  onStateChange?: (s: StateChange) => void
  invalidOnNoSelection?: boolean
  flat?: boolean
  open?: boolean
  small?: boolean
}

export type SelectorProps = {
  selectedKey?: SelectorItemKey
  onChange?: OnItemSelectedFunc
} & Common

export type MultiSelectorProps = {
  selectedKeys?: SelectorItemKey[]
  onChange?: OnItemsSelectedFunc
} & Common
