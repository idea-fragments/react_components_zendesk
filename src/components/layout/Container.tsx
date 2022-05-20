import { FlexBlock }          from "components/layout/FlexBlock"
import styled                 from "styled-components"
import { deviseSizes }        from "styles/deviceSizes"
import { mediaQueries, unit } from "styles/mediaQueries"
import { css }                from "styled-components"

const {
          forLargeComputers,
          forLargeTabletsAndUp,
          forSmallComputersAndUp,
      } = mediaQueries()

const {
          tabletSize,
          largeTabletSize,
          smallComputerSize,
      } = deviseSizes()

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

export const Container = styled(FlexBlock).attrs({
    withRows: true,
})`
  margin: 0 auto;
  flex: 1;
  width: 100%;
  padding: 0 ${({ theme }) => theme.styles.container.horizontalPadding};

  ${({ fluid }) => fluid ? "" : deviceSettings}
`
