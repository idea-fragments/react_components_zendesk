import { css } from "styled-components"
import { breakpoints } from "styles/breakpoints/breakpoints"
import { CSS } from "styles/types"

export const PHONE_SIZE = 560
export const TABLET_SIZE = 840

export type MediaQuery = (styles: CSS) => CSS

export type MediaQueriesI = {
  forPhones: MediaQuery
  forTablets: MediaQuery
  forTabletsAndUp: MediaQuery
  forLargeTabletsAndUp: MediaQuery
  forSmallComputersAndUp: MediaQuery
  forLargeComputers: MediaQuery
}

export const mediaQueries = (wideLayout?: boolean): MediaQueriesI => {
  const { phoneSize, tabletSize, largeTabletSize, smallComputerSize } =
    breakpoints({ wideLayout })

  return {
    forPhones: (styles: CSS): CSS => css`
      @media screen and (max-width: ${unit(phoneSize)}) {
        ${styles}
      }
    `,

    forTablets: (styles: CSS): CSS => css`
      @media screen and (max-width: ${unit(tabletSize)}) {
        ${styles}
      }
    `,

    forTabletsAndUp: (styles: CSS): CSS => css`
      @media screen and (min-width: ${unit(phoneSize + 1)}) {
        ${styles}
      }
    `,

    forLargeTabletsAndUp: (styles: CSS): CSS => css`
      @media (min-width: ${unit(tabletSize + 1)}) {
        ${styles}
      }
    `,

    forSmallComputersAndUp: (styles: CSS): CSS => css`
      @media screen and (min-width: ${unit(largeTabletSize + 1)}) {
        ${styles}
      }
    `,

    forLargeComputers: (styles: CSS): CSS => css`
      @media screen and (min-width: ${unit(smallComputerSize + 1)}) {
        ${styles}
      }
    `,
  }
}

export const rem = (px: number): string => `${px / remSize()}rem`
export const unit = (px: number): string => `${px}px`

export const remSize = (e: HTMLElement = document.documentElement) =>
  Number(window.getComputedStyle(e, null).fontSize.replace(/[A-Za-z]/g, ""))
