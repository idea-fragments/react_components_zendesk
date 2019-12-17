// @flow

import { FlexBlock }   from "components/layout/FlexBlock"
import styled          from "styled-components"
import { deviseSizes } from "styles/deviceSizes"
import {
    rem,
    mediaQueries,
}                      from "styles/mediaQueries"

const {
          forLargeComputers,
          forLargeTabletsAndUp,
          forSmallComputersAndUp,
      } = mediaQueries(true)

const {
          tabletSize,
          largeTabletSize,
          smallComputerSize,
      } = deviseSizes(true)

export const Container = styled(FlexBlock).attrs({
    withRows: true,
})`
  margin: 0 auto;
  flex: 1;
  width: 100%;
  padding: 0 1rem;

  ${forLargeTabletsAndUp(`
      width: ${rem(tabletSize - 10)};
  `)}

  ${forSmallComputersAndUp(`
      width: ${rem(largeTabletSize - 10)};
      min-width: ${rem(tabletSize - 10)};
  `)}

  ${forLargeComputers(`
      width: ${rem(smallComputerSize - 10)};
  `)}
`

// $FlowFixMe
Container.COMPONENT_NAME = "Container"
Container.defaultProps   = {}
