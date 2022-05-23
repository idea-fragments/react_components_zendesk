import {
  Checkbox as ZCheckbox,
  Field,
  Hint,
  Label,
  Message,
  /* @ts-ignore */
}                                                  from "@zendeskgarden/react-forms"
import { FormFieldProps }                          from "components/forms/formField.types"
import { VALIDATION_STATES }                       from "components/forms/validationStates"
import { FlexBox }                                 from "components/layout/FlexBox"
import { StyledProps }                             from "components/StyledProps.type"
import React, { ChangeEvent, useEffect, useState } from "react"
import styled                                      from "styled-components"
import { dark, fade }                              from "styles/colors"
import { ContainerProps }                          from "styles/types"
import { FONT_SIZES }                              from "styles/typography"

type Props = FormFieldProps & {
  checked?: boolean,
  indeterminate?: boolean,
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
                       }: Props) => {
  const [checked, setCheckedTo] = useState(checkedProp)

  const handleCheck = (e: ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked
    setCheckedTo(checked)
    onChange(checked)
  }

  useEffect(() => { setCheckedTo(checkedProp) }, [checkedProp])

  return <Container fluid={fluid} gap={null} withRows>
    <Field>
      <ZCheckbox
        checked={checked}
        indeterminate={indeterminate}
        {...props}
        onChange={handleCheck}
      >
        <Label hidden={!label}>
          {label ?? ""}
        </Label>
        {
          hint
          ? <Hint css={`&&& { font-size: ${FONT_SIZES.XS}; }`}>{hint}</Hint>
          : null
        }
        {
          message
          ?
          <Message css={`&&& { font-size: ${FONT_SIZES.XS};}`}
                   validation={validation?.validation}>
            {message}
          </Message>
          : null
        }
      </ZCheckbox>
    </Field>
  </Container>
}

Checkbox = styled(Checkbox)`
  &&&& {
    font-size: inherit;

    :hover {
      border-color: ${({ theme }: StyledProps) => theme.styles.colorPrimary};
    }

    :focus {
      border-color: ${({ theme }: StyledProps) => dark(theme.styles.colorPrimary)};
      box-shadow: ${({ theme }: StyledProps) => `0 0 0 3px ${fade(theme.styles.colorPrimary)}`};
    }
  }
`

const Container = styled(FlexBox)`
  ${({ fluid }: ContainerProps) => fluid ? "width: 100%;" : ""}
  && * {
    font-size: inherit;
  }
`
