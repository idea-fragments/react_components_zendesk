import { FC, PropsWithChildren, useEffect, useState } from "react"
import { DeviceSize, deviceSizeWatcher }              from "styles/DeviceSizeWatcher"

export const ComputersOnly: FC<PropsWithChildren> = ({ children }) => {
  const [isVisible, setIsVisibleTo] = useState(
    deviceSizeWatcher.isSmallComputerAndUp()
  )

  useEffect(() => {
    deviceSizeWatcher.subscribe((_: DeviceSize) => {
      setIsVisibleTo(deviceSizeWatcher.isSmallComputerAndUp())
    })
  }, [])

  return isVisible ? <>{children}</> : null
}
