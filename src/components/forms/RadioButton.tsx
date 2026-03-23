import { FormFieldProps } from "components/forms/formField.types"
import { Message } from "components/forms/Message"
import { VALIDATION_STATES } from "components/forms/validationStates"
import { FlexBox } from "components/layout/FlexBox"
import { Hint } from "components/text/Hint"
import { Text } from "components/text/Text"
import React, { ChangeEvent, FC, useCallback, useMemo } from "react"
import styled, { css } from "styled-components"

import { dark, fade } from "styles/colors"
import { SPACINGS } from "styles/spacings"
import { FullSpectrumColors } from "styles/theme/Theme.type"

import { useTheme } from "styles/theme/useTheme"
import { ContainerProps } from "styles/types"
import { FONT_SIZES, FONT_WEIGHTS } from "styles/typography"

export type RadioStyle = "default" | "checkmark"
export type RadioButtonProps = {
  checked?: boolean
  color?: FullSpectrumColors
  darkColorIndex?: keyof FullSpectrumColors
  disabled?: boolean
  name: string
  radioStyle?: RadioStyle
  value: string
  onChange: (value: string) => void
} & Omit<FormFieldProps, "color" | "onChange">

export let RadioButton: FC<RadioButtonProps> = ({
  checked = false,
  color: colorProp,
  compact,
  darkColorIndex = 500,
  disabled = false,
  emptyState,
  fluid,
  hint,
  label,
  message,
  name,
  onChange,
  radioStyle = "default",
  validation = { validation: VALIDATION_STATES.NONE },
  value,
}) => {
  const theme = useTheme()
  const color = useMemo(
    () => colorProp ?? theme.styles.colors.blue,
    [colorProp, theme.styles.colors.blue],
  )
  const darkColor = color[darkColorIndex]
  const selectedBackgroundColor = color["100"]

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
      as={"label"}
      $darkColor={darkColor}
      $disabled={disabled}
      fluid={fluid}
      gap={SPACINGS.XS}
      $selected={checked}
      $selectedBackgroundColor={selectedBackgroundColor}>
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
        $darkColor={darkColor}
        disabled={disabled}
        filled={radioStyle === "checkmark" && checked}
        $radius={radioStyle === "checkmark" ? "20px" : "1em"}>
        {radioStyle === "checkmark" ? (
          <>{checked ? <CheckMark /> : null}</>
        ) : (
          <>
            <RadioInner
              checked={checked}
              $darkColor={darkColor}
              disabled={disabled}
            />
          </>
        )}
      </StyledRadio>
      <FlexBox
        gap={SPACINGS.XXS}
        withRows>
        {label ? (
          <Label
            $darkColor={darkColor}
            $disabled={disabled}
            $selected={checked}>
            {label}
          </Label>
        ) : null}

        {hint ? (
          <Hint
            _css={css`
              margin: 0;
            `}>
            {hint}
          </Hint>
        ) : null}
      </FlexBox>
      {message ? (
        <Message validation={validation?.validation}>{message}</Message>
      ) : null}
    </Container>
  )
}

const Container = styled(FlexBox)<{
  $darkColor: string
  $disabled?: boolean
  $selected: boolean
  $selectedBackgroundColor: string
}>`
  ${({ fluid }: ContainerProps) => (fluid ? "width: 100%;" : "")}
  border-radius: 12px;
  border: 2px solid
    ${({ $darkColor, $selected, theme }) =>
      $selected ? $darkColor : theme.styles.border.color};
  background: ${({ $selected, $selectedBackgroundColor }) =>
    $selected ? $selectedBackgroundColor : "transparent"};
  cursor: ${({ $disabled }) => ($disabled ? "not-allowed" : "pointer")};
  padding: ${SPACINGS.SM};
  position: relative;
  transition: all 0.2s ease;
  user-select: none;
  line-height: 1;

  &:hover {
    border-color: ${({ $darkColor, $disabled, $selected, theme }) =>
      $disabled
        ? theme.styles.border.color
        : $selected
        ? $darkColor
        : theme.styles.colors.grey["300"]};
  }

  && * {
    font-size: inherit;
  }
`

const CheckMark = styled.div`
  width: 6px;
  height: 10px;
  border: solid white;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
  margin-top: -2px;
`

const HiddenInput = styled.input`
  height: 0;
  opacity: 0;
  position: absolute;
  width: 0;
`

const Label = styled(Text)<{
  $darkColor: string
  $disabled: boolean
  $selected: boolean
}>`
  font-size: ${FONT_SIZES.SM};
  font-weight: ${FONT_WEIGHTS.MEDIUM};
  color: ${({ $darkColor, $disabled, $selected, theme }) =>
    $disabled
      ? theme.styles.colors.grey["500"]
      : $selected
      ? $darkColor
      : theme.styles.textColorPrimary};
`

const RadioInner = styled.span<{
  checked: boolean
  $darkColor: string
  disabled?: boolean
}>`
  background: ${({ checked, $darkColor, disabled, theme }) => {
    if (disabled) {
      return checked ? theme.styles.colors.grey["400"] : "transparent"
    }
    return checked ? $darkColor : "transparent"
  }};
  border-radius: 50%;
  height: 0.6em;
  transition: all 0.2s ease;
  width: 0.6em;
`

const StyledRadio = styled(FlexBox)<{
  checked: boolean
  $darkColor: string
  disabled?: boolean
  filled?: boolean
  $radius: string
}>`
  align-items: center;
  background: ${({ $darkColor, filled, theme }) =>
    filled ? $darkColor : theme.styles.colors.white};
  border-width: 2px;
  border-style: solid;
  border-color: ${({ checked, $darkColor, disabled, theme }) =>
    disabled || !checked ? theme.styles.colors.grey["400"] : $darkColor};

  && {
    font-size: 1.1em;
  }

  border-radius: 50%;
  display: flex;
  flex-shrink: 0;
  justify-content: center;
  transition: all 0.2s ease;
  height: ${({ $radius }) => $radius};
  width: ${({ $radius }) => $radius};

  ${Container}:hover & {
    border-color: ${({ $darkColor }) => $darkColor};
  }

  ${({ disabled, theme }) => {
    if (disabled) {
      return css`
        border-color: ${theme.styles.colors.grey["400"]} !important;
      `
    }
  }}
  ${HiddenInput}:focus + & {
    ${({ $darkColor, disabled }) =>
      !disabled &&
      css`
        border-color: ${dark($darkColor)};
        box-shadow: 0 0 0 3px ${fade($darkColor)};
      `}
  }
`
