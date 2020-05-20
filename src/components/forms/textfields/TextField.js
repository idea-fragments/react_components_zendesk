// @flow

import type { TextFieldProps } from "components/forms/formField.types"
import { Input }               from "@zendeskgarden/react-forms"
import { TextFieldWrapper }    from "components/forms/textfields/TextFieldWrapper"
import * as React              from "react"
import { useObserver }         from "mobx-react"
import styled                  from "styled-components"

export let TextField = (props :TextFieldProps<>) => {
    return useObserver(() => (
        <TextFieldWrapper {...props}
                          WrappedComponent={Input} />
    ))
}

TextField = styled(TextField)``
TextField.COMPONENT_NAME = "TextField"
