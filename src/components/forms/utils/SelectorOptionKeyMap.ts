import { SelectorOption, SelectorProps } from "components/forms/selectors/types"

export type SelectorOptionKeyMapParams<T> = Pick<
  SelectorProps<T>,
  "keyField" | "options" | "optionsKeyMap"
>

export class SelectorOptionKeyMap {
  static call<T>({
    keyField,
    options,
    optionsKeyMap,
  }: SelectorOptionKeyMapParams<T>) {
    if (optionsKeyMap) return optionsKeyMap

    return options.reduce(
      (
        m: NonNullable<SelectorProps<T>["optionsKeyMap"]>,
        o: SelectorOption<T>,
      ) => {
        const value = o[keyField]
        m[value as string] = o
        return m
      },
      {},
    )
  }
}
