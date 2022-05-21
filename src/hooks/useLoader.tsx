import { Loadable }               from "components/loaders/Loadable"
import { observable }             from "mobx"
import { actionAsync, task }      from "mobx-utils"
import { Observer }               from "mobx-react"
import React, { useRef }          from "react"
import { ComponentType }     from "react"
import { returnAfterMinimum }     from "utils/dateTimeHelpers"
import { PromiseFunc }       from "utils/function.types"
import { newIdGenerator, nextId } from "utils/idGenerator"
import { Logger }                 from "utils/logging/Logger"

const gen = newIdGenerator()

const visibleLoaderIds = observable(new Set<number>())
const logger           = new Logger("useLoader")

type LoadingFunc<T> = (f: PromiseFunc<any, T>) => PromiseFunc<any, T>

type Return<T> = {
    withLoading :LoadingFunc<T>,
    Loader :ComponentType<any>,
}

export const useLoader = <T, >() :Return<T> => {
    logger.writeInfo("Called")
    const Loader      = useRef<ComponentType<any>>()
    const withLoading = useRef<LoadingFunc<T>>()

    if (!Loader.current || !withLoading.current) {
        const id = nextId(gen)
        logger.writeInfo("Creating new loader id:", id)
        Loader.current = ({ cssStyles, showSpinner, ...props }) => {
            return <Observer>{() => {
                logger.writeInfo(
                    "Rendering Loader id:",
                    id,
                    "showSpinner",
                    showSpinner,
                    "visibleLoaderIds.has(id)",
                    visibleLoaderIds.has(id),
                )
                return <Loadable debugId={id}
                                 showSpinner={showSpinner != null
                                              ? showSpinner
                                              : visibleLoaderIds.has(id)}
                                 {...props}
                                 css={cssStyles}
                />
            }
            }</Observer>
        }

        withLoading.current = (f :PromiseFunc<any, T>) :PromiseFunc<any, T> => {
            return (
                actionAsync(async (...args) :Promise<T> => {
                    visibleLoaderIds.add(id)
                    let val
                    try {
                        val = await task(returnAfterMinimum(500, f, ...args))
                    } finally {
                        visibleLoaderIds.delete(id)
                    }
                    return val
                })
            )
        }
    }

    return {
        withLoading: withLoading.current,
        Loader     : Loader.current,
    }
}
