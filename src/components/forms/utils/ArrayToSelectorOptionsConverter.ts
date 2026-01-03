import {
  SelectorItemKey,
  SelectorOption,
} from "components/forms/selectors/types"

export class ArrayToSelectorOptionsConverter {
  static call(list: SelectorItemKey[]): SelectorOption<{
    label: SelectorItemKey
    key: SelectorItemKey
  }>[] {
    return list.map((o) => ({ label: o, key: o }))
  }
}
