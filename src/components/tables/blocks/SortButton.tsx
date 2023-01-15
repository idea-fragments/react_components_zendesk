import {
  mdiArrowDownThin,
  mdiArrowUpThin,
  mdiSwapVertical
} from "@mdi/js"
import { Button }          from "components/forms/Button"
import { SortDirection }   from "components/tables/Table"
import React, {
  FC,
  useCallback
}                          from "react"
import { css }             from "styled-components"
import { useTheme }        from "styles/theme/useTheme"
import { nextItem }        from "utils/arrayHelpers"

type SortButtonProps = {
  direction: SortDirection,
  fieldName: string,
  onClick: (columnName: string, direction: SortDirection) => void,
}

const SORT_OPTIONS :SortDirection[] = [ "asc", "desc", undefined]

export const SortButton: FC<SortButtonProps> = ({
                                           direction,
                                           fieldName,
                                           onClick,
                                         }) => {
  const theme = useTheme()

  const icon = () => {
    switch (direction) {
      case "asc":
        return mdiArrowUpThin
      case "desc":
        return mdiArrowDownThin
    }
    return mdiSwapVertical
  }

  const cycleSorting = useCallback(() => {
    onClick(fieldName, nextItem<SortDirection>(SORT_OPTIONS, direction))
  }, [direction, fieldName, onClick])

  return <Button
    color={direction ? theme.styles.textColorPrimary : undefined}
    compact
    _css={css`padding: 2px; height: auto;`}
    flat
    icon={icon()}
    neutral={!direction}
    onClick={cycleSorting}
    primary={false} />
}
