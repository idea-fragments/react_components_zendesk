import { Field, Toggle as ZToggle }                from "@zendeskgarden/react-forms"
import { Hint }                                    from "components/forms/Hint"
import { Label }                                   from "components/forms/Label"
import React, { ChangeEvent, ReactNode, useState } from "react"
import styled, { css }                             from "styled-components"
import { dark }                                    from "styles/colors"

type Props = {
  checked?: boolean,
  disabled?: boolean,
  label?: string,
  hint?: ReactNode,
  onChange: (checked: boolean) => void
}
export type ToggleProps = Props

export let Toggle = ({
                       checked,
                       hint,
                       label,
                       onChange,
                       ...props
                     }: Props) => {
  const checkedPropOr      = (value: boolean) => checked == null
                                                 ? value
                                                 : checked
  const [active, setState] = useState(checkedPropOr(false))

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setState(e.target.checked)
    onChange(e.target.checked)
  }

  return <Field>
    <ZToggle {...props} checked={checkedPropOr(active)} onChange={handleChange}>
      <Label hidden={!label}>{label}</Label>
      {hint ? <Hint>{hint}</Hint> : null}
    </ZToggle>
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

Toggle = styled(Toggle)`
  font-size: inherit;

  &&&&& {
    ${({ checked }) => checked ? toggleColor : ""}
  }
`
