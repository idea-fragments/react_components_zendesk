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
export type SelectorOption<T> = T & SelectorOptionOptionalAttrs
export type OnItemSelectedFunc<T = any> =
  | ((k: SelectorItemKey) => void)
  | ((o: SelectorOption<T> | null | undefined) => void)
export type OnItemsSelectedFunc<T> =
  | ((ks: SelectorItemKey[]) => void)
  | ((o: SelectorOption<T>[] | null | undefined) => void)
export type StateChange<T> = StateChangeOptions<SelectorOption<T>>

export type Common<T> = FormFieldProps & {
  appendMenuToNode?: HTMLElement
  clearable?: boolean
  options: SelectorOption<T>[]
  optionsKeyMap?: { [key: string]: SelectorOption<T> }
  keyField: keyof T
  labelField: keyof T
  maxMenuHeight?: string
  menuPopperModifiers?: Record<string, any>[] | undefined // See popper.js docs v2
  placement?: MenuPlacement
  onStateChange?: (s: StateChange<T>) => void
  invalidOnNoSelection?: boolean
  flat?: boolean
  open?: boolean
  small?: boolean
}

export type SelectorProps<T> = {
  selectedKey?: SelectorItemKey
  onChange?: OnItemSelectedFunc<T>
} & Common<T>

export type MultiSelectorProps<T> = {
  maxItems?: number
  onChange?: OnItemsSelectedFunc<T>
  selectedKeys: SelectorItemKey[]
} & Common<T>
