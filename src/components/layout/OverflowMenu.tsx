import { mdiDotsVertical }    from "@mdi/js"
import { Button }             from "components/forms/Button"
import { MenuPlacement } from "components/forms/selectors/Dropdown"
import { Dropdown }           from "components/forms/selectors/Dropdown"
import React                  from "react"
import styled                 from "styled-components"
import { COLORS, darker }     from "styles/colors"

const COMPONENT_NAME = "OverflowMenu"

export type OverflowMenuItem = {
  label: string,
  action: () => void
}

type Props = {
  placement?: MenuPlacement,
  actions: Array<OverflowMenuItem>
}

const OverflowButton = styled(Button).attrs({
  icon:                  mdiDotsVertical,
  "data-component-name": COMPONENT_NAME,
  color:                 darker(COLORS.GREY),
  "aria-label":          "Row actions",
  inline:                true,
})`
  align-self: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`

export const OverflowMenu = ({ actions, placement }: Props) => (
  <Dropdown options={actions}
            placement={placement}
            returnItemOnChange
            valueField={"label"}
            keyField={"label"}
            // @ts-ignore
            onChange={({ action }) => { action() }}
            // @ts-ignore
            trigger={<OverflowButton />}
  />
)
