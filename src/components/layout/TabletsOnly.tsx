import { FC, PropsWithChildren, useEffect, useState } from "react"
import { DeviceSize, deviceSizeWatcher }              from "styles/DeviceSizeWatcher"

export const TabletsOnly: FC<PropsWithChildren> = ({ children }) => {
  const isCorrectSize = () => (
    deviceSizeWatcher.isTablet() || deviceSizeWatcher.isLargeTablet()
  )

  const [isVisible, setIsVisibleTo] = useState(isCorrectSize())

  useEffect(() => {
    deviceSizeWatcher.subscribe((_: DeviceSize) => {
      setIsVisibleTo(isCorrectSize())
    })
  }, [])

  return isVisible ? <>{children}</> : null
}
