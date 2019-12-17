// @flow

import { InlineButton } from "components/forms/InlineButton"
import { ButtonLink }   from "components/navigation/ButtonLink"
import React            from "react"
import styled           from "styled-components"

export const InlineButtonLink = styled((props) => <InlineButton as={ButtonLink}
                                                                {...props} />)``
