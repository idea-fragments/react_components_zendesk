// @ts-ignore
import {
  FauxInput,
  Input
}                           from "@zendeskgarden/react-forms"
import { TextFieldProps }   from "components/forms/formField.types"
import { TextFieldWrapper } from "components/forms/textfields/TextFieldWrapper"
import React, {
  ChangeEvent,
  forwardRef
}                           from "react"
import styled               from "styled-components"

type NewOnChangeFunc = (
  value: string,
  event: ChangeEvent<HTMLInputElement>
) => void
type OldOnChangeFunc = (event: ChangeEvent<HTMLInputElement>) => void

type OriginalProps = TextFieldProps & { useNewOnChange?: false }
type PropsWithNewOnChange = Omit<TextFieldProps, "onChange"> & {
  onChange: NewOnChangeFunc,
  useNewOnChange: true,
}

type Props = PropsWithNewOnChange | OriginalProps

export let TextField = forwardRef(({
                                     faux,
                                     onChange,
                                     small,
                                     useNewOnChange = false,
                                     value,
                                     ...props
                                   }: Props, ref) => {
  // @ts-ignore
  props = { ...props, isCompact: small }

  const notifyParentOfChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (useNewOnChange === true) {
      (onChange as NewOnChangeFunc)(e.target.value, e)
      return
    }

    (onChange as OldOnChangeFunc)(e)
  }

  const valueProp = faux ? { children: value } : { value }
  return <TextFieldWrapper {...props}
                           {...valueProp}
                           ref={ref}
                           onChange={notifyParentOfChange}
                           WrappedComponent={faux ? FauxInput : Input} />

})

// @ts-ignore
TextField = styled(TextField)``

// @ts-ignore
TextField.COMPONENT_NAME = "TextField"
