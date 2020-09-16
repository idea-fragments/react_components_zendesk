// @flow

import { css }                                   from "styled-components"
import { dark, light, lighter }                  from "styles/colors"
import { textWithColor, textColorForBackground } from "styles/mixins"

export const getInlineStyling = css`
  ${({ inline }) => inline ? inlineWithText : ""}
`

export const inlineWithText = css`
  padding: 0;
  //width: unset;
  min-width: auto;
  line-height: normal;
`

export const textColorForButton = css`
  ${({ flat, inline, primary }) => flat || inline || !primary
                                   ? textColorForFlatButton
                                   : textColorForBackground}
`

export const textColorForFlatButton = css`
  ${textWithColor}
  ${({ inline }) => inline ? inlineButtonStates : flatButtonStates}
`

export const buttonLikeHoverable = css`
    background: ${({ flat, primary, inline, color }) => flat || !primary || inline
                                                        ? "transparent"
                                                        : color};
    
    :hover {
      background: ${({ color }) => light(color)};
    }
    
    :active {
      background: ${({ color }) => dark(color)};
    }
    
    ${textColorForButton}
`

const flatButtonStates = css`
  :hover, :active {
    ${textColorForBackground}
  }
`

const inlineButtonStates = css`
  :hover:hover, :focus:focus {
    color: ${(props) => lighter(props.color)};
    background-color: unset;
  }
  :active:active {
    color: ${(props) => dark(props.color)};
    background-color: unset;
  }
`
