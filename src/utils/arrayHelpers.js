// @flow

import { IObservableArray }     from "mobx"
import { flatten as ldFlatten } from "lodash"


export type ArrayLike<T> = Array<T> | IObservableArray<T>
export type Matrix<T> = Array<Array<T>>

export const splitArray = (
    arr :Array<any>,
    index :number,
) :Array<Array<any>> => {
    const preSplit  = [...arr]
    const postSplit = preSplit.splice(index)
    return [preSplit, postSplit]
}

export const takeOutItem = <T>(arr :Array<T>, index :number) :Array<T> => {
    const [preSplit, [, ...postSplit]] = splitArray(arr, index)
    return [...preSplit, ...postSplit]
}

export const isEmpty    = (arr :ArrayLike<*>) :boolean => arr.length <= 0
export const isNotEmpty = (arr :ArrayLike<*>) :boolean => !isEmpty(arr)

export const lastItem      = <E>(a :ArrayLike<E>) :E => a[a.length - 1]
export const isLastItem    = <E>(a :ArrayLike<E>, item :E) :boolean => (
    lastItem(a) === item
)
export const isNotLastItem = <E>(a :ArrayLike<E>, item :E) :boolean => (
    !isLastItem(a, item)
)

export const arrayOfSizeN = (n :number) :Array<0> => {
    const arr :0[] = []
    for (let i = 0; i < n; i++) {
        arr.push(0)
    }
    return arr
}

export const flatten = <T>(m :Matrix<T>) :Array<T> => ldFlatten(m)
