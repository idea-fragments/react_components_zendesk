import { Button, ButtonProps } from "components/forms/Button"
import React from "react"
import styled from "styled-components"

const COMPONENT_NAME = "IconButton"

export type IconButtonProps = Omit<ButtonProps, "children">

export const IconButton = styled(
  ({ primary, flat, pill, ...props }: IconButtonProps): JSX.Element => {
    return (
      <Button
        flat={flat != null ? flat : true}
        fluid={false}
        {...props}
        pill={pill != null ? pill : true}
        primary={primary ?? false}
      />
    )
  },
)<IconButtonProps>`
  && {
    padding: 0.5em;
    min-width: 0;
  }
`

// @ts-ignore
IconButton.COMPONENT_NAME = COMPONENT_NAME
