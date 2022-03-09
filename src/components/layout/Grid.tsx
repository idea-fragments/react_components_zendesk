// @flow

import {
    Grid as ZGrid,
    Row as ZRow,
    Col as ZCol,
}                   from "@zendeskgarden/react-grid"
import styled       from "styled-components"
import { SPACINGS } from "styles/spacings"

export const Grid = styled(ZGrid)`
  && {
    padding: 0;
  }
`

export const Row = ZRow

export const Col = styled(ZCol)`
  && {
    margin-top: ${SPACINGS.XS};
    margin-bottom: ${SPACINGS.XS};
  }
`
