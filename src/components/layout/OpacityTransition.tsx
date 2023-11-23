import styled from "styled-components"

export const OpacityTransition = styled.div`
  opacity: ${({ opacity = 1 }: { opacity: number }) => opacity};
  transition: opacity 0.25s ease-in-out;
`
