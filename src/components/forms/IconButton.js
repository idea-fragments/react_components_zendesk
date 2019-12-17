// @flow

import { Button, Props as ButtonProps } from "components/forms/Button"
import React                            from "react"
import styled                           from "styled-components"

const COMPONENT_NAME = "IconButton"

export const IconButton = styled((props :ButtonProps) => {
    return <Button {...props} primary={false} flat pill fluid={false} />
})`
  && {
    padding: .5em;
    min-width: 0;
  }
`

IconButton.COMPONENT_NAME = COMPONENT_NAME
IconButton.defaultProps   = { ...Button.defaultProps, children: "" }
