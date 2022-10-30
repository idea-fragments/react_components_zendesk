import {
  Table as ZTable,
  Head as ZHead,
  HeaderRow as ZHeaderRow,
  HeaderCell as ZHeaderCell,
  Body as ZBody,
  Cell as ZCell,
  Row as ZRow,
  OverflowButton as ZOverflowButton,
  /* @ts-ignore */
}                                      from "@zendeskgarden/react-tables"
import styled, {
  css,
  FlattenSimpleInterpolation
}                                      from "styled-components"
import {
  COLORS,
  fade,
  light,
  veryLight
}                                      from "styles/colors"
import {
  CSS,
  CSSProp
}                                      from "styles/types"
import { FONT_SIZES_EM as FONT_SIZES } from "styles/typography"

const OVERFLOW_CELL_WIDTH = "3.5em"

const Table = styled(ZTable)`
  && {
    color: inherit;
    border-radius: 6px;
    overflow: hidden;
    border: 2px solid ${veryLight(COLORS.GREY)};
  }
`

const Head = styled(ZHead)`
  //text-transform: uppercase;
  background: ${veryLight(COLORS.GREY)};
`

const HeaderRow = styled(ZHeaderRow)`
  font-size: ${FONT_SIZES.XS};
  border: none !important;
  height: auto !important;
`

const HeaderCell = styled(ZHeaderCell)<{ _css?: CSS }>`
  vertical-align: top;
  ${({ hasOverflow }) => hasOverflow ? `width: ${OVERFLOW_CELL_WIDTH}` : ""};
  ${({ _css }) => _css}
`

const Body = styled(ZBody)`
  font-size: ${FONT_SIZES.SM};
`

const Cell = styled(ZCell)<CSSProp>`
  &&&& {
    box-shadow: none;
    ${({ hasOverflow }) => hasOverflow ? `width: ${OVERFLOW_CELL_WIDTH}` : ""};
    ${({ _css }) => _css}
  }
`

const OverflowButton = styled(ZOverflowButton)`
`

const clickableRowStyling = css`
  cursor: pointer;

  :hover, :focus {
    & > ${Cell}:first-child {
      box-shadow: inset 3px 0 0 0 ${(p) => p.theme.styles.colorPrimary};
    }
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

  :focus {
    background: ${COLORS.WHITE};
  }
`

const Row = styled(ZRow)<{ clickable?: boolean, _css?: CSS }>`
  &&&& {
    border-width: 2px;
    border-color: ${veryLight(COLORS.GREY)};

    :hover {
      background: ${light(COLORS.GREY, .72)};
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

export {
  Table,
  Head,
  HeaderRow,
  HeaderCell,
  OverflowButton,
  Body,
  Row,
  Cell,
}

