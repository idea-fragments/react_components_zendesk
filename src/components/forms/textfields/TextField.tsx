// @ts-ignore
import { Input }                          from "@zendeskgarden/react-forms"
import { TextFieldProps }                 from "components/forms/formField.types"
import { TextFieldWrapper }               from "components/forms/textfields/TextFieldWrapper"
import React, { ChangeEvent, forwardRef } from "react"
import styled                             from "styled-components"

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
                                     onChange,
                                     useNewOnChange = false,
                                     ...props
                                   }: Props, ref) => {
  const notifyParentOfChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (useNewOnChange === true) {
      (onChange as NewOnChangeFunc)(e.target.value, e)
      return
    }

    (onChange as OldOnChangeFunc)(e)
  }

  return <TextFieldWrapper {...props}
                           ref={ref}
                           onChange={notifyParentOfChange}
                           WrappedComponent={Input} />

})

// @ts-ignore
TextField                = styled(TextField)``
// @ts-ignore
TextField.COMPONENT_NAME = "TextField"
