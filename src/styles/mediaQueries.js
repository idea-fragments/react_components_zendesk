// @flow

import { deviseSizes }        from "styles/deviceSizes"
import { css, type CSSRules } from "styled-components"

export const PHONE_SIZE  = 560
export const TABLET_SIZE = 840

type Styles = CSSRules

export const forPhones = (styles :Styles) :string => `
    @media screen and (max-width: ${unit(PHONE_SIZE)}) {
        ${styles}
    }
`

export const forTablets = (styles :Styles) :string => `
    @media screen and (max-width: ${unit(TABLET_SIZE)}) {
        ${styles}
    }
`

export type MediaQueriesI = {
    forPhones :(styles :Styles) => string,
    forTablets :(styles :Styles) => string,
    forTabletsAndUp :(styles :Styles) => string,
    forLargeTabletsAndUp :(styles :Styles) => string,
    forSmallComputersAndUp :(styles :Styles) => string,
    forLargeComputers :(styles :Styles) => string,
}

export const mediaQueries = (wideLayout? :boolean) :MediaQueriesI => {
    const {
              phoneSize,
              tabletSize,
              largeTabletSize,
              smallComputerSize,
          } = deviseSizes(wideLayout)

    return {
        forPhones: (styles :string) :string => css`
          @media screen and (max-width: ${unit(phoneSize)}) {
            ${styles}
          }
        `,

        forTablets: (styles :string) :string => css`
          @media screen and (max-width: ${unit(tabletSize)}) {
            ${styles}
          }
        `,

        forTabletsAndUp: (styles :string) :string => css`
          @media screen and (min-width: ${unit(phoneSize + 1)}) {
            ${styles}
          }
        `,

        forLargeTabletsAndUp: (styles :string) :string => css`
          @media (min-width: ${unit(tabletSize + 1)}) {
            ${styles}
          }
        `,

        forSmallComputersAndUp: (styles :string) :string => css`
          @media screen and (min-width: ${unit(largeTabletSize + 1)}) {
            ${styles}
          }
        `,

        forLargeComputers: (styles :string) :string => css`
          @media screen and (min-width: ${unit(smallComputerSize + 1)}) {
            ${styles}
          }
        `,
    }
}

export const rem  = (px :number) :string => `${px / remSize()}rem`
export const unit = (px :number) :string => `${px}px`

export const remSize = (e :?HTMLElement = document.documentElement) => (
    Number(window.getComputedStyle(e, null).fontSize.replace(/[A-z]/g, ""))
)
