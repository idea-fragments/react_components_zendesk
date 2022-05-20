import { css }                                   from "styled-components"
import { dark, light, lighter }                  from "styles/colors"
import { textColorForBackground, textWithColor } from "styles/mixins"

export const getInlineStyling = css<{ inline?: boolean }>`
  ${({ inline }) => inline ? inlineWithText : ""}
`

export const inlineWithText = css`
  padding: 0;
  //width: unset;
  min-width: auto;
  line-height: normal;
`

export const textColorForButton = css<{
  color: string,
  flat?: boolean,
  inline?: boolean,
  primary?: boolean,
}>`
  ${({ flat, inline, primary }) => flat || inline || !primary
                                   ? textColorForFlatButton
                                   : textColorForBackground}
`

export const textColorForFlatButton = css<{
  color: string,
  flat?: boolean,
  inline?: boolean,
  primary?: boolean,
}>`
  ${textWithColor}
  ${({ inline }) => inline ? inlineButtonStates : flatButtonStates}
`

export const buttonLikeHoverable = css<{
  color: string,
  flat?: boolean,
  inline?: boolean,
  primary?: boolean,
}>`
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

const inlineButtonStates = css<{ color: string }>`
  :hover:hover, :focus:focus {
    color: ${(props) => lighter(props.color)};
    background-color: unset;
  }

  :active:active {
    color: ${(props) => dark(props.color)};
    background-color: unset;
  }
`
