// @flow
/* eslint no-use-before-define: 0 */

import styled, { css }            from "styled-components"
import { textColorForBackground } from "styles/mixins"
import { SPACINGS }               from "styles/spacings"

// eslint-disable-next-line no-unused-vars
type Props = {
    titleHidden :boolean
}

const hideTitle = css`
  & > h1,
  & > h2,
  & > h3,
  & > h4,
  & > h5,
  & > h6 {
    display: none;
  }
`

// $FlowFixMe
export const Section = styled.section`
  background: ${({ color }) => color ? color : "transparent"};
  padding: ${SPACINGS.XXXL} 0;
  ${({color}) => color ? textColorForBackground : ""}
  ${({titleHidden}) => titleHidden ? hideTitle : ""}
  
  & > :first-child {
    margin-top: 0;
  }
  
  & > ${Section} & {
    padding-bottom: 0;
  }
`
