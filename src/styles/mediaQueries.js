// @flow

import { deviseSizes } from "styles/deviceSizes"
import { css }         from "styled-components"

export const PHONE_SIZE  = 560
export const TABLET_SIZE = 840

export const forPhones = (styles :string) :string => `
    @media screen and (max-width: ${unit(PHONE_SIZE)}) {
        ${styles}
    }
`

export const forTablets = (styles :string) :string => `
    @media screen and (max-width: ${unit(TABLET_SIZE)}) {
        ${styles}
    }
`

export interface MediaQueriesI {
    forPhones :(styles :string) => string,
    forTablets :(styles :string) => string,
    forTabletsAndUp :(styles :string) => string,
    forLargeTabletsAndUp :(styles :string) => string,
    forSmallComputersAndUp :(styles :string) => string,
    forLargeComputers :(styles :string) => string,
}

export const mediaQueries = (wide = false) :MediaQueriesI => {
    const {
              phoneSize,
              tabletSize,
              largeTabletSize,
              smallComputerSize,
          } = deviseSizes(wide)

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
