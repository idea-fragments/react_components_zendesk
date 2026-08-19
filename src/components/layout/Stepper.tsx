import React, { FC, ReactElement, ReactNode } from "react"
import styled from "styled-components"
import { SPACINGS } from "styles/spacings"
import { FullSpectrumColors } from "styles/theme/Theme.type"
import { useTheme } from "styles/theme/useTheme"

export type StepperRenderProps = {
  currentStep: number
  dots: ReactNode
  stepCount: number
  title: string
}

export type StepperProps = {
  children: (props: StepperRenderProps) => ReactElement
  color?: FullSpectrumColors
  completedColor?: string
  currentColor?: string
  currentStep: number
  incompleteColor?: string
  stepCount: number
}

const DotsRow = styled.div`
  align-items: center;
  display: flex;
  gap: ${SPACINGS.XXS};
`

const Dot = styled.span<{ $color: string }>`
  background: ${({ $color }) => $color};
  border-radius: 4px;
  display: inline-block;
  flex-shrink: 0;
  height: 7px;
  width: 7px;
`

export const Stepper: FC<StepperProps> = ({
  children,
  color,
  completedColor,
  currentColor,
  currentStep,
  incompleteColor,
  stepCount,
}) => {
  const theme = useTheme()
  const palette = color ?? theme.styles.colors.primary

  const resolvedCompleted = completedColor ?? palette[300]
  const resolvedCurrent = currentColor ?? palette[600]
  const resolvedIncomplete = incompleteColor ?? theme.styles.colors.grey[300]

  const colorFor = (index: number): string => {
    const oneBased = index + 1
    if (oneBased === currentStep) return resolvedCurrent
    if (oneBased < currentStep) return resolvedCompleted
    return resolvedIncomplete
  }

  const dots = (
    <DotsRow>
      {Array.from({ length: stepCount }, (_, i) => (
        <Dot
          key={i}
          $color={colorFor(i)}
        />
      ))}
    </DotsRow>
  )

  return children({
    currentStep,
    dots,
    stepCount,
    title: `Step ${currentStep} of ${stepCount}`,
  })
}
