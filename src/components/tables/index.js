// @flow

import {
    Table as ZTable,
    Head as ZHead,
    HeaderRow as ZHeaderRow,
    HeaderCell as ZHeaderCell,
    Body as ZBody,
    Cell as ZCell,
    Row as ZRow,
}                                  from "@zendeskgarden/react-tables"
import styled, { css }             from "styled-components"
import { COLORS, fade, veryLight } from "styles/colors"
import { FONT_SIZES_EM as FONT_SIZES }              from "styles/typography"

const Table          = styled(ZTable)``
Table.COMPONENT_NAME = "Table"

const Head = styled(ZHead)`
  font-size: ${FONT_SIZES.SM};
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
  font-size: ${FONT_SIZES.SM};
  padding: ${(p) => {
    const size = p.theme.styles.table.borderSize
    return `0 ${size} ${size}`
  }};
  background: ${veryLight(COLORS.GREY)};
`

const Cell = styled(ZCell)``

const clickableRowStyling = css`
  cursor: pointer;
  
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
`

const unclickableRowStyling = css`
  :hover, :focus {
    & > ${Cell}:first-child {
      box-shadow: unset;
    }
  }
  
  :hover, :focus {
    background: ${COLORS.WHITE};
  }
`

const Row = styled(ZRow)`
  &&&& {
    background: ${COLORS.WHITE} !important;
    border: none !important;

    ${p => p.clickable ? clickableRowStyling : unclickableRowStyling}
    &:not(:last-of-type) {
      margin-bottom: ${(p) => p.theme.styles.table.borderSize};
    }
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

