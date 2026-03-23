import { FormFieldProps } from "components/forms/formField.types"
import { Message } from "components/forms/Message"
import { RadioButton, RadioStyle } from "components/forms/RadioButton"
import { VALIDATION_STATES } from "components/forms/validationStates"
import { FlexBox } from "components/layout/FlexBox"
import { Hint } from "components/text/Hint"
import { Label } from "components/text/Label"
import React, { FC, ReactNode, useCallback } from "react"

import { SPACINGS } from "styles/spacings"
import { FullSpectrumColors } from "styles/theme/Theme.type"

export type RadioButtonOption = {
  color?: FullSpectrumColors
  darkColorIndex?: keyof FullSpectrumColors
  disabled?: boolean
  hint?: string
  label: string
  renderAdditional?: (args: { renderedRadioButton: ReactNode }) => ReactNode
  value: string
}

export type RadioButtonGroupProps = {
  checkedOption?: string
  color?: FullSpectrumColors
  darkColorIndex?: keyof FullSpectrumColors
  disabled?: boolean
  name: string
  onChange: (value: string) => void
  options: Array<RadioButtonOption>
  radioStyle?: RadioStyle
} & Omit<FormFieldProps, "color" | "onChange">

export const RadioButtonGroup: FC<RadioButtonGroupProps> = ({
  checkedOption,
  color,
  compact,
  darkColorIndex = 500,
  disabled = false,
  emptyState,
  fluid,
  hint,
  label,
  message,
  name,
  options,
  radioStyle = "default",
  validation = { validation: VALIDATION_STATES.NONE },
  onChange,
}) => {
  const handleChange = useCallback(
    (value: string) => {
      if (!disabled) {
        onChange(value)
      }
    },
    [disabled, onChange],
  )

  return (
    <FlexBox
      gap={SPACINGS.XS}
      withRows>
      {label ? <Label>{label}</Label> : null}
      {hint ? <Hint>{hint}</Hint> : null}
      <FlexBox
        gap={SPACINGS.SM}
        withRows>
        {options.map((option) => {
          const renderedRadioButton = (
            <RadioButton
              checked={checkedOption === option.value}
              color={option.color ?? color}
              darkColorIndex={option.darkColorIndex || darkColorIndex}
              disabled={disabled || option.disabled}
              fluid={fluid}
              hint={option.hint}
              label={option.label}
              name={name}
              radioStyle={radioStyle}
              value={option.value}
              onChange={handleChange}
            />
          )

          const content = option.renderAdditional
            ? option.renderAdditional({ renderedRadioButton })
            : renderedRadioButton

          return <React.Fragment key={option.value}>{content}</React.Fragment>
        })}
      </FlexBox>
      {message ? (
        <Message validation={validation?.validation}>{message}</Message>
      ) : null}
    </FlexBox>
  )
}
