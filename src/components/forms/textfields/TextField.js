// @flow

import type { TextFieldProps }                from "components/forms/formField.types"
import { Field, Label, Hint, Input, Message } from "@zendeskgarden/react-forms"
import { VALIDATION_STATES }                  from "components/forms/validationStates"
import { FlexBlock }                          from "components/layout/FlexBlock"
import type { StyledProps }                   from "components/StyledProps.type"
import * as React                             from "react"
import { useObserver }                        from "mobx-react"
import styled         from "styled-components"
import { dark, fade } from "styles/colors"

const Wrapper = styled(Field)`
  width: ${({ compact } :TextFieldProps<>) => compact ? "auto" : "100%"};
`

export const TextField = ({
                              label,
                              hint,
                              value,
                              emptyState,
                              message,
                              compact,
                              onChange,
                              validation,
                              autoComplete,
                              type,
                          } :TextFieldProps<>) => {
    message = validation.message || message
    return useObserver(() => (
        <FlexBlock withRows spacing={0}>
            <Wrapper compact={compact}>
                {label ? <Label>{label}</Label> : null}
                {hint ? <Hint>{hint}</Hint> : null}
                <ThemedInput value={value}
                       type={type}
                       placeholder={emptyState}
                       onChange={onChange}
                       validation={validation.validation}
                       autoComplete={autoComplete} />
                {message ? <Message validation={validation.validation}>{message}</Message> : null}
            </Wrapper>
        </FlexBlock>
    ))
}

TextField.defaultProps   = {
    disabled: false,
    validation: { validation: VALIDATION_STATES.NONE }
}
TextField.COMPONENT_NAME = "TextField"

const ThemedInput = styled(Input)`
  &&&& {
    :hover {
      border-color: ${({ theme } :StyledProps<>) => theme.styles.colorPrimary};
    }
    
    :focus {
      border-color: ${({ theme } :StyledProps<>) => dark(theme.styles.colorPrimary)};
      box-shadow:${({ theme } :StyledProps<>) => `0 0 0 3px ${fade(theme.styles.colorPrimary)}`};
    }
  }
`
