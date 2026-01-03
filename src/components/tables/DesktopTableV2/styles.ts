import { Text } from "components/text/Text"
import styled, { css } from "styled-components"
import { CSSProp } from "styles/types"
import { FONT_SIZES, FONT_WEIGHTS } from "styles/typography"
import {
  ACTIONS_WIDTH,
  CELL_PADDING,
  STICKY_SHADOW_WIDTH,
} from "components/tables/DesktopTableV2/constants"

/**
 * Main wrapper for the table with border and rounded corners
 */
export const TableWrapper = styled.div`
  border: 1px solid ${({ theme }) => theme.styles.table.borderColor};
  border-radius: 1rem;
  overflow: hidden;
`

/**
 * Scrollable container for the header row.
 * Hides scrollbar but maintains scroll functionality for synchronization.
 */
export const HeaderScrollContainer = styled.div<{ scrollbarWidth: number }>`
  overflow-x: auto;
  overflow-y: hidden;
  background: ${({ theme }) => theme.styles.colors.white};

  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }
`

/**
 * Grid container for header cells
 */
export const HeaderContainer = styled.div<{ gridTemplateColumns: string }>`
  display: grid;
  grid-template-columns: ${({ gridTemplateColumns }) => gridTemplateColumns};
  width: fit-content;
  min-width: 100%;
`

/**
 * Shared styles for sticky columns, including borders and shadows
 */
export const stickyColumnStyles = css<{
  stickyLeft?: string
  stickyRight?: string
  showStickyShadow?: boolean
  showStickyBorder?: boolean
}>`
  position: sticky;
  ${({ stickyLeft }) => stickyLeft && `left: ${stickyLeft};`}
  ${({ stickyRight }) => stickyRight && `right: ${stickyRight};`}
  z-index: 2;
  background: white;

  ${({ showStickyBorder, stickyLeft, theme }) =>
    showStickyBorder &&
    stickyLeft &&
    css`
      border-right: 2px solid ${theme.styles.table.borderColor};
    `}

  ${({ showStickyBorder, stickyRight, theme }) =>
    showStickyBorder &&
    stickyRight &&
    css`
      border-left: 2px solid ${theme.styles.table.borderColor};
    `}

  ${({ showStickyShadow, stickyLeft }) =>
    showStickyShadow &&
    stickyLeft &&
    css`
      &::after {
        content: "";
        position: absolute;
        top: 0;
        right: -${STICKY_SHADOW_WIDTH};
        bottom: 0;
        width: ${STICKY_SHADOW_WIDTH};
        background: linear-gradient(
          to right,
          rgba(0, 0, 0, 0.1),
          rgba(0, 0, 0, 0)
        );
        pointer-events: none;
      }
    `}

  ${({ showStickyShadow, stickyRight }) =>
    showStickyShadow &&
    stickyRight &&
    css`
      &::before {
        content: "";
        position: absolute;
        top: 0;
        left: -${STICKY_SHADOW_WIDTH};
        bottom: 0;
        width: ${STICKY_SHADOW_WIDTH};
        background: linear-gradient(
          to left,
          rgba(0, 0, 0, 0.1),
          rgba(0, 0, 0, 0)
        );
        pointer-events: none;
      }
    `}
`

/**
 * Shared styles for all table cells
 */
export const baseCellStyles = css<{
  isCheckbox?: boolean
  isLastRow?: boolean
  isOverflowCell?: boolean
}>`
  padding: ${CELL_PADDING};
  display: flex;
  align-items: center;
  border-bottom: ${({ isLastRow, theme }) =>
    isLastRow ? "none" : `1px solid ${theme.styles.table.borderColor}`};

  ${({ isCheckbox, isOverflowCell }) =>
    (isCheckbox || isOverflowCell) &&
    css`
      justify-content: center;
    `}
`

/**
 * Individual header cell styled component
 */
export const HeaderCell = styled.div<{
  important?: boolean
  isCheckbox?: boolean
  isSticky?: boolean
  isOverflowCell?: boolean
  stickyLeft?: string
  stickyRight?: string
  scrollbarWidth?: number
  showStickyShadow?: boolean
  showStickyBorder?: boolean
}>`
  ${baseCellStyles}
  vertical-align: top;
  background: white;

  ${({ isOverflowCell, scrollbarWidth }) =>
    isOverflowCell &&
    scrollbarWidth &&
    css`
      width: calc(${ACTIONS_WIDTH} + ${scrollbarWidth}px);
    `}

  ${({ isSticky }) => isSticky && stickyColumnStyles}
`

/**
 * Text component for header cells with emphasis styling
 */
export const HeaderText = styled(Text)<{ important: boolean }>`
  color: ${({ important, theme }) =>
    important ? theme.styles.colorPrimary : "unset"};
  font-size: ${FONT_SIZES.SM};
  font-weight: ${FONT_WEIGHTS.BOLD};
`

/**
 * Scrollable container for table body rows
 */
export const BodyScrollContainer = styled.div<{
  maxHeight?: string
  headerHeight: string
}>`
  overflow: auto ${({ maxHeight }) => (maxHeight ? "scroll" : "auto")};
  max-height: ${({ maxHeight, headerHeight }) =>
    maxHeight ? `calc(${maxHeight} - ${headerHeight})` : "none"};
  font-size: ${FONT_SIZES.SM};
`

/**
 * Grid container for a single table row
 */
export const RowContainer = styled.div<{ gridTemplateColumns: string }>`
  display: grid;
  grid-template-columns: ${({ gridTemplateColumns }) => gridTemplateColumns};
  width: fit-content;
  min-width: 100%;

  &:hover {
    background: ${({ theme }) => theme.styles.colors.grey["100"]};
  }
`

/**
 * Individual row cell styled component with optional sticky positioning
 */
export const RowCell = styled.div<
  CSSProp & {
    isCheckbox?: boolean
    isLastRow?: boolean
    isOverflowCell?: boolean
    isSticky?: boolean
    stickyLeft?: string
    stickyRight?: string
    showStickyShadow?: boolean
    showStickyBorder?: boolean
  }
>`
  ${baseCellStyles}
  background: transparent;

  ${({ isSticky }) =>
    isSticky &&
    css`
      ${stickyColumnStyles}
      z-index: 1;

      background: inherit;

      ${RowContainer}:not(:hover) & {
        background: white;
      }
    `}

  ${({ _css }) => _css}
`

/**
 * Wrapper for empty state content
 */
export const EmptyStateWrapper = styled.div`
  padding: 2rem;
  text-align: center;
`
