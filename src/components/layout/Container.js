// @flow

import { FlexBlock }          from "components/layout/FlexBlock"
import styled                 from "styled-components"
import { deviseSizes }        from "styles/deviceSizes"
import { mediaQueries, unit } from "styles/mediaQueries"
import {css} from "styled-components"

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
  ${forLargeTabletsAndUp(`
      width: ${unit(tabletSize + 1)};
  `)}

  ${forSmallComputersAndUp(`
      width: ${unit(largeTabletSize + 1)};
      min-width: ${unit(tabletSize + 1)};
  `)}

  ${forLargeComputers(`
      width: ${unit(smallComputerSize + 1)};
  `)}
`
export const Container = styled(FlexBlock).attrs({
    withRows: true,
})`
  margin: 0 auto;
  flex: 1;
  width: 100%;
  padding: 0 1rem;

  ${({fluid}) => fluid ? "" : deviceSettings}
`

// $FlowFixMe
Container.COMPONENT_NAME = "Container"
Container.defaultProps   = {}
