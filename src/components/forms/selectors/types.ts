import { FormFieldProps } from "components/forms/formField.types"
import { StateChangeOptions }  from "downshift"

export type SelectorItemKey = string | number | null | undefined
export type SelectorOptionOptionalAttrs = {
  isClearingItem?: boolean,
  isNextItem?: boolean,
  isBackItem?: boolean,
  isAddItem?: boolean,
  isHeaderItem?: boolean,
}
export type SelectorOption =
  { [key: string]: any }
  & SelectorOptionOptionalAttrs
export type OnMultiSelectItemRemoveFunc<T = SelectorItemKey> = (k: T) => void
export type OnItemSelectedFunc =
  ((k: SelectorItemKey) => void)
  | ((o: SelectorOption | null | undefined) => void)
export type StateChange = StateChangeOptions<SelectorOption>

type Common = FormFieldProps & {
  clearable?: boolean,
  options: Array<SelectorOption>,
  optionsKeyMap?: { [key: string]: SelectorOption },
  keyField: string,
  labelField: string,
  valueField?: string,
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
