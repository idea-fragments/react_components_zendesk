import { css } from "styled-components"
import { dark, lighter, lightness, lightnessDelta } from "styles/colors"
import { textColorForBackground, textWithColor } from "styles/mixins"

export const getInlineStyling = css<{ inline?: boolean }>`
  ${({ inline }) => (inline ? inlineWithText : "")}
`

export const inlineWithText = css`
  padding: 0;
  //width: unset;
  min-width: auto;
  line-height: normal;
`

export const textColorForButton = css<{
  color: string
  flat?: boolean
  inline?: boolean
  primary?: boolean
}>`
  ${({ flat, inline, primary }) =>
    flat || inline || !primary
      ? textColorForFlatButton
      : textColorForBackground}
`

export const textColorForFlatButton = css<{
  color: string
  flat?: boolean
  inline?: boolean
  primary?: boolean
}>`
  ${textWithColor}
  ${({ inline }) => (inline ? inlineButtonStates : flatButtonStates)}
`

export const buttonLikeHoverable = css<{
  color: string
  flat?: boolean
  inline?: boolean
  primary?: boolean
}>`
  cursor: pointer;
  background: ${({ flat, primary, inline, color }) =>
    flat || !primary || inline ? "transparent" : color};

  @media (hover: hover) {
    &:hover {
      background: ${({ primary, color }) =>
        primary ? lightnessDelta(color, 10) : lightness(color, 95)};
    }
  }

  :active {
    background: ${({ primary, color }) =>
      primary ? dark(color) : lightness(color, 85)};
  }

  transition: border-color 0.25s ease-in-out, box-shadow 0.1s ease-in-out,
    background-color 0.25s ease-in-out, color 0.25s ease-in-out,
    outline-color 0.1s ease-in-out, z-index 0.25s ease-in-out;

  ${textColorForButton}
`

const flatButtonStates = css<{ color: string }>`
  @media (hover: hover) {
    &:hover {
      color: ${({ color }) => dark(color)};
    }
  }

  :active {
    color: ${({ color }) => dark(color)};
  }
`

const inlineButtonStates = css<{ color: string }>`
  @media (hover: hover) {
    &:hover:hover {
      color: ${(props) => lighter(props.color)};
      background-color: unset;
    }
  }

  :focus:focus {
    color: ${(props) => lighter(props.color)};
    background-color: unset;
  }

  :active:active {
    color: ${(props) => dark(props.color)};
    background-color: unset;
  }
`
