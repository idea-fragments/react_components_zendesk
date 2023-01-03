import {
  Field as ZField,
  Label,
  Message,
}                            from "@zendeskgarden/react-forms"
import { TextFieldProps }    from "components/forms/formField.types"
import { Hint }              from "components/forms/Hint"
import { TextAreaProps }     from "components/forms/textfields/TextArea"
import { VALIDATION_STATES } from "components/forms/validationStates"
import { FlexBox }           from "components/layout/FlexBox"
import React, {
  ChangeEvent,
  ComponentType,
  forwardRef,
  PropsWithChildren
}                            from "react"
import styled, { css }       from "styled-components"
import {
  dark,
  fade
}                            from "styles/colors"
import { FONT_SIZES }        from "styles/typography"

type FieldProps = TextFieldProps | (
  Omit<TextAreaProps, "onChange">
  & { onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void }
  )

type Props = PropsWithChildren<{
  WrappedComponent: ComponentType<FieldProps & any>
  compact?: boolean,
}> & FieldProps

const Field = styled(ZField)`
  width: ${({ compact }: Props) => compact ? "auto" : "100%"};
`

export let TextFieldWrapper = forwardRef(({
                                            className,
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
                                          }: Props, ref) => {
  message = validation?.message || message
  return <Container className={className}
                    withRows
                    gap={"unset"}
                    fluid={fluid}>
    {/* @ts-ignore */}
    <Field compact={compact}>
      {label ? <Label>{label}</Label> : null}
      {
        hint
        ? <Hint _css={css`&&& {font-size: ${FONT_SIZES.XS};}`}>
          {hint}
        </Hint>
        : null
      }
      <WrappedComponent
        placeholder={emptyState}
        ref={ref}
        validation={validation?.validation}
        {...props}
        value={value}
        onChange={onChange}
      />
      {
        message
        ? <Message
          css={`&&& {
            font-size: ${FONT_SIZES.XS};
          }`}
          validation={validation?.validation}>
          {message}
        </Message>
        : null
      }
    </Field>
  </Container>
})

const hoverFocusStyling = css`
  :hover {
    border-color: ${({ theme }) => theme.styles.colorPrimary};
  }

  :focus {
    border-color: ${({ theme }) => dark(theme.styles.colorPrimary)};
    box-shadow: ${({ theme }) => `0 0 0 3px ${fade(theme.styles.colorPrimary)}`};
  }
`

// @ts-ignore
TextFieldWrapper = styled(TextFieldWrapper)`
  &&&& {
    font-size: inherit;
    ${(p) => !p.disabled ? hoverFocusStyling : ""}
  }
`

TextFieldWrapper.defaultProps = {
  disabled:   false,
  validation: { validation: VALIDATION_STATES.NONE },
}

const Container = styled(FlexBox)`
  ${({ fluid }) => fluid ? "width: 100%;" : ""}
  && * {
    font-size: inherit;
  }
`
