import { isNotLastIndex } from "utils/arrayHelpers"
import { PromiseFunc } from "utils/function.types"

type MaybePromiseFunc = PromiseFunc | ((...o: any) => any)

export const DO_NOTHING = function (...args: any) {}

export const flowInOrderAsync = (...funcs: MaybePromiseFunc[]): PromiseFunc => {
  const wrappedFuncs = funcs.map((func, i: number) => {
    return async (promises: PromiseFunc[], ...args: any) => {
      const nextFunc = isNotLastIndex(funcs, i) ? promises[i + 1] : null

      const val = await func(...args)
      return !!nextFunc ? nextFunc(promises, val) : val
    }
  })

  return async (...args) => wrappedFuncs[0](wrappedFuncs, ...args)
}

export const parseNumberAndCall =
  (action: (n: number) => void) => (s: string) => {
    action(Number(s))
  }
