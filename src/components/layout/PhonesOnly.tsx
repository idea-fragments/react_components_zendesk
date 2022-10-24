import { FC, PropsWithChildren, useEffect, useState } from "react"
import { DeviceSize, deviceSizeWatcher }              from "styles/DeviceSizeWatcher"

export const PhonesOnly: FC<PropsWithChildren> = ({ children }) => {
  const [isVisible, setIsVisibleTo] = useState(deviceSizeWatcher.isPhone())

  useEffect(() => {
    deviceSizeWatcher.subscribe((_: DeviceSize) => {
      setIsVisibleTo(deviceSizeWatcher.isPhone())
    })
  }, [])

  return isVisible ? <>{children}</> : null
}
