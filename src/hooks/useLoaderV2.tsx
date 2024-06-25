import { TranslucentLoader } from "components/loaders/TranslucentLoader"
import React, {
  FC,
  PropsWithChildren,
  useMemo,
  useState,
  ComponentType,
} from "react"
import { CSSProp } from "styles/types"

type LoadingFunc = <T>(p: Promise<T>) => Promise<T>
type LoaderProps = PropsWithChildren<{ as?: ComponentType }> & CSSProp
type Return = {
  isLoading: boolean
  Loader: FC<LoaderProps>
  withLoading: LoadingFunc
}

export const useLoaderV2 = (): Return => {
  const [loading, setLoading] = useState<boolean>(false)

  const withLoading = useMemo(
    () =>
      async <T,>(p: Promise<T>): Promise<T> => {
        setLoading(true)
        let val

        try {
          val = await p
        } finally {
          setLoading(false)
        }

        return val
      },
    [],
  )

  const Loader = useMemo((): FC<LoaderProps> => {
    return ({ as, ...props }: LoaderProps) => (
      <TranslucentLoader
        {...props}
        innerAs={as}
        isLoading={loading}
      />
    )
  }, [loading])

  return {
    isLoading: loading,
    Loader,
    withLoading,
  }
}
