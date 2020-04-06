// @flow

import { Button }             from "components/forms/Button"
import type { MenuPlacement } from "components/forms/selectors/Dropdown"
import { Dropdown }           from "components/forms/selectors/Dropdown"
import * as React             from "react"
import { COLORS, darker }     from "styles/colors"
import styled                 from "styled-components"
import {mdiDotsVertical}              from "@mdi/js"

const COMPONENT_NAME = "OverflowMenu"

export type OverflowMenuItem = {
    label :string,
    action :() => void
}

type Props = {
    placement?: MenuPlacement,
    actions :Array<OverflowMenuItem>
}

const OverflowButton = styled(Button).attrs({
    icon                 : mdiDotsVertical,
    "data-component-name": COMPONENT_NAME,
    color                : darker(COLORS.GREY),
    "aria-label"         : "Row actions",
    inline: true,
})`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`

export const OverflowMenu = ({ actions, placement } :Props) => (
    <Dropdown options={actions}
              placement={placement}
              returnItemOnChange
              valueField={"label"}
              keyField={"label"}
              onChange={({ action }) => { action() }}
              trigger={<OverflowButton />}
    />
)

OverflowMenu.COMPONENT_NAME = COMPONENT_NAME
