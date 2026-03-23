import { FC, useMemo } from "react"
import styled from "styled-components"
import { CSSProp } from "styles/types"
import { ValueOf } from "utils/types"

export const SEPARATOR_ORIENTATIONS = {
  HORIZONTAL: "horizontal",
  VERTICAL: "vertical",
} as const

export type SeparatorProps = {
  color?: string
  fluid?: boolean
  orientation?: ValueOf<typeof SEPARATOR_ORIENTATIONS>
} & CSSProp

type StyledSeparatorProps = SeparatorProps & {
  className?: string
}

const _Separator: FC<StyledSeparatorProps> = ({
  className,
  color,
  fluid,
  orientation = SEPARATOR_ORIENTATIONS.HORIZONTAL,
}) => {
  const orientationLength = useMemo(() => (fluid ? "100%" : "1rem"), [fluid])
  const nonOrientationLength = "1px"

  const width = useMemo(
    () =>
      orientation === SEPARATOR_ORIENTATIONS.HORIZONTAL
        ? orientationLength
        : nonOrientationLength,
    [orientation, orientationLength],
  )

  const height = useMemo(
    () =>
      orientation === SEPARATOR_ORIENTATIONS.VERTICAL
        ? orientationLength
        : nonOrientationLength,
    [orientation, orientationLength],
  )

  return (
    <Line
      className={className}
      color={color}
      height={height}
      width={width}
    />
  )
}

export const Separator = styled(_Separator)<SeparatorProps>`
  ${({ _css }) => _css}
`

const Line = styled.div<{ color?: string; width: string; height: string }>`
  background-color: ${({ color, theme }) => color ?? theme.styles.border.color};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
`
