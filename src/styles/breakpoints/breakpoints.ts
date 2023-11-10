export type Breakpoints = {
  phoneSize: number
  tabletSize: number
  largeTabletSize: number
  smallComputerSize: number
}

export type DeviceSize = number

/* Size key name represents all devices with a pixel width up to the number
 specified */
const REGULAR_BREAKPOINTS_PX: Breakpoints = {
  phoneSize: 575,
  tabletSize: 767,
  largeTabletSize: 991,
  smallComputerSize: 1199,
}

const WIDE_BREAKPOINTS_PX: Breakpoints = {
  phoneSize: 560,
  tabletSize: 840,
  largeTabletSize: 991,
  smallComputerSize: 1350,
}

export const DEVICES: Record<string, DeviceSize> = {
  phone: 0,
  tablet: 1,
  largeTablet: 2,
  smallComputer: 3,
  largeComputer: 4,
}

export const breakpoints = ({
  wideLayout = false,
}: {
  wideLayout?: boolean
}): Breakpoints => {
  return wideLayout ? WIDE_BREAKPOINTS_PX : REGULAR_BREAKPOINTS_PX
}

export const unit = (px: number): string => `${px}px`
