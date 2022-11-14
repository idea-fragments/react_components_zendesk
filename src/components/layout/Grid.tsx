import {
  Grid as ZGrid,
  Row as ZRow,
  Col as ZCol,
  /* @ts-ignore */
}                   from "@zendeskgarden/react-grid"
import styled       from "styled-components"
import { SPACINGS } from "styles/spacings"
import { CSSProp }  from "styles/types"

export const Grid = styled(ZGrid)`
  && {
    padding: 0;
  }
`

export const Row = styled(ZRow)<CSSProp>`
  ${({ _css }) => _css}
`

export const Col = styled(ZCol)`
  && {
    margin-top: ${SPACINGS.XS};
    margin-bottom: ${SPACINGS.XS};
  }
`
