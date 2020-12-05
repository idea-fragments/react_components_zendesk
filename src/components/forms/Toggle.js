// @flow

import { Hint }                     from "components/forms/Hint"
import { Label }                    from "components/forms/Label"
import React                        from "react"
import styled, { css }              from "styled-components"
import { Field, Toggle as ZToggle } from "@zendeskgarden/react-forms"
import { dark }                     from "styles/colors"

type Props = {
    checked? :boolean,
    label? :string,
    hint? :hint,
}

export let Toggle = ({ label, hint, ...props } :Props) => {
    return <Field>
        <ZToggle {...props}>
            <Label hidden={!label}>{label}</Label>
            {hint ? <Hint>{hint}</Hint> : null}
        </ZToggle>
    </Field>
}

const toggleColor = css`
  + label:before {
    border-color: ${({ theme }) => theme.styles.colorSuccess};
    background-color: ${({ theme }) => theme.styles.colorSuccess};
  }
  
  &&& + label:active:before {
    background-color: ${({ theme }) => dark(theme.styles.colorSuccess)};
  }
`

Toggle = styled(Toggle)`
  font-size: inherit;

  &&&&& {
    ${({ checked }) => checked ? toggleColor : ""}
  }
`
