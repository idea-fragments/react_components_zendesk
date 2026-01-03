import { Button, ButtonProps } from "components/forms/Button"
import React from "react"
import styled from "styled-components"

export type IconButtonProps = Omit<ButtonProps, "children">

export const IconButton = styled(
  ({ primary, flat, pill, ...props }: IconButtonProps) => {
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
    height: auto;
  }
`
