import { css }                                             from "styled-components"
import { dark, light, lighter, lightness, lightnessDelta } from "styles/colors"
import { textColorForBackground, textWithColor }           from "styles/mixins"

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
    background: ${({ primary, color }) => primary
                                          ? lightnessDelta(color, 10)
                                          : lightness(color, 95)};
  }

  :active {
    background: ${({ primary, color }) => primary
                                          ? dark(color)
                                          : lightness(color, 85)};
  }

  ${textColorForButton}
`

const flatButtonStates = css<{ color: string }>`
  :hover, :active {
    color: ${({ color }) => dark(color)};
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
