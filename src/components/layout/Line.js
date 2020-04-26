// @flow

import styled from "styled-components"

export const Line = styled.hr`
  border: 1px solid ${({ color }) => color ? color : "inherit"};
`
