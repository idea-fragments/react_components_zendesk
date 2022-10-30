import { mdiDotsVertical }                   from "@mdi/js"
import { OverflowButton as ZOverflowButton } from "@zendeskgarden/react-tables"
import { Button }                            from "components/forms/Button"
import {
  Dropdown,
  MenuPlacement
}                                            from "components/forms/selectors/Dropdown"
import React                                 from "react"
import styled                                from "styled-components"
import { lightness }                         from "styles/colors"

const COMPONENT_NAME = "OverflowMenu"

export type OverflowMenuItem = {
  label: string,
  action: () => void
}

type Props = {
  placement?: MenuPlacement,
  actions: Array<OverflowMenuItem>
}

const OverflowButton = styled(ZOverflowButton).attrs(({ theme }) => ({
  icon:                  mdiDotsVertical,
  "data-component-name": COMPONENT_NAME,
  compact:               true,
  color:                 lightness(theme.styles.textColorPrimary, 95),
  "aria-label":          "Row actions",
  size:                  "small",
  primary:               true,
  iconSize:              "1.2rem",
  as:                    Button,
  // color:                 darker(COLORS.GREY),
  // pill:                  true,
}))`
  &&&& {
    margin-top: 4px;
    padding: 0 4px;
  }
`

export const OverflowMenu = ({ actions, placement }: Props) => (
  <Dropdown options={actions}
            placement={placement}
            returnItemOnChange
            labelField={"label"}
            keyField={"label"}
    // @ts-ignore
            onChange={({ action }) => { action() }}
    // @ts-ignore
            trigger={<OverflowButton />}
  />
)
