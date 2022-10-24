// @ts-ignore
import { Field, Toggle as ZToggle }          from "@zendeskgarden/react-forms"
import { Hint }                              from "components/forms/Hint"
import { Label }                             from "components/forms/Label"
import React, { ChangeEvent, FC, ReactNode } from "react"
import styled, { css }                       from "styled-components"
import { dark }                              from "styles/colors"
import { Logger }                            from "utils/logging/Logger"

const logger = new Logger("Toggles")

type Props = {
  checked?: boolean,
  disabled?: boolean,
  label?: string,
  hint?: ReactNode,
  onChange: (checked: boolean) => void
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

  return <Field>
    <StyledZToggle {...props}
                   checked={checked}
                   onChange={handleChange}>
      <Label hidden={!label}>{label}</Label>
      {hint ? <Hint>{hint}</Hint> : null}
    </StyledZToggle>
  </Field>
}

const toggleColor = css`
  + label:before {
    border-color: ${({ theme }) => theme.styles.colorSuccess};
    background-color: ${({ theme }) => theme.styles.colorSuccess};
  }

  &&& + label:active:before {
    background-color: ${({ theme }) => dark(theme.styles.colorSuccess)};
  }
`

const StyledZToggle = styled(ZToggle)`
  font-size: inherit;

  &&&&& {
    ${({ checked }) => checked ? toggleColor : ""}
  }
`

Toggle = styled(Toggle)``
