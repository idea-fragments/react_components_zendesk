import { flatten as ldFlatten } from "lodash"

type IndexedMap<T> = ({ [key in string | number]: T })
export type Matrix<T> = Array<Array<T>>
export type NullableArray<T = any> = ArrayLike<T> | null | undefined
type ObjectWithProperty<Prop extends string> = { [key in Prop]: any }

export const arrayOfSizeN = (n: number): Array<any> => {
  // return Array.from({length: n})
  const arr: 0[] = []
  for (let i = 0; i < n; i++) {
    arr.push(0)
  }
  return arr
}

export const excludeBlanks = <T = any>(a: T[]): NonNullable<T>[] => (
  a.filter((o: T) => o != null) as NonNullable<T>[]
)

export const flatten = <T>(m: Matrix<T>): Array<T> => ldFlatten(m)

export const indexBy = <FieldName extends string, T extends ObjectWithProperty<FieldName>>(
  a: T[],
  fieldName: FieldName
): IndexedMap<T> => {
  const index: IndexedMap<T> = {}

  a.forEach((item) => {
    const key  = item[fieldName]
    index[key] = item
  })

  return index
}

export const isEmpty        = (a: NullableArray): boolean => (!a?.length)
export const isLastIndex    = (a: any[], i: number) => i === a.length - 1
export const isLastItem     = <E>(a: ArrayLike<E>, item: E): boolean =>
  (lastItem(a) === item)
export const isNotEmpty     = (a: NullableArray): boolean => !isEmpty(a)
export const isNotLastIndex = (a: any[], i: number) => !isLastIndex(a, i)
export const isNotLastItem  = <E>(a: ArrayLike<E>, item: E): boolean =>
  (!isLastItem(a, item))
export const lastItem       = <E>(a: ArrayLike<E>): E => a[a.length - 1]

export const splitArray = (arr: any[], index: number,): any[][] => {
  const preSplit  = [...arr]
  const postSplit = preSplit.splice(index)
  return [preSplit, postSplit]
}

export const takeOutItem = <T>(arr: Array<T>, index: number): Array<T> => {
  const [preSplit, [, ...postSplit]] = splitArray(arr, index)
  return [...preSplit, ...postSplit]
}
