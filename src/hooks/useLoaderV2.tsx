import { Loadable }                    from "components/loaders/Loadable"
import React, { FC, useRef, useState } from "react"

type LoadingFunc<T> = (p: Promise<T>) => Promise<T>

type Return<T> = {
  isLoading: boolean,
  Loader: FC<LoaderProps>,
  withLoading: LoadingFunc<T>,
}

export const useLoaderV2 = <T, >(): Return<T> => {
  const withLoading           = useRef<LoadingFunc<T>>()
  const [loading, setLoading] = useState<boolean>(false)

  if (!withLoading.current) {
    withLoading.current = async (p: Promise<T>): Promise<T> => {
      setLoading(true)
      let val

      try {
        val = await p
      } finally {
        setLoading(false)
      }

      return val
    }
  }

  return {
    isLoading:   loading,
    Loader:      createLoader(loading),
    withLoading: withLoading.current,
  }
}

type LoaderProps = { children: JSX.Element }

const createLoader = (isLoading: boolean): FC<LoaderProps> => (
  ({ children }: LoaderProps) => {
    // return <TranslucentLoader isLoading={isLoading}>
    //   {children}
    // </TranslucentLoader>
    //
    return <Loadable showSpinner={isLoading}>{children}</Loadable>
  }
)
