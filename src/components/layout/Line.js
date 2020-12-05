// @flow

import styled     from "styled-components"
import { COLORS } from "styles/colors"

export const Line = styled.hr`
  border: 1px solid ${({ color }) => color
                                     ? color
                                     : COLORS.LIGHT_GREY};
`
