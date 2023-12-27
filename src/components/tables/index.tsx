import {
  Body as ZBody,
  Cell as ZCell,
  Head as ZHead,
  HeaderCell as ZHeaderCell,
  HeaderRow as ZHeaderRow,
  OverflowButton as ZOverflowButton,
  Row as ZRow,
  Table as ZTable,
} from "@zendeskgarden/react-tables"
import { StickyColumnProps } from "components/tables/utils"
import styled, { css } from "styled-components"
import { fade, light, veryLight } from "styles/colors"
import { CSS, CSSProp } from "styles/types"
import { FONT_SIZES_EM as FONT_SIZES } from "styles/typography"

type OverflowColumnProps = {
  extraWidth?: string
}

const overflowCellStyles = css<OverflowColumnProps>`
  position: sticky;
  right: 0;
  z-index: 5;
  text-align: center;
  width: ${(p) => `calc(5em + ${p.extraWidth ?? "0px"})`};

  ::before {
    position: absolute;
    top: 0;
    left: 0;
    bottom: -2px;
    content: "";
    width: 2px;
    box-shadow: inset 10px 0 8px -8px #00000026;
  }
`

// const sortableColumnHeaderStyles = css`
//   cursor: pointer;
//   :hover, :focus {
//     background: ${veryLight(COLORS.GREY)};
//   }
// `

const Table = styled(ZTable)<CSSProp>`
  && {
    color: inherit;
    border-radius: 6px;
  }

  ${({ _css }) => _css}
`

const Head = styled(ZHead)`
  //text-transform: uppercase;
  background: ${({ theme }) => theme.styles.colors.white};
`

const HeaderRow = styled(ZHeaderRow)`
  border: none !important;
  height: auto !important;
`

const HeaderCell = styled(ZHeaderCell)<
  CSSProp & StickyColumnProps & OverflowColumnProps
>`
  vertical-align: top;
  background: white;
  ${({ hasOverflow }) => (hasOverflow ? overflowCellStyles : "")};
  ${({ _css }) => _css}
`

const Body = styled(ZBody)`
  font-size: ${FONT_SIZES.SM};
`

const Cell = styled(ZCell)<CSSProp & StickyColumnProps>`
  &&&& {
    background: white;
    box-shadow: none;
    ${({ hasOverflow }) => (hasOverflow ? overflowCellStyles : "")};
    ${({ _css }) => _css}
  }
`

const OverflowButton = styled(ZOverflowButton)``

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const clickableRowStyling = css`
  cursor: pointer;

  :hover,
  :focus {
    & > ${Cell}:first-child {
      box-shadow: inset 3px 0 0 0 ${(p) => p.theme.styles.colorPrimary};
    }
  }

  :focus {
    background: ${(p) => fade(p.theme.styles.colorPrimary, 0.8)};
  }
`

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const unclickableRowStyling = css`
  :hover,
  :focus {
    & > ${Cell}:first-child {
      box-shadow: unset;
    }
  }

  :focus {
    background: ${({ theme }) => theme.styles.colors.white};
  }
`

const Row = styled(ZRow)<{ clickable?: boolean; _css?: CSS }>`
  &&&& {
    border-width: 2px;
    border-color: ${({ theme }) => veryLight(theme.styles.colors.grey["500"])};

    :hover {
      background: ${({ theme }) =>
        light(theme.styles.colors.grey["500"], 0.72)};
    }

    ${({ _css }) => _css}
  }
`

Object.assign(Table, {
  Head,
  HeaderRow,
  HeaderCell,
  OverflowButton,
  Body,
  Row,
  Cell,
})

export { Table, Head, HeaderRow, HeaderCell, OverflowButton, Body, Row, Cell }
