import { Button } from "components/forms/Button"
import { Carousel } from "components/layout/Carousel"
import { ComputersOnly } from "components/layout/ComputersOnly"
import { FlexBox } from "components/layout/FlexBox"
import { PhonesOnly } from "components/layout/PhonesOnly"
import { TabletsOnly } from "components/layout/TabletsOnly"
import { PhonesAndTabletsOnly } from "components/layout/PhonesAndTabletsOnly"
import { Selector } from "components/forms/selectors/Selector"
import { PaginationData } from "components/tables/Table"
import React, { useCallback, useMemo } from "react"
import styled, { css } from "styled-components"
import { SPACINGS } from "styles/spacings"
import { arrayOfSizeN } from "utils/arrayHelpers"
import { DO_NOTHING } from "utils/functionHelpers"

type Props = PaginationData & {
  onPageChange: (n: number) => void
  onPageSizeChange?: (size: number) => void
}

const PAGE_SIZE_OPTIONS = [10, 25, 50, 75, 100]
const PAGE_SIZE_SELECTOR_OPTIONS = PAGE_SIZE_OPTIONS.map((size) => ({
  label: `${size}`,
  value: size,
}))

class InvalidPageSizeError extends Error {
  constructor() {
    super(`Page size must be one of: ${PAGE_SIZE_OPTIONS.join(", ")}`)
  }
}

export const Pagination = ({
  page,
  pageSize,
  totalCount,
  onPageChange,
  onPageSizeChange,
}: Props) => {
  if (!PAGE_SIZE_OPTIONS.includes(pageSize)) {
    throw new InvalidPageSizeError()
  }

  const numberPages = useMemo(
    () => Math.ceil(totalCount / pageSize),
    [pageSize, totalCount],
  )

  const buttonPositionings = useCallback(
    (totalCarouselItems: number) => {
      if (numberPages <= totalCarouselItems) {
        return arrayOfSizeN(numberPages).map((_, i) => i + 1)
      }

      const equilibriumNumberOfPads = Math.floor(totalCarouselItems / 2)
      const leftPadding = Math.min(page - 1, equilibriumNumberOfPads)
      const rightPadding = Math.min(numberPages - page, equilibriumNumberOfPads)
      const missingFromRight = equilibriumNumberOfPads - rightPadding
      const missingFromLeft = equilibriumNumberOfPads - leftPadding

      return [
        ...arrayOfSizeN(leftPadding + missingFromRight).map(
          (_, i) => page - (i + 1),
        ),
        page,
        ...arrayOfSizeN(rightPadding + missingFromLeft).map(
          (_, i) => page + (i + 1),
        ),
      ].sort((a, b) => a - b)
    },
    [numberPages, page],
  )

  const movePage = useCallback(
    (direction: number) => () => {
      const newPage = page + direction
      if (1 > newPage || newPage > numberPages) return

      return onPageChange(newPage)
    },
    [numberPages, onPageChange, page],
  )

  const createNPageButtons = useCallback(
    (total: number) => {
      return buttonPositionings(total).map((num: number) => (
        <Button
          _css={css`
            padding: 0;
            height: 30px;
            width: 30px;
          `}
          compact
          flat={num !== page}
          key={num}
          onClick={num === page ? DO_NOTHING : movePage(num - page)}
          pill
          primary={num === page}>
          {num}
        </Button>
      ))
    },
    [buttonPositionings, movePage, page],
  )

  const movePageEnd = useCallback(
    () => onPageChange(numberPages),
    [numberPages, onPageChange],
  )
  const movePageStart = useCallback(() => onPageChange(1), [onPageChange])

  const renderCarousel = useCallback(
    (children: React.ReactNode) => (
      <Carousel
        disableNextButton={page === numberPages}
        disablePreviousButton={page === 1}
        inline
        onEndClick={movePageEnd}
        onNextClick={movePage(+1)}
        onPreviousClick={movePage(-1)}
        onStartClick={movePageStart}>
        <FlexBox gap={"2px"}>{children}</FlexBox>
      </Carousel>
    ),
    [page, numberPages, movePageEnd, movePage, movePageStart],
  )

  const renderPageSizeSelector = useCallback(
    (justifyContent: string = "flex-end") => {
      if (!onPageSizeChange) return null

      return (
        <FlexBox
          alignItems={"center"}
          justifyContent={justifyContent}
          gap={SPACINGS.XS}>
          <span>Items per page:</span>
          <Selector
            compact
            small
            emptyState={"Select size"}
            options={PAGE_SIZE_SELECTOR_OPTIONS}
            keyField={"value"}
            labelField={"label"}
            selectedKey={pageSize}
            onChange={(size: any) => onPageSizeChange(size as number)}
          />
        </FlexBox>
      )
    },
    [onPageSizeChange, pageSize],
  )

  const renderTotalCount = useCallback(
    (justifyContent: string = "flex-start") => {
      return (
        <FlexBox
          alignItems={"center"}
          justifyContent={justifyContent}
          gap={SPACINGS.XS}
          _css={css`
            color: ${({ theme }) => theme.styles.colors.grey["600"]};
          `}>
          <span>
            <b>{totalCount}</b> total record{totalCount !== 1 ? "s" : ""}
          </span>
        </FlexBox>
      )
    },
    [totalCount],
  )

  if (totalCount <= pageSize && !onPageSizeChange) return null

  return (
    <>
      <ComputersOnly>
        <ComputerContainer>
          {renderTotalCount("flex-start")}
          {renderCarousel(createNPageButtons(5))}
          {renderPageSizeSelector("flex-end")}
        </ComputerContainer>
      </ComputersOnly>

      <PhonesAndTabletsOnly>
        <FlexBox
          withRows
          alignItems={"center"}
          gap={SPACINGS.SM}
          _css={css`
            width: 100%;
          `}>
          {renderTotalCount("center")}
          {renderCarousel(
            <>
              <PhonesOnly>{createNPageButtons(3)}</PhonesOnly>
              <TabletsOnly>{createNPageButtons(5)}</TabletsOnly>
            </>,
          )}
          {renderPageSizeSelector("center")}
        </FlexBox>
      </PhonesAndTabletsOnly>
    </>
  )
}

const ComputerContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  gap: ${SPACINGS.SM};
  width: 100%;
`
