// @flow

import {
    Checkbox as ZCheckbox,
    Field,
    Hint,
    Label,
    Message,
}                              from "@zendeskgarden/react-forms"
import type { FormFieldProps } from "components/forms/formField.types"
import { VALIDATION_STATES }   from "components/forms/validationStates"
import { FlexBlock }           from "components/layout/FlexBlock"
import type { StyledProps }    from "components/StyledProps.type"
import React                   from "react"
import styled                  from "styled-components"
import { dark, fade }          from "styles/colors"
import { FONT_SIZES }          from "vendor/react_components_zendesk/src/styles/typography"

type Props = FormFieldProps & {
    checked? :boolean,
    onChange :(SyntheticInputEvent<HTMLInputElement>) => void
}

export let Checkbox = ({
                           checked,
                           compact,
                           emptyState,
                           fluid,
                           hint,
                           label,
                           message,
                           validation = { validation: VALIDATION_STATES.NONE },
                           onChange,
                           ...props
                       } :Props) => {
    return <Container withRows spacing={null} fluid={fluid}>
        <Field>
            <ZCheckbox
                checked={checked}
                validation={validation.validation}
                {...props}
                onChange={onChange}
            >
                {label ? <Label>{label}</Label> : null}
                {
                    hint
                    ? <Hint
                        css={`&&& {
                          font-size: ${FONT_SIZES.XS};
                        }`}>
                        {hint}
                    </Hint>
                    : null
                }
                {
                    message
                    ?
                    <Message
                        css={`&&& {
                          font-size: ${FONT_SIZES.XS};
                        }`}
                        validation={validation.validation}>
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
      border-color: ${({ theme } :StyledProps<>) => theme.styles.colorPrimary};
    }

    :focus {
      border-color: ${({ theme } :StyledProps<>) => dark(theme.styles.colorPrimary)};
      box-shadow: ${({ theme } :StyledProps<>) => `0 0 0 3px ${fade(theme.styles.colorPrimary)}`};
    }
  }
`

const Container = styled(FlexBlock)`
  ${({ fluid }) => fluid ? "width: 100%;" : ""}
  && * {
    font-size: inherit;
  }
`
