import { mdiDotsVertical } from "@mdi/js"
import { OverflowButton as ZOverflowButton } from "@zendeskgarden/react-tables"
import { Button, ButtonProps } from "components/forms/Button"
import { Dropdown, MenuPlacement } from "components/forms/selectors/Dropdown"
import React, { FC } from "react"
import styled from "styled-components"
import { lightness } from "styles/colors"
import { CSSProp } from "styles/types"

const COMPONENT_NAME = "OverflowMenu"

export type OverflowMenuItem = {
  action: () => void
  label: string
}

export type OverflowButtonProps = ButtonProps & CSSProp

export const OverflowButton = styled(
  ZOverflowButton,
).attrs<OverflowButtonProps>(
  ({
    ariaLabel = "Row actions",
    color,
    icon = mdiDotsVertical,
    iconSize = "1.2rem",
    primary = true,
    theme,
  }) => ({
    icon,
    "data-component-name": COMPONENT_NAME,
    compact: true,
    color: color ?? lightness(theme.styles.textColorPrimary, 95),
    "aria-label": ariaLabel,
    size: "small",
    primary,
    iconSize,
    as: Button,
    // pill:                  true,
  }),
)`
  &&&& {
    //margin-top: 4px;
    padding-left: 4px;
    padding-right: 4px;
    ${({ _css }: CSSProp) => _css}
  }
`

export type OverflowMenuProps = {
  actions: Array<OverflowMenuItem>
  appendToNode?: HTMLElement
  overflowButtonProps?: OverflowButtonProps
  placement?: MenuPlacement
}

export const OverflowMenu: FC<OverflowMenuProps> = ({
  actions,
  appendToNode,
  overflowButtonProps,
  placement,
}) => (
  <Dropdown
    appendMenuToNode={appendToNode}
    keyField={"label"}
    labelField={"label"}
    // @ts-ignore
    onChange={({ action }) => {
      action()
    }}
    options={actions}
    placement={placement}
    returnItemOnChange
    trigger={<OverflowButton {...overflowButtonProps} />}
  />
)
