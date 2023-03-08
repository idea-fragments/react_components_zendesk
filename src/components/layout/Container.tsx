import { FlexBox }     from "components/layout/FlexBox"
import styled, { css } from "styled-components"
import { breakpoints } from "styles/breakpoints/breakpoints"
import {
  mediaQueries,
  unit
}                      from "styles/mediaQueries"

const {
        forLargeComputers,
        forLargeTabletsAndUp,
        forSmallComputersAndUp,
      } = mediaQueries()

const {
        tabletSize,
        largeTabletSize,
        smallComputerSize,
      } = breakpoints({ wideLayout: false })

const deviceSettings = css`
  ${forLargeTabletsAndUp(css`
    width: ${unit(tabletSize + 1)};
  `)}

  ${forSmallComputersAndUp(css`
    width: ${unit(largeTabletSize + 1)};
    min-width: ${unit(tabletSize + 1)};
  `)}

  ${forLargeComputers(css`
    width: ${unit(smallComputerSize + 1)};
  `)}
`

export const Container = styled(FlexBox).attrs({
  withRows: true,
})`
  margin: 0 auto;
  flex: 1;
  width: 100%;
  padding: 0 ${({ theme }) => theme.styles.container.horizontalPadding};

  ${({ fluid }) => fluid ? "" : deviceSettings}
`
