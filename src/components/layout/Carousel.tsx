import {
  mdiChevronDoubleLeft,
  mdiChevronDoubleRight,
  mdiChevronLeft,
  mdiChevronRight,
} from "@mdi/js"
import { IconButton } from "components/forms/IconButton"
import { FlexBox } from "components/layout/FlexBox"
import React, { ReactNode } from "react"
import styled, { css } from "styled-components"
import { useTheme } from "styles/theme/useTheme"
import { CSSProp } from "styles/types"

type Props = {
  children: ReactNode
  className?: string
  disableNextButton?: boolean
  disablePreviousButton?: boolean
  inline?: boolean
  onEndClick?: () => void
  onNextClick: () => void
  onPreviousClick: () => void
  onStartClick?: () => void
} & CSSProp

export let Carousel = ({
  children,
  className,
  disableNextButton,
  disablePreviousButton,
  inline,
  onEndClick,
  onNextClick,
  onPreviousClick,
  onStartClick,
}: Props) => {
  const theme = useTheme()

  return (
    <FlexBox
      alignItems={"center"}
      className={className}
      inline={inline}>
      {onStartClick ? (
        <NavButton
          color={theme.styles.colorAccent}
          disabled={disablePreviousButton}
          icon={mdiChevronDoubleLeft}
          onClick={onStartClick}
          primary={false}
        />
      ) : null}

      <NavButton
        disabled={disablePreviousButton}
        icon={mdiChevronLeft}
        onClick={onPreviousClick}
        primary
      />
      <FlexBox
        _css={css`
          flex: 1;
        `}
        justifyContent={"center"}>
        {children}
      </FlexBox>
      <NavButton
        disabled={disableNextButton}
        icon={mdiChevronRight}
        onClick={onNextClick}
        primary
      />
      {onEndClick ? (
        <NavButton
          color={theme.styles.colorAccent}
          disabled={disableNextButton}
          icon={mdiChevronDoubleRight}
          onClick={onEndClick}
          primary={false}
        />
      ) : null}
    </FlexBox>
  )
}

Carousel = styled(Carousel)`
  ${({ _css }: CSSProp) => _css}
`

const NavButton = styled(IconButton).attrs({
  flat: false,
})`
  height: auto;
`
