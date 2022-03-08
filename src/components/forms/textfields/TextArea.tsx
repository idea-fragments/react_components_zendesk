import { FormFieldProps }         from "components/forms/formField.types"
import { Textarea }               from "@zendeskgarden/react-forms"
import { TextFieldWrapper }       from "components/forms/textfields/TextFieldWrapper"
import React, { ChangeEvent, FC } from "react"

type Props = FormFieldProps & {
  resizable?: boolean,
  value?: string,
  onChange: (text: string, e: ChangeEvent<HTMLTextAreaElement>) => void,
}

export const TextArea: FC<Props> = ({ onChange, ...props }) => {
  const notifyParentOfChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    onChange(e.target.value, e)
  }

  return <TextFieldWrapper {...props}
                           onChange={notifyParentOfChange}
                           WrappedComponent={Textarea} />
}

// @ts-ignore
TextArea.COMPONENT_NAME = "TextArea"
