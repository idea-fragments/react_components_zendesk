import { useDeviceSizeWatcher } from "hooks/useDeviceSizeWatcher"
import {
  FC,
  PropsWithChildren
}                               from "react"

export const PhonesOnly: FC<PropsWithChildren> = ({ children }) => {
  const { isPhone } = useDeviceSizeWatcher()

  return isPhone ? <>{children}</> : null
}
