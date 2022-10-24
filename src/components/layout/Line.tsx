import styled     from "styled-components"
import { COLORS } from "styles/colors"

type Props = {
  color?: string,
}

export const Line = styled.hr<Props>`
  background: ${({ color }) => color ? color : COLORS.LIGHT_GREY};
  height: 2px;
  border: none;
  margin: unset;
`
