import { TranslucentLoader } from "components/loaders/TranslucentLoader"
import React, {
  FC,
  PropsWithChildren,
  useMemo,
  useState,
  ComponentType
}                            from "react"
import { CSSProp }           from "styled-components"

type LoadingFunc<T> = (p: Promise<T>) => Promise<T>
type LoaderProps = PropsWithChildren<{ as?: ComponentType, _css?: CSSProp, cssStyles?: CSSProp, fluid?: boolean }>
type Return<T> = {
  isLoading: boolean,
  Loader: FC<LoaderProps>,
  withLoading: LoadingFunc<T>,
}

export const useLoaderV2 = <T, >(): Return<T> => {
  const [loading, setLoading] = useState<boolean>(false)

  const withLoading = useMemo(() => (
    async (p: Promise<T>): Promise<T> => {
      setLoading(true)
      let val

      try {
        val = await p
      } finally {
        setLoading(false)
      }

      return val
    }
  ), [])

  const Loader = useMemo((): FC<LoaderProps> => {
    return (({ as, ...props }: LoaderProps) =>
        <TranslucentLoader {...props}
                           innerAs={as}
                           isLoading={loading} />
    )
  }, [loading])

  return {
    isLoading: loading,
    Loader,
    withLoading,
  }
}
