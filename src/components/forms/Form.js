// @flow

import { FlexBlock }           from "components/layout/FlexBlock"
import React                   from "react"
import styled                  from "styled-components"
import { SPACINGS }            from "styles/spacings"
import type { ContainerProps } from "styles/types"
import type { PromiseFunc }    from "utils/function.types"

type Props = {
    onSubmit :PromiseFunc<>,
    children :any
} & ContainerProps

export let Form = ({ onSubmit, className, children } :Props) => {
    const handleSubmit = (e :SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault()
        onSubmit()
    }

    return <FlexBlock withRows
                      as={"form"}
                      onSubmit={handleSubmit}
                      spacing={SPACINGS.SM}
                      className={className}>
        <HiddenSubmit />
        {children}
    </FlexBlock>
}

const HiddenSubmit = styled.input.attrs({
    type    : "submit",
    tabIndex: "-1",
})`
  position: absolute;
  left: -9999px;
  width: 1px;
  height: 1px;
`

Form = styled(Form)``
