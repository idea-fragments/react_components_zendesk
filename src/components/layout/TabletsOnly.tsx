import { useDeviceSizeWatcher } from "hooks/useDeviceSizeWatcher"
import {
  FC,
  PropsWithChildren
}                               from "react"

export const TabletsOnly: FC<PropsWithChildren> = ({ children }) => {
  const { isTablet, isLargeTablet } = useDeviceSizeWatcher()

  return isTablet || isLargeTablet ? <>{children}</> : null
}
