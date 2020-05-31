// @flow


import {
    Tag as ZTag,
    Close as ZClose,
}             from "@zendeskgarden/react-tags"
import styled from "styled-components"

export const Tag   = styled(ZTag)`
  && {
    height: unset;
    padding: .3rem 12px;
    
    span {
      line-height: 1rem;
    }
  }
`
export const Close = styled(ZClose)`
  &&& { height: 26px; }
`
