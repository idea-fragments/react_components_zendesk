import {
  FauxInput as ZFauxInput,
  Input as ZInput,
} from "@zendeskgarden/react-forms"
import { TextFieldProps } from "components/forms/formField.types"
import { TextFieldWrapper } from "components/forms/textfields/TextFieldWrapper"
import React, { forwardRef, ReactNode } from "react"
import styled, { css } from "styled-components"
import { CSSProp } from "styles/types"

export let TextField = forwardRef(
  ({ faux, onChange, small, value, ...props }: TextFieldProps, ref) => {
    // @ts-ignore
    props = { ...props, isCompact: small }

    const valueProp = faux ? { children: value } : { value }
    return (
      <TextFieldWrapper
        {...props}
        {...valueProp}
        ref={ref}
        onChange={onChange}
        // @ts-ignore
        WrappedComponent={faux ? FauxInput : Input}
      />
    )
  },
)

// @ts-ignore
TextField = styled(TextField)``

// @ts-ignore
TextField.COMPONENT_NAME = "TextField"

const FauxInput = styled(ZFauxInput)<{ symbolProp: ReactNode } & CSSProp>`
  ${({ symbolProp }) => {
    return symbolProp ? "padding-left: 2em" : ""
  }};
  ${({ _css }) => _css}
`
const Input = styled(ZInput)<{ symbolProp: string } & CSSProp>`
  ${({ symbolProp }) => {
    return symbolProp
      ? css`
          padding-left: 2em;
        `
      : ""
  }};
  ${({ _css }) => _css}
`
