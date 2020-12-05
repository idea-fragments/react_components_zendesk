// @flow

import type { FormFieldProps }     from "components/forms/formField.types"
import { VALIDATION_STATES }       from "components/forms/validationStates"
import { FlexBlock }               from "components/layout/FlexBlock"
import type { StyledProps }        from "components/StyledProps.type"
import React, { useState, useRef } from "react"
import type { ComponentType }      from "react"
import { useObserver }             from "mobx-react"
import styled, { css }             from "styled-components"
import { dark, fade }              from "styles/colors"
import {
    Field as ZField,
    Label,
    Hint,
    Message,
}                                  from "@zendeskgarden/react-forms"
import { FONT_SIZES }              from "vendor/react_components_zendesk/src/styles/typography"

type Props = FormFieldProps & {
    WrappedComponent :ComponentType<>,
} & *

const Field = styled(ZField)`
  width: ${({ compact } :Props<>) => compact ? "auto" : "100%"};
`

export let TextFieldWrapper = ({
                                   compact,
                                   emptyState,
                                   fluid,
                                   hint,
                                   label,
                                   message,
                                   validation,
                                   value,
                                   WrappedComponent,
                                   onChange,
                                   ...props
                               } :Props) => {
    message = validation.message || message
    return useObserver(() => (
        <Container withRows spacing={null} fluid={fluid}>
            <Field compact={compact}>
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
                <WrappedComponent
                    placeholder={emptyState}
                    validation={validation.validation}
                    {...props}
                    isResizable={true}
                    resizable={true}
                    value={value}
                    onChange={onChange}
                />
                {
                    message
                    ? <Message
                        css={`&&& {
                          font-size: ${FONT_SIZES.XS};
                        }`}
                        validation={validation.validation}>
                        {message}
                    </Message>
                    : null
                }
            </Field>
        </Container>
    ))
}

TextFieldWrapper.defaultProps   = {
    disabled  : false,
    validation: { validation: VALIDATION_STATES.NONE },
}
TextFieldWrapper.COMPONENT_NAME = "TextFieldWrapper"

const hoverFocusStyling = css`
  :hover {
    border-color: ${({ theme } :StyledProps<>) => theme.styles.colorPrimary};
  }

  :focus {
    border-color: ${({ theme } :StyledProps<>) => dark(theme.styles.colorPrimary)};
    box-shadow: ${({ theme } :StyledProps<>) => `0 0 0 3px ${fade(theme.styles.colorPrimary)}`};
  }
`
TextFieldWrapper        = styled(TextFieldWrapper)`
  &&&& {
    font-size: inherit;
    ${(p) => !p.disabled ? hoverFocusStyling : ""}
  }
`

const Container = styled(FlexBlock)`
  ${({ fluid }) => fluid ? "width: 100%;" : ""}
  && * {
    font-size: inherit;
  }
`
