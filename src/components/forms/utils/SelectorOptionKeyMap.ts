import { SelectorOption, SelectorProps } from "components/forms/selectors/types"

export type SelectorOptionKeyMapParams = Pick<
  SelectorProps,
  "keyField" | "options" | "optionsKeyMap"
>

export class SelectorOptionKeyMap {
  static call({
    keyField,
    options,
    optionsKeyMap,
  }: SelectorOptionKeyMapParams) {
    if (optionsKeyMap) return optionsKeyMap

    return options.reduce(
      (m: NonNullable<SelectorProps["optionsKeyMap"]>, o: SelectorOption) => {
        m[o[keyField]] = o
        return m
      },
      {},
    )
  }
}
