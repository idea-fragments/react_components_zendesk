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
import styled                      from "styled-components"
import { COLORS, fade, veryLight } from "styles/colors"
import { SPACINGS }                from "styles/spacings"

const Table          = styled(ZTable)``
Table.COMPONENT_NAME = "Table"

const Head = styled(ZHead)`
  padding: ${(p) => p.theme.styles.table.borderSize};
  background: ${veryLight(COLORS.GREY)};
`

const HeaderRow = styled(ZHeaderRow)`
  background: ${COLORS.WHITE};
  border: none !important;
  box-shadow: none !important;
  height: auto !important;
`

const HeaderCell = styled(ZHeaderCell)``

const Body = styled(ZBody)`
  padding: ${(p) => { 
      const size = p.theme.styles.table.borderSize
      return `0 ${size} ${size}`
  }};
  background: ${veryLight(COLORS.GREY)};
`

const Cell = styled(ZCell)``

const Row = styled(ZRow)`
  background: ${COLORS.WHITE};
  border: none !important;
  
  &&&& {
    :hover, :focus {
      & > ${Cell}:first-child {
        box-shadow: inset 3px 0 0 0 ${(p) => p.theme.styles.colorPrimary};
      }
    }
    
    :hover {
      background: ${COLORS.WHITE};
    }
    
    :focus {
      background: ${(p) => fade(p.theme.styles.colorPrimary, .8)};
    }
  }
  
  &:not(:last-of-type) {
    margin-bottom: ${(p) => p.theme.styles.table.borderSize};
  }
`



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

