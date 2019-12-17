// @flow

import type { TextFieldProps }                from "components/forms/formField.types"
import { Field, Label, Hint, Input, Message } from "@zendeskgarden/react-forms"
import { VALIDATION_STATES }                  from "components/forms/validationStates"
import { FlexBlock }                          from "components/layout/FlexBlock"
import * as React                             from "react"
import { useObserver }                        from "mobx-react"
import styled                                 from "styled-components"

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
                <Input value={value}
                       type={type}
                       placeholder={emptyState}
                       onChange={onChange}
                       validation={validation.validation}
                       autoComplete={autoComplete} />
                {message ? <Message>{message}</Message> : null}
            </Wrapper>
        </FlexBlock>
    ))
}

TextField.defaultProps   = {
    disabled: false,
    validation: { validation: VALIDATION_STATES.NONE }
}
TextField.COMPONENT_NAME = "TextField"
