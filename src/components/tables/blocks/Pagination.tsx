import { Button, BUTTON_SIZES } from "components/forms/Button"
import { Carousel }             from "components/layout/Carousel"
import { FlexBox }              from "components/layout/FlexBox"
import type { PaginationData }  from "components/tables/Table"
import React                    from "react"
import { arrayOfSizeN }         from "utils/arrayHelpers"
import { DO_NOTHING }           from "utils/functionHelpers"

type Props = PaginationData & {
  onPageChange: (n: number) => void
}

export const Pagination = ({
                             page,
                             pageSize,
                             totalCount,
                             onPageChange,
                           }: Props) => {
  if (!totalCount || !pageSize || totalCount <= pageSize) return null

  const numberPages = Math.ceil(totalCount / pageSize)

  const getItems = () => {
    const maxNumberCarouselItems = 7

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

  return <Carousel css={`align-self: center;`}
                   disableNextButton={page === numberPages}
                   disablePreviousButton={page === 1}
                   inline
                   onNextClick={movePage(+1)}
                   onPreviousClick={movePage(-1)}>
    <FlexBox gap={"unset"}>
      {
        getItems().map((num: number) => (
          <Button
            compact
            flat={num !== page}
            key={num}
            pill
            size={BUTTON_SIZES.SMALL}
            onClick={num === page
                     ? DO_NOTHING
                     : movePage(num - page)}
          >
            {num}
          </Button>
        ))
      }
    </FlexBox>
  </Carousel>
}
