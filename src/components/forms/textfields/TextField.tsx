import {
  FauxInput,
  Input
}                            from "@zendeskgarden/react-forms"
import { TextFieldProps }    from "components/forms/formField.types"
import { TextFieldWrapper }  from "components/forms/textfields/TextFieldWrapper"
import React, { forwardRef } from "react"
import styled                from "styled-components"

export let TextField = forwardRef(({
                                     faux,
                                     onChange,
                                     small,
                                     value,
                                     ...props
                                   }: TextFieldProps, ref) => {
  // @ts-ignore
  props = { ...props, isCompact: small }

  const valueProp = faux ? { children: value } : { value }
  return <TextFieldWrapper
    {...props}
    {...valueProp}
    ref={ref}
    onChange={onChange}
    // @ts-ignore
    WrappedComponent={faux ? FauxInput : Input} />

})

// @ts-ignore
TextField = styled(TextField)``

// @ts-ignore
TextField.COMPONENT_NAME = "TextField"
