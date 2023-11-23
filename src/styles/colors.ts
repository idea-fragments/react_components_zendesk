import Color from "color"

export const COLORS = {
  RED: "#e35b66",
  PALE_PINK: "#cfa0b6",
  PURPLE: "#8f749c",
  MIDNIGHT_PURPLE: "#4f4f64",
  LIGHT_BLUE: "#5293c7",
  BLUE: "#3271A4",
  JAZZ_MAN_BLUE: "#4a5965",
  // JAZZ_MAN_BLUE      : "#2f3941",
  MIDNIGHT_BLUE: "#2a2b30",
  BLUE_GREEN: "#419eb6",
  // TEAL             : "#51a9ab",
  TEAL: "#4dc0b5",
  // GREEN            : "#56ba8b",
  GREEN: "#57ad8b",
  // YELLOW             : "#ffc855",
  YELLOW: "#ffbe6d",
  // YELLOW           : "#f1bc71",
  ORANGE: "#ff9369",
  HUB_SPOT_ORANGE: "rgb(255, 122, 89)",
  MIDNIGHT_BLACK: "#1d1e21",
  BLACK: "#1f1f1f",
  WHITE: "#ffffff",
  GREY_NOT_QUITE_BLUE: "#b0b7bd",
  GREY: "#919292",
  VERY_LIGHT_GREY: "#F7F7F7",
  LIGHT_GREY: "#dddddd",
  TRANSPARENT: "#00000000",
  GREY_200: "#E9EBED"
}
Object.freeze(COLORS)

export const hasGoodContrast = (a: string, b: string) =>
  Color(a).contrast(Color(b)) >= 2.5
export const fade = (c: string, amount: number = 0.5): string => {
  const { r, g, b, alpha } = Color(c).fade(amount).object()
  return `rgba(${r}, ${g}, ${b}, ${alpha})`
}

export const light = (c: string, amount: number = 0.15): string => {
  const newColor = Color(c).lighten(amount).hex()
  // console.log("lightening to:", newColor)
  // console.log("luminosity old:", Color(c).luminosity())
  // console.log("luminosity new:", Color(newColor).luminosity())
  return newColor
}

export const lighter = (c: string): string => light(c, 0.25)
export const lightness = (c: string, amount: number = 95): string =>
  Color(c).lightness(amount).hex()

export const lightnessDelta = (c: string, delta: number): string => {
  const currentColor = Color(c)
  const currentLightness = currentColor.lightness()
  let newLightness = currentLightness + delta
  const isTooBlackOrWhite = newLightness === 0 || newLightness === 100
  if (isTooBlackOrWhite) newLightness = currentLightness + delta / 2

  return currentColor.lightness(newLightness).hex()
}

export const veryLight = (c: string): string => light(c, 0.7)
export const dark = (c: string, amount: number = 0.2): string =>
  Color(c).darken(amount).hex()
export const darker = (c: string): string => dark(c, 0.3)
export const veryDark = (c: string): string => dark(c, 0.4)
export const desaturate = (c: string) => Color(c).desaturate(0.25).hex()
export const saturate = (c: string) => Color(c).saturate(0.25).hex()
