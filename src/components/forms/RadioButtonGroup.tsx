import React, { FC, useCallback } from "react"

import { FormFieldProps } from "components/forms/formField.types"
import { Hint } from "components/text/Hint"
import { Message } from "components/forms/Message"
import { RadioButton } from "components/forms/RadioButton"
import { VALIDATION_STATES } from "components/forms/validationStates"
import { FlexBox } from "components/layout/FlexBox"
import { Label } from "components/text/Label"

import { SPACINGS } from "styles/spacings"

export type RadioButtonOption = {
  color?: string
  disabled?: boolean
  hint?: string
  label: string
  value: string
}

export type RadioButtonGroupProps = {
  checkedOption?: string
  color?: string
  disabled?: boolean
  name: string
  options: Array<RadioButtonOption>
  onChange: (value: string) => void
} & Omit<FormFieldProps, "onChange">

export const RadioButtonGroup: FC<RadioButtonGroupProps> = ({
  checkedOption,
  color,
  compact,
  disabled = false,
  emptyState,
  fluid,
  hint,
  label,
  message,
  name,
  options,
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
        {options.map((option) => (
          <RadioButton
            checked={checkedOption === option.value}
            color={option.color || color}
            disabled={disabled || option.disabled}
            fluid={fluid}
            hint={option.hint}
            key={option.value}
            label={option.label}
            name={name}
            value={option.value}
            onChange={handleChange}
          />
        ))}
      </FlexBox>
      {message ? (
        <Message validation={validation?.validation}>{message}</Message>
      ) : null}
    </FlexBox>
  )
}
