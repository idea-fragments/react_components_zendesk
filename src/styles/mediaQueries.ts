import {
  css,
  FlattenSimpleInterpolation
}                      from "styled-components"
import { breakpoints } from "styles/breakpoints/breakpoints"

export const PHONE_SIZE  = 560
export const TABLET_SIZE = 840

type Styles = FlattenSimpleInterpolation
export type MediaQuery = (styles: Styles) => Styles

export const forPhones = (styles: Styles): string => `
    @media screen and (max-width: ${unit(PHONE_SIZE)}) {
        ${styles}
    }
`

export const forTablets = (styles: Styles): string => `
    @media screen and (max-width: ${unit(TABLET_SIZE)}) {
        ${styles}
    }
`

export type MediaQueriesI = {
  forPhones: MediaQuery,
  forTablets: MediaQuery,
  forTabletsAndUp: MediaQuery,
  forLargeTabletsAndUp: MediaQuery,
  forSmallComputersAndUp: MediaQuery,
  forLargeComputers: MediaQuery,
}

export const mediaQueries = (wideLayout?: boolean): MediaQueriesI => {
  const {
          phoneSize,
          tabletSize,
          largeTabletSize,
          smallComputerSize,
        } = breakpoints({ wideLayout })

  return {
    forPhones: (styles: Styles): Styles => css`
      @media screen and (max-width: ${unit(phoneSize)}) {
        ${styles}
      }
    `,

    forTablets: (styles: Styles): Styles => css`
      @media screen and (max-width: ${unit(tabletSize)}) {
        ${styles}
      }
    `,

    forTabletsAndUp: (styles: Styles): Styles => css`
      @media screen and (min-width: ${unit(phoneSize + 1)}) {
        ${styles}
      }
    `,

    forLargeTabletsAndUp: (styles: Styles): Styles => css`
      @media (min-width: ${unit(tabletSize + 1)}) {
        ${styles}
      }
    `,

    forSmallComputersAndUp: (styles: Styles): Styles => css`
      @media screen and (min-width: ${unit(largeTabletSize + 1)}) {
        ${styles}
      }
    `,

    forLargeComputers: (styles: Styles): Styles => css`
      @media screen and (min-width: ${unit(smallComputerSize + 1)}) {
        ${styles}
      }
    `,
  }
}

export const rem  = (px: number): string => `${px / remSize()}rem`
export const unit = (px: number): string => `${px}px`

export const remSize = (e: HTMLElement = document.documentElement) => (
  Number(window.getComputedStyle(e, null).fontSize.replace(/[A-z]/g, ""))
)
