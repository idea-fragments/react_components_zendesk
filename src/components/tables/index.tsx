import {
  Body as ZBody,
  Cell as ZCell,
  Head as ZHead,
  HeaderCell as ZHeaderCell,
  HeaderRow as ZHeaderRow,
  OverflowButton as ZOverflowButton,
  Row as ZRow,
  Table as ZTable,
}                                      from "@zendeskgarden/react-tables"
import { StickyColumnProps }           from "components/tables/utils"
import styled, { css }                 from "styled-components"
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
import {
  FONT_SIZES_EM as FONT_SIZES,
  FONT_WEIGHTS
} from "styles/typography"


const overflowCellStyles = css`
  position: sticky;
  right: 0;
  z-index: 5;
  text-align: center;
  width: 5em;
  background: white;
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

const Table = styled(ZTable)`
  && {
    color: inherit;
    border-radius: 6px;
  }
`

const Head = styled(ZHead)`
  //text-transform: uppercase;
    // background: ${veryLight(COLORS.GREY)};
  background: ${COLORS.WHITE};
`

const HeaderRow = styled(ZHeaderRow)`
  font-size: ${FONT_SIZES.XS};
  font-weight: ${FONT_WEIGHTS.BOLD};
  border: none !important;
  height: auto !important;
`

const HeaderCell = styled(ZHeaderCell)<CSSProp & StickyColumnProps>`
  vertical-align: top;
    // background: ${veryLight(COLORS.GREY)};
  ${({ hasOverflow }) => hasOverflow ? overflowCellStyles : ""};
  ${({ _css }) => _css}
`

const Body = styled(ZBody)`
  font-size: ${FONT_SIZES.SM};
`

const Cell = styled(ZCell)<CSSProp & StickyColumnProps>`
  &&&& {
    //background: white;
    box-shadow: none;
    ${({ hasOverflow }) => hasOverflow ? overflowCellStyles : ""};
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

