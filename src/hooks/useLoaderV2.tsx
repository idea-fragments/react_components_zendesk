import { TranslucentLoader } from "components/loaders/TranslucentLoader"
import React, {
  ComponentType,
  FC,
  PropsWithChildren,
  useMemo,
  useRef,
  useState,
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
  const [loadingCount, setLoadingCount] = useState(0)
  const isLoading = loadingCount > 0
  const loadingRef = useLatest(isLoading)

  const withLoading = useMemo(
    () =>
      async <T,>(p: Promise<T>): Promise<T> => {
        setLoadingCount((c) => c + 1)
        let val

        try {
          val = await p
        } finally {
          setLoadingCount((c) => c - 1)
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
        isLoading={loadingRef.current}
      />
    )
  }, [loadingRef])

  return {
    isLoading,
    Loader,
    withLoading,
  }
}

const useLatest = <T,>(value: T) => {
  const ref = useRef(value)
  ref.current = value
  return ref
}
