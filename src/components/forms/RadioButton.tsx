import React, { ChangeEvent, FC, useCallback, useMemo } from "react"
import styled, { css } from "styled-components"

import { FormFieldProps } from "components/forms/formField.types"
import { Hint } from "components/text/Hint"
import { Message } from "components/forms/Message"
import { VALIDATION_STATES } from "components/forms/validationStates"
import { FlexBox } from "components/layout/FlexBox"
import { StyledProps } from "components/StyledProps.type"

import { useTheme } from "styles/theme/useTheme"

import { dark, fade } from "styles/colors"
import { SPACINGS } from "styles/spacings"
import { ContainerProps } from "styles/types"

export type RadioButtonProps = {
  checked?: boolean
  color?: string
  disabled?: boolean
  name: string
  value: string
  onChange: (value: string) => void
} & Omit<FormFieldProps, "onChange">

export let RadioButton: FC<RadioButtonProps> = ({
  checked = false,
  color,
  compact,
  disabled = false,
  emptyState,
  fluid,
  hint,
  label,
  message,
  name,
  validation = { validation: VALIDATION_STATES.NONE },
  value,
  onChange,
}) => {
  const theme = useTheme()
  const finalizedColor = useMemo(
    () => color || theme.styles.colorPrimary,
    [color, theme.styles.colorPrimary],
  )

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      if (!disabled) {
        onChange(e.target.value)
      }
    },
    [disabled, onChange],
  )

  return (
    <Container
      fluid={fluid}
      gap={SPACINGS.XS}
      withRows>
      <RadioContainer disabled={disabled}>
        <HiddenInput
          checked={checked}
          disabled={disabled}
          name={name}
          type={"radio"}
          value={value}
          onChange={handleChange}
        />
        <StyledRadio
          checked={checked}
          color={finalizedColor}
          disabled={disabled}>
          <RadioInner
            checked={checked}
            color={finalizedColor}
            disabled={disabled}
          />
        </StyledRadio>
        {label ? <Label disabled={disabled}>{label}</Label> : null}
      </RadioContainer>
      {hint ? <Hint>{hint}</Hint> : null}
      {message ? (
        <Message validation={validation?.validation}>{message}</Message>
      ) : null}
    </Container>
  )
}

const Container = styled(FlexBox)`
  ${({ fluid }: ContainerProps) => (fluid ? "width: 100%;" : "")}
  && * {
    font-size: inherit;
  }
`

const HiddenInput = styled.input`
  height: 0;
  opacity: 0;
  position: absolute;
  width: 0;
`

const Label = styled.span<{ disabled?: boolean }>`
  color: ${({ disabled, theme }: StyledProps<{ disabled?: boolean }>) =>
    disabled ? theme.styles.colors.grey["500"] : theme.styles.textColorPrimary};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
`

const RadioContainer = styled.label<{ disabled?: boolean }>`
  align-items: center;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  display: flex;
  gap: ${SPACINGS.XS};
  position: relative;
  user-select: none;
`

const RadioInner = styled.span<{
  checked: boolean
  color: string
  disabled?: boolean
}>`
  background: ${({
    checked,
    color,
    disabled,
    theme,
  }: StyledProps<{
    checked: boolean
    color?: string
    disabled?: boolean
  }>) => {
    if (disabled) {
      return checked ? theme.styles.colors.grey["400"] : "transparent"
    }
    return checked ? color : "transparent"
  }};
  border-radius: 50%;
  height: 0.6em;
  transition: all 0.2s ease;
  width: 0.6em;
`

const StyledRadio = styled.span<{
  checked: boolean
  color: string
  disabled?: boolean
}>`
  align-items: center;
  background: ${({ theme }: StyledProps) => theme.styles.colors.white};
  border-width: 2px;
  border-style: solid;
  border-color: ${({ checked, color, disabled, theme }) =>
    disabled || !checked ? theme.styles.colors.grey["400"] : color};

  font-size: 1.1em !important;
  border-radius: 50%;
  display: flex;
  flex-shrink: 0;
  height: 1em;
  justify-content: center;
  transition: all 0.2s ease;
  width: 1em;

  ${RadioContainer}:hover & {
    border-color: ${({ color, theme }) => color};
  }

  ${({ disabled, theme }) => {
    if (disabled) {
      return css`
        border-color: ${theme.styles.colors.grey["400"]} !important;
      `
    }
  }}

  ${HiddenInput}:focus + & {
    ${({
      color,
      disabled,
    }: StyledProps<{ color: string; disabled?: boolean }>) =>
      !disabled &&
      css`
        border-color: ${dark(color)};
        box-shadow: 0 0 0 3px ${fade(color)};
      `}
  }
`
