import {
  breakpoints,
  DEVICES,
  DeviceSize,
  unit,
} from "styles/breakpoints/breakpoints"

type Params = { wideLayout?: boolean }

export const breakpointQueries = ({
  wideLayout,
}: Params): Record<DeviceSize, string> => {
  const { phoneSize, tabletSize, largeTabletSize, smallComputerSize } =
    breakpoints({ wideLayout })
  const { phone, tablet, largeTablet, smallComputer, largeComputer } = DEVICES

  return {
    [phone]: `(max-width: ${unit(phoneSize)})`,
    [tablet]: `(min-width: ${unit(phoneSize + 1)}) and (max-width: ${unit(
      tabletSize,
    )})`,
    [largeTablet]: `(min-width: ${unit(tabletSize + 1)}) and (max-width: ${unit(
      largeTabletSize,
    )})`,
    [smallComputer]: `(min-width: ${unit(
      largeTabletSize + 1,
    )}) and (max-width: ${unit(smallComputerSize)})`,
    [largeComputer]: `(min-width: ${unit(smallComputerSize + 1)})`,
  }
}
