import type { FormFieldProps } from "components/forms/formField.types"

export type SelectorItemKey = string | number | null
export type SelectorOption = { [key: string]: any }
export type OnMultiSelectItemRemoveFunc<T = SelectorItemKey> = (k: T) => void
export type OnItemSelectedFunc =
  ((k: SelectorItemKey) => void)
  | ((o: SelectorOption) => void)
export type StateChange = {
  highlightedIndex?: number,
  isOpen?: boolean,
  selectedItem?: SelectorOption | null,
  type: string,
}

type Common = FormFieldProps & {
  clearable?: boolean,
  options: Array<SelectorOption>,
  optionsKeyMap?: { [key: string]: SelectorOption },
  keyField: string,
  valueField: string,
  onChange?: OnItemSelectedFunc,
  onStateChange?: (s: StateChange) => void,
  invalidOnNoSelection?: boolean,
  flat?: boolean,
  open?: boolean,
  small?: boolean,
}

export type SelectorProps = {
  selectedKey?: SelectorItemKey,
  onChange?: OnItemSelectedFunc,
} & Common

export type MultiSelectorProps = {
  selectedKeys?: SelectorItemKey[],
  onChange?: OnItemSelectedFunc,
} & Common
