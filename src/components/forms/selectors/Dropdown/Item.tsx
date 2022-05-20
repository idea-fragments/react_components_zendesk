import {
  AddItem,
  HeaderItem,
  Item as ZItem,
  NextItem,
  PreviousItem
}                              from "@zendeskgarden/react-dropdowns"
import { IItemProps }          from "@zendeskgarden/react-dropdowns/dist/typings/Menu/Items/Item"
import { buttonLikeHoverable } from "components/forms/buttonMixins"
import { SelectorOption }      from "components/forms/selectors/types"
import { ComponentType }       from "react"
import styled                  from "styled-components"
import { Theme }               from "styles/theme/Theme.type"

export const Item = styled(ZItem).attrs(({ danger, theme }: {
  danger?: boolean,
  theme: Theme
}) => {
  if (!danger) return
  return { color: theme.styles.colorDanger, primary: true }
})`
  &&&& {
    ${({ danger }) => danger ? buttonLikeHoverable : ""}
  }
`

export const getItemType = (o: SelectorOption): ComponentType<IItemProps> | typeof Item => {
  if (o.isNextItem) return NextItem
  if (o.isBackItem) return PreviousItem
  if (o.isAddItem) return AddItem
  if (o.isHeaderItem) return HeaderItem

  return Item
}
