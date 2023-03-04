import { Textarea }          from "@zendeskgarden/react-forms"
import { FormFieldProps }    from "components/forms/formField.types"
import { TextFieldWrapper }  from "components/forms/textfields/TextFieldWrapper"
import { VALIDATION_STATES } from "components/forms/validationStates"
import React, {
  ChangeEvent,
  FC
}                            from "react"

export type TextAreaProps = FormFieldProps & {
  autoExpand?: boolean,
  characterLimit?: number,
  resizable?: boolean,
  value?: string,
  onChange: (text: string, e: ChangeEvent<HTMLTextAreaElement>) => void,
}


export const TextArea: FC<TextAreaProps> = ({
                                              autoExpand = false,
                                              characterLimit,
                                              hint,
                                              onChange,
                                              resizable,
                                              ...props
                                            }) => {
  const validation = () => {
    if (!characterLimit) return props.validation

    const currentLength        = props.value?.length ?? 0
    const limitValidationState = currentLength > characterLimit
                                 ? VALIDATION_STATES.ERROR
                                 : VALIDATION_STATES.NONE
    return {
      validation: limitValidationState,
      message:    <>Used {currentLength} of {characterLimit} characters.</>
    }
  }

  return <TextFieldWrapper
    {...props}
    validation={validation()}
    // @ts-ignore
    isResizable={resizable}
    minRows={autoExpand ? 2 : undefined}
    maxRows={autoExpand ? 20 : undefined}
    onChange={onChange}
    // @ts-ignore
    WrappedComponent={Textarea} />
}

// @ts-ignore
TextArea.COMPONENT_NAME = "TextArea"
