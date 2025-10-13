import { Text } from "components/text/Text"
import React from "react"
import { css } from "styled-components"

type Props = {
  selectedCount: number
  totalPageCount: number
}

/**
 * SelectionCount displays the number of selected items on the current page.
 * Only renders when items are selected.
 *
 * @param selectedCount - Number of items selected
 * @param totalPageCount - Total number of items on the current page
 */
export const SelectionCount = ({ selectedCount, totalPageCount }: Props) => {
  if (selectedCount === 0) return null

  return (
    <Text
      _css={css`
        align-self: flex-end;
      `}>
      <b>{selectedCount}</b> of <b>{totalPageCount}</b> selected
    </Text>
  )
}
