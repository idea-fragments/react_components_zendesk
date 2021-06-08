// @flow

import styled                 from "styled-components"
import { COLORS }             from "styles/colors"
import type { ComponentType } from "react"

type Props = {
    color? :string,
}

export const Line :ComponentType<Props> = styled.hr`
  background: ${({ color }) => color ? color : COLORS.LIGHT_GREY};
  height: 2px;
  border: none;
  margin: unset;
`
