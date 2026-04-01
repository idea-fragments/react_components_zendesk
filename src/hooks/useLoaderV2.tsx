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

const LOADING_DELAY_MS = 100

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
        let shown = false
        const timer = setTimeout(() => {
          shown = true
          setLoadingCount((c) => c + 1)
        }, LOADING_DELAY_MS)
        let val

        try {
          val = await p
        } finally {
          clearTimeout(timer)
          if (shown) setLoadingCount((c) => c - 1)
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
