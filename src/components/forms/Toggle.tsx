// @ts-ignore
import { Field, Toggle as ZToggle } from "@zendeskgarden/react-forms"
import { Hint } from "components/forms/Hint"
import { Label } from "components/forms/Label"
import React, { ChangeEvent, FC, ReactNode } from "react"
import styled, { css, ThemedStyledProps } from "styled-components"
import { dark } from "styles/colors"
import { Theme } from "styles/theme/Theme.type"
import { Logger } from "utils/logging/Logger"

const logger = new Logger("Toggles")

type Props = {
  checked?: boolean
  color?: string
  disabled?: boolean
  hint?: ReactNode
  label?: string
  onChange: (checked: boolean) => void
  success?: boolean
}

export type ToggleProps = Props

export let Toggle: FC<Props> = ({
  checked,
  hint,
  label,
  onChange,
  ...props
}) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    logger.writeInfo("handleChange", e.target.checked)
    onChange(e.target.checked)
  }

  return (
    <Field>
      <StyledZToggle
        {...props}
        checked={checked}
        onChange={handleChange}>
        <Label hidden={!label}>{label}</Label>
        {hint ? <Hint>{hint}</Hint> : null}
      </StyledZToggle>
    </Field>
  )
}

const finalizeColor = ({
  color,
  success,
  theme,
}: ThemedStyledProps<ToggleProps, Theme>) => {
  if (success) return theme.styles.colorSuccess
  if (color) return color
  return theme.styles.colorPrimary
}

const toggleColor = css<{ color: string }>`
  + label:before {
    border-color: ${({ color }) => color};
    background-color: ${({ color }) => color};
  }

  &&& + label:active:before {
    background-color: ${({ color }) => dark(color)};
  }
`

const StyledZToggle = styled(ZToggle).attrs(
  (props: ThemedStyledProps<ToggleProps, Theme>) => ({
    color: finalizeColor(props),
  }),
)`
  font-size: inherit;

  &&&&& {
    ${({ checked }) => (checked ? toggleColor : "")}
  }
`

Toggle = styled(Toggle)``
