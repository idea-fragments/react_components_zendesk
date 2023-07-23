import styled from "styled-components"


export const SectionBody = styled.div`
  width: 100%;
  padding: ${({ theme }) => theme.styles.section.body.padding};

  & > :first-child {
    margin-top: 0;
  }

  & > :last-child {
    margin-bottom: 0;
  }
`
