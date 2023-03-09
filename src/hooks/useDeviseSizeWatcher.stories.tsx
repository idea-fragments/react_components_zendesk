import { Nullable }             from "global"
import { useDeviceSizeWatcher } from "hooks/useDeviceSizeWatcher"
import React                    from "react"

export default {
  title:     "hooks/useDeviceSizeWatcher",
  component: useDeviceSizeWatcher,
  argTypes:  {},
}

const Component = () => {
  const {
          isPhone,
          isTablet,
          isLargeTablet,
          isSmallComputer,
          isLargeComputer,
          isSmallComputerOrLarger,
          isLargeTabletOrLarger,
          isLargeTabletOrSmaller,
        } = useDeviceSizeWatcher()

  const addMessage = (device: boolean, message: string): Nullable<string> => {
    if (!device) return null
    return message
  }

  return <div>
    <div>{addMessage(isPhone, "Viewing Phone Size")}</div>
    <div>{addMessage(isTablet, "Viewing Tablet Size")}</div>
    <div>{addMessage(isLargeTablet, "Viewing Large Tablet Size")}</div>
    <div>{addMessage(isSmallComputer, "Viewing Small Computer Size")}</div>
    <div>{addMessage(isLargeComputer, "Viewing Large Computer Size")}</div>
    <div>{addMessage(isSmallComputerOrLarger, "Viewing Small Computer or Larger Size")}</div>
    <div>{addMessage(isLargeTabletOrLarger, "Viewing Large Tablet or Larger Size")}</div>
    <div>{addMessage(isLargeTabletOrSmaller, "Viewing Large Tablet or Smaller Size")}</div>
  </div>
}

export const Default = Component.bind({})
// @ts-ignore
Default.args         = {}
