import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState
}                            from "react"
import { breakpointQueries } from "styles/breakpoints/breakpointQueries"
import {
  DEVICES,
  DeviceSize
}                            from "styles/breakpoints/breakpoints"


export type Measurements = {
  isLargeComputer: boolean,
  isLargeTablet: boolean,
  isLargeTabletOrLarger: boolean,
  isLargeTabletOrSmaller: boolean,
  isPhone: boolean,
  isSmallComputer: boolean,
  isSmallComputerOrLarger: boolean,
  isTablet: boolean,
}

type Listener = (e: MediaQueryListEvent) => void

export const useDeviceSizeWatcher = (): Measurements => {
  const [currentSize, setCurrentSize] = useState<number>()

  const queries = useMemo(() => breakpointQueries({ wideLayout: true }), [])

  const deviceListeners = useRef<Record<DeviceSize, Listener>>({})

  const deviceMediaQueryLists: Record<DeviceSize, MediaQueryList> = useMemo(() => {
    return Object.values(DEVICES).reduce((map, size) => {
      return { ...map, [size]: window.matchMedia(queries[size]) }
    }, {})
  }, [queries])

  const initChangeWatchers = useCallback(() => {
    Object.entries(deviceMediaQueryLists).forEach(([size, mql]) => {
      const listener = (e: MediaQueryListEvent) => {
        if (e.matches) setCurrentSize(Number(size))
      }

      mql.addEventListener("change", listener)
      deviceListeners.current[Number(size)] = listener
    })
  }, [deviceMediaQueryLists])

  const removeChangeWatchers = useCallback(() => {
    Object.entries(deviceMediaQueryLists).forEach(([size, mql]) => {
      mql.removeEventListener("change", deviceListeners.current[Number(size)])
      delete deviceListeners.current[Number(size)]
    })
  }, [deviceMediaQueryLists])

  const setInitialSize = useCallback(() => {
    Object.entries(deviceMediaQueryLists).forEach(([size, mql]) => {
      if (mql.matches) setCurrentSize(Number(size))
    })
  }, [deviceMediaQueryLists])


  useEffect(() => { setInitialSize() }, [setInitialSize])
  useEffect(() => {
    initChangeWatchers()
    return removeChangeWatchers
  }, [initChangeWatchers, removeChangeWatchers])

  return useMemo(() :Measurements => {
    const isPhone                 = currentSize === DEVICES.phone
    const isTablet                = currentSize === DEVICES.tablet
    const isLargeTablet           = currentSize === DEVICES.largeTablet
    const isSmallComputer         = currentSize === DEVICES.smallComputer
    const isLargeComputer         = currentSize === DEVICES.largeComputer
    const isSmallComputerOrLarger = isSmallComputer || isLargeComputer
    const isLargeTabletOrLarger   = isLargeTablet || isSmallComputerOrLarger
    const isLargeTabletOrSmaller  = isLargeTablet || isTablet || isPhone

    return {
      isPhone,
      isTablet,
      isLargeTablet,
      isSmallComputer,
      isLargeComputer,
      isSmallComputerOrLarger,
      isLargeTabletOrLarger,
      isLargeTabletOrSmaller,
    }
  }, [currentSize])
}
