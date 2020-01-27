// @flow

import { Button }                          from "components/forms/Button"
import type { ColorProps, ContainerProps } from "styles/types"
import styled                              from "styled-components"
import { COLORS, dark, veryLight }         from "styles/colors"

// eslint-disable-next-line
type Props = {
    children? :any,
    onClick? :Function,
    groupKey? :string,
} & ColorProps & ContainerProps

const COMPONENT_NAME = "InlineButton"

// @deprecated ...use <Button inline /> or change this component to do that
export const InlineButton = styled(Button).attrs(() => ({
    fluid                : false,
    primary              : false,
    flat                 : true,
    compact              : true,
    "data-component-name": COMPONENT_NAME,
}))`
&&&& {
  padding: 0;
  min-width: auto;
  line-height: 1em;
  color: ${(props :Props) => props.color};

  :hover:hover, :focus:focus {
    color: ${(props :Props) => veryLight(props.color)};
    background-color: unset;
  }
  
  :active:active {
    color: ${(props :Props) => dark(props.color)};
    background-color: unset;
  }
}
`

InlineButton.COMPONENT_NAME = COMPONENT_NAME
InlineButton.defaultProps   = {
    color: COLORS.BLUE,
}
