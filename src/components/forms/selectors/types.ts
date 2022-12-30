import { FormFieldProps }     from "components/forms/formField.types"
import { MenuPlacement }      from "components/forms/selectors/Dropdown"
import { StateChangeOptions } from "downshift"
import { Modifiers }          from "popper.js"

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
  appendMenuToNode?: HTMLElement,
  clearable?: boolean,
  options: Array<SelectorOption>,
  optionsKeyMap?: { [key: string]: SelectorOption },
  keyField: string,
  labelField: string,
  valueField?: string,
  maxMenuHeight?: string,
  menuPopperModifiers?: Record<string, any>[] | undefined, // See popper.js docs v2
  placement?: MenuPlacement,
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
