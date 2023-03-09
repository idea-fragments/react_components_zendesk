import { useDeviceSizeWatcher } from "hooks/useDeviceSizeWatcher"
import {
  FC,
  PropsWithChildren,
  useEffect,
  useState
}                               from "react"

export const ComputersOnly: FC<PropsWithChildren> = ({ children }) => {
  const { isSmallComputerOrLarger } = useDeviceSizeWatcher()
  const [isVisible, setIsVisibleTo] = useState(isSmallComputerOrLarger)

  useEffect(() => {
    setIsVisibleTo(isSmallComputerOrLarger)
  }, [isSmallComputerOrLarger])

  return isVisible ? <>{children}</> : null
}
