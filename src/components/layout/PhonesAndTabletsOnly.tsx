import { useDeviceSizeWatcher } from "hooks/useDeviceSizeWatcher"
import { FC, PropsWithChildren } from "react"

export const PhonesAndTabletsOnly: FC<PropsWithChildren> = ({ children }) => {
  const { isPhone, isTablet, isLargeTablet } = useDeviceSizeWatcher()

  return isPhone || isTablet || isLargeTablet ? <>{children}</> : null
}
