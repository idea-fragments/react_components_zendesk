import { Button }         from "components/forms/Button"
import { Carousel }       from "components/layout/Carousel"
import { FlexBox }        from "components/layout/FlexBox"
import { PaginationData } from "components/tables/Table"
import React, {
  useCallback,
  useMemo
}                         from "react"
import { css }            from "styled-components"
import { arrayOfSizeN }   from "utils/arrayHelpers"
import { DO_NOTHING }     from "utils/functionHelpers"

type Props = PaginationData & {
  onPageChange: (n: number) => void
}

export const Pagination = ({
                             page,
                             pageSize,
                             totalCount,
                             onPageChange,
                           }: Props) => {
  const numberPages = useMemo(() => Math.ceil(totalCount / pageSize), [pageSize, totalCount])

  const getItems = () => {
    const maxNumberCarouselItems = 5

    if (numberPages <= maxNumberCarouselItems) {
      return arrayOfSizeN(numberPages).map((_, i) => i + 1)
    }

    const equilibriumNumberOfPads = Math.floor(maxNumberCarouselItems / 2)

    const leftPadding  = Math.min(
      page - 1,
      equilibriumNumberOfPads,
    )
    const rightPadding = Math.min(
      numberPages - page,
      equilibriumNumberOfPads,
    )

    const missingFromRight = equilibriumNumberOfPads - rightPadding
    const missingFromLeft  = equilibriumNumberOfPads - leftPadding

    return [
      ...arrayOfSizeN(leftPadding + missingFromRight)
        .map((_, i) => page - (i + 1)),
      page,
      ...arrayOfSizeN(rightPadding + missingFromLeft)
        .map((_, i) => page + (i + 1)),
    ].sort((a, b) => a - b)
  }

  const movePage = (direction: number) => () => {
    const newPage = page + direction
    if (1 > newPage || newPage > numberPages) return

    return onPageChange(newPage)
  }

  const movePageEnd   = useCallback(() => onPageChange(numberPages), [numberPages, onPageChange])
  const movePageStart = useCallback(() => onPageChange(1), [onPageChange])

  if (totalCount <= pageSize) return null

  return <Carousel _css={css`align-self: center;`}
                   disableNextButton={page === numberPages}
                   disablePreviousButton={page === 1}
                   inline
                   onEndClick={movePageEnd}
                   onNextClick={movePage(+1)}
                   onPreviousClick={movePage(-1)}
                   onStartClick={movePageStart}>
    <FlexBox gap={"2px"}>
      {
        getItems().map((num: number) => (
          <Button
            _css={css`padding: 0; height: 30px; width: 30px;`}
            compact
            flat={num !== page}
            key={num}
            onClick={num === page ? DO_NOTHING : movePage(num - page)}
            pill
            primary={num === page}>
            {num}
          </Button>
        ))
      }
    </FlexBox>
  </Carousel>
}
