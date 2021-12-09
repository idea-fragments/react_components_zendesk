import { Button, Props as ButtonProps } from "components/forms/Button"
import React                            from "react"
import styled                           from "styled-components"

const COMPONENT_NAME = "IconButton"

type Props = Omit<ButtonProps, "children">

export const IconButton = styled((props: Props): JSX.Element => {
  return <Button primary={false} flat {...props} pill fluid={false} />
})`
  && {
    padding: .5em;
    min-width: 0;
  }
`

// @ts-ignore
IconButton.COMPONENT_NAME = COMPONENT_NAME
