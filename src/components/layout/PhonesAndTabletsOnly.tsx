import { FC, PropsWithChildren, useEffect, useState } from "react"
import { DeviceSize, deviceSizeWatcher }              from "styles/DeviceSizeWatcher"

export const PhonesAndTabletsOnly: FC<PropsWithChildren> = ({ children }) => {
  const isPhoneOrTablet = () => deviceSizeWatcher.isPhone()
                                || deviceSizeWatcher.isTablet()
                                || deviceSizeWatcher.isLargeTablet()

  const [isVisible, setIsVisibleTo] = useState(isPhoneOrTablet())

  useEffect(() => {
    deviceSizeWatcher.subscribe((_: DeviceSize) => {
      setIsVisibleTo(isPhoneOrTablet())
    })
  }, [])

  return isVisible ? <>{children}</> : null
}
