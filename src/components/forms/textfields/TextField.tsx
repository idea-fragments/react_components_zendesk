// @ts-ignore
import { Input }                  from "@zendeskgarden/react-forms"
import type { TextFieldProps }    from "components/forms/formField.types"
import { TextFieldWrapper }       from "components/forms/textfields/TextFieldWrapper"
import React, { ChangeEvent, FC } from "react"
import styled                     from "styled-components"

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

export let TextField: FC<Props> = ({
                                     onChange,
                                     useNewOnChange = false,
                                     ...props
                                   }) => {

  const notifyParentOfChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (useNewOnChange === true) {
      (onChange as NewOnChangeFunc)(e.target.value, e)
      return
    }

    (onChange as OldOnChangeFunc)(e)
  }

  return <TextFieldWrapper {...props}
                           onChange={notifyParentOfChange}
                           WrappedComponent={Input} />
}

// @ts-ignore
TextField                = styled(TextField)``
// @ts-ignore
TextField.COMPONENT_NAME = "TextField"
