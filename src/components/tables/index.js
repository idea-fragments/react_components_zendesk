// @flow

import {
    Table as ZTable,
    Head as ZHead,
    HeaderRow as ZHeaderRow,
    HeaderCell as ZHeaderCell,
    Body as ZBody,
    Cell as ZCell,
    Row as ZRow,
}                            from "@zendeskgarden/react-tables"
import styled                from "styled-components"
import { COLORS, veryLight } from "styles/colors"
import { SPACINGS }          from "styles/spacings"

const Table          = styled(ZTable)``
Table.COMPONENT_NAME = "Table"

const Head = styled(ZHead)`
  padding: ${SPACINGS.SM};
  background: ${veryLight(COLORS.GREY)};
`

const HeaderRow = styled(ZHeaderRow)`
  background: ${COLORS.WHITE};
  border: none !important;
  box-shadow: none !important;
`

const HeaderCell = styled(ZHeaderCell)``

const Body = styled(ZBody)`
  padding: 0 ${SPACINGS.SM} ${SPACINGS.SM};
  background: ${veryLight(COLORS.GREY)};
`

const Row = styled(ZRow)`
  background: ${COLORS.WHITE};
  border: none !important;
  
  :hover {
    box-shadow: inset 3px 0 0 0 #1f73b7;
  }
  
  &:not(:last-of-type) {
    margin-bottom: ${SPACINGS.SM};
  }
`

const Cell = styled(ZCell)``

Object.assign(Table, {
    Head,
    HeaderRow,
    HeaderCell,
    Body,
    Row,
    Cell,
})

export {
    Table,
    Head,
    HeaderRow,
    HeaderCell,
    Body,
    Row,
    Cell,
}

