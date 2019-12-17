// @flow

import { css }                                   from "styled-components"
import { dark, lighter }                         from "styles/colors"
import { textWithColor, textColorForBackground } from "styles/mixins"

export const getInlineStyling = css`
  ${({ inline }) => inline ? inlineWithText : ""}
`

export const inlineWithText = css`
  padding: 0;
  width: unset;
`

export const textColorForButton = css`
  ${({ flat, inline, primary }) => flat || inline || !primary ? textColorForFlatButton : textColorForBackground}
`

export const textColorForFlatButton = css`
  ${textWithColor}
  ${({ flat, primary }) => flat || !primary ? flatButtonStates : inlineButtonStates}
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
