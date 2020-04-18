// @flow

import styled from "styled-components"

export const OpacityTransition = styled.div`
  opacity: ${({ opacity }) => opacity};
  transition: opacity .25s ease-in-out;
`
OpacityTransition.defaultProps = {
    opacity: 1,
}
