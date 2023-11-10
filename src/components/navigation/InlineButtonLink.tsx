import { ButtonLink } from "components/navigation/ButtonLink"
import React from "react"
import styled from "styled-components"

export const InlineButtonLink = styled((props) => (
  <ButtonLink
    inline
    {...props}
  />
))`
  text-decoration: none;
`
