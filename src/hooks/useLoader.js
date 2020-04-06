// @flow

import { Loadable }               from "components/loaders/Loadable"
import { observable }             from "mobx"
import { actionAsync, task }      from "mobx-utils"
import { Observer }               from "mobx-react"
import React, { useRef }          from "react"
import { returnAfterMinimum }     from "utils/dateTimeHelpers"
import type { PromiseFunc }       from "utils/function.types"
import { newIdGenerator, nextId } from "utils/idGenerator"

const gen = newIdGenerator()

const visibleLoaderIds = observable(new Set<number>())

export const useLoader = () => {
    const Loader      = useRef(null)
    const withLoading = useRef(null)

    if (!Loader.current || !withLoading.current) {
        const id = nextId(gen)

        Loader.current = ({ cssStyles, ...props }) => {
            return <Observer>{() =>
                <Loadable showSpinner={visibleLoaderIds.has(id)}
                          {...props}
                          css={cssStyles}
                />
            }</Observer>
        }

        withLoading.current = <T>(f :PromiseFunc<*, T>) :PromiseFunc<*, T> => (
            actionAsync(async () :Promise<T> => {
                visibleLoaderIds.add(id)
                let val
                try {
                    val = await task(returnAfterMinimum(500, f))
                } finally {
                    visibleLoaderIds.delete(id)
                }
                return val
            })
        )
    }

    return {
        withLoading: withLoading.current,
        Loader     : Loader.current,
    }
}
