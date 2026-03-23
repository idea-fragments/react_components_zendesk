import { Field as ZField } from "@zendeskgarden/react-forms"
import { TextFieldProps } from "components/forms/formField.types"
import { Hint } from "components/text/Hint"
import { Message } from "components/forms/Message"
import { TextAreaProps } from "components/forms/textfields/TextArea"
import { VALIDATION_STATES } from "components/forms/validationStates"
import { FlexBox } from "components/layout/FlexBox"
import { Label } from "components/text/Label"
import { Text } from "components/text/Text"
import { Nullable } from "global"
import React, {
  ChangeEvent,
  ComponentType,
  forwardRef,
  PropsWithChildren,
  useCallback,
} from "react"
import styled, { css } from "styled-components"
import { dark, fade } from "styles/colors"
import { SPACINGS } from "styles/spacings"
import { FONT_SIZES } from "styles/typography"

type FieldProps = TextFieldProps | TextAreaProps

type Props = PropsWithChildren<{
  WrappedComponent: ComponentType<
    Omit<FieldProps, "onChange" | "validation"> & {
      onChange:
        | ((e: ChangeEvent<HTMLInputElement>) => void)
        | ((e: ChangeEvent<HTMLTextAreaElement>) => void)
      validation?: string
    }
  >
  compact?: boolean
}> &
  FieldProps

const Field = styled(ZField)`
  width: ${({ compact }: Props) => (compact ? "auto" : "100%")};
`

export let TextFieldWrapper = forwardRef(
  (
    {
      className,
      compact,
      disabled = false,
      emptyState,
      fluid,
      hint,
      label,
      message,
      required,
      validation = { validation: VALIDATION_STATES.NONE },
      value,
      WrappedComponent,
      onChange,
      ...props
    }: Props,
    ref,
  ) => {
    const symbolProp = (props as TextFieldProps).symbolProp

    const notifyParentOfChange = useCallback(
      (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
        // @ts-ignore
        onChange(e.target.value, e)
      },
      [onChange],
    )

    message = validation?.message || message
    return (
      <Container
        className={className}
        withRows
        gap={"unset"}
        fluid={fluid}>
        {/* @ts-ignore */}
        <Field compact={compact}>
          {label || required ? (
            <FlexBox gap={".3em"}>
              {label ? (
                <Label
                  _css={css`
                    margin-bottom: ${SPACINGS.XS};
                  `}>
                  {label}
                </Label>
              ) : null}
              {required ? (
                <Text danger>
                  <b>*</b>
                </Text>
              ) : null}
            </FlexBox>
          ) : null}

          {hint ? (
            <Hint
              _css={css`
                &&& {
                  font-size: ${FONT_SIZES.XS};
                }
              `}>
              {hint}
            </Hint>
          ) : null}

          <InputWrapper symbolProp={symbolProp}>
            <WrappedComponent
              disabled={disabled}
              placeholder={emptyState as string | undefined}
              // @ts-ignore
              ref={ref}
              validation={validation?.validation}
              {...props}
              value={value}
              onChange={notifyParentOfChange}
            />
          </InputWrapper>
          {message ? (
            <Message
              _css={`
                &&& {
                  font-size: ${FONT_SIZES.XS};
                }
              `}
              validation={validation?.validation}>
              {message}
            </Message>
          ) : null}
        </Field>
      </Container>
    )
  },
)

const hoverFocusStyling = css`
  :hover {
    border-color: ${({ theme }) => theme.styles.colorPrimary};
  }

  :focus {
    border-color: ${({ theme }) => dark(theme.styles.colorPrimary)};
    box-shadow: ${({ theme }) =>
      `0 0 0 3px ${fade(theme.styles.colorPrimary)}`};
  }
`

TextFieldWrapper = styled(TextFieldWrapper)`
  &&&& {
    font-size: inherit;
    ${(p) => (!p.disabled ? hoverFocusStyling : "")}
  }
`

const Container = styled(FlexBox)`
  ${({ fluid }) => (fluid ? "width: 100%;" : "")}
  && * {
    font-size: inherit;
  }
`

const InputWrapper = styled(FlexBox)<{ symbolProp: Nullable<string> }>`
  ${({ symbolProp }) => {
    return symbolProp
      ? css`
          position: relative;

          &&:before {
            content: "${symbolProp}";
            position: absolute;
            left: 0.75em;
            top: 50%;
            font-size: 14px;
            transform: translateY(-50%);
          }
        `
      : ""
  }};
`
