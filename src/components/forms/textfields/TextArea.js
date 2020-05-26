// @flow

import type { FormFieldProps } from "components/forms/formField.types"
import { Textarea }            from "@zendeskgarden/react-forms"
import { TextFieldWrapper }    from "components/forms/textfields/TextFieldWrapper"
import * as React              from "react"
import { useObserver }         from "mobx-react"

type Props = FormFieldProps & {
    resizable? :boolean,
    value? :string,
    onChange :(SyntheticInputEvent<HTMLTextAreaElement>) => void
}

export const TextArea = (props :Props) => {
    return <TextFieldWrapper {...props}
                             WrappedComponent={Textarea} />
}

TextArea.COMPONENT_NAME = "TextArea"
