import styled from "styled-components"

type Props = {
  color?: string
}

export const Line = styled.hr<Props>`
  background: ${({ color, theme }) =>
    color ? color : theme.styles.colors.grey["300"]};
  height: 2px;
  border: none;
  margin: unset;
`
