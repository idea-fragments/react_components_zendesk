import { Checkbox as ZCheckbox, Field, Label } from "@zendeskgarden/react-forms"
import { FormFieldProps } from "components/forms/formField.types"
import { Hint } from "components/forms/Hint"
import { Message } from "components/forms/Message"
import { VALIDATION_STATES } from "components/forms/validationStates"
import { FlexBox } from "components/layout/FlexBox"
import { StyledProps } from "components/StyledProps.type"
import React, { ChangeEvent, useEffect, useState } from "react"
import styled from "styled-components"
import { dark, fade } from "styles/colors"
import { ContainerProps } from "styles/types"

export type CheckboxProps = FormFieldProps & {
  checked?: boolean
  indeterminate?: boolean
  onChange: (checked: boolean) => void
}

export let Checkbox = ({
  checked: checkedProp = false,
  compact,
  emptyState,
  fluid,
  hint,
  indeterminate,
  label,
  message,
  validation = { validation: VALIDATION_STATES.NONE },
  onChange,
  ...props
}: CheckboxProps) => {
  const [checked, setCheckedTo] = useState(checkedProp)

  const handleCheck = (e: ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked
    setCheckedTo(checked)
    onChange(checked)
  }

  useEffect(() => {
    setCheckedTo(checkedProp)
  }, [checkedProp])

  return (
    <Container
      fluid={fluid}
      gap={null}
      withRows>
      <Field>
        <ZCheckbox
          checked={checked}
          indeterminate={indeterminate}
          {...props}
          onChange={handleCheck}>
          <Label hidden={!label}>{label ?? ""}</Label>
          {hint ? <Hint>{hint}</Hint> : null}
          {message ? (
            <Message validation={validation?.validation}>{message}</Message>
          ) : null}
        </ZCheckbox>
      </Field>
    </Container>
  )
}

Checkbox = styled(Checkbox)`
  &&&& {
    font-size: inherit;

    :hover {
      border-color: ${({ theme }: StyledProps) => theme.styles.colorPrimary};
    }

    :focus {
      border-color: ${({ theme }: StyledProps) =>
        dark(theme.styles.colorPrimary)};
      box-shadow: ${({ theme }: StyledProps) =>
        `0 0 0 3px ${fade(theme.styles.colorPrimary)}`};
    }
  }
`

const Container = styled(FlexBox)`
  ${({ fluid }: ContainerProps) => (fluid ? "width: 100%;" : "")}
  && * {
    font-size: inherit;
  }
`
