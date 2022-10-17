import {
  AddItem,
  HeaderItem,
  Item as ZItem,
  NextItem,
  PreviousItem
}                                                  from "@zendeskgarden/react-dropdowns"
import {
  IItemProps
}                                                  from "@zendeskgarden/react-dropdowns/dist/typings/types"
import { buttonLikeHoverable, textColorForButton } from "components/forms/buttonMixins"
import { SelectorOption }                          from "components/forms/selectors/types"
import { ComponentType }            from "react"
import styled, { css, StyledProps } from "styled-components"
import { SPACINGS }                 from "styles/spacings"
import { FONT_SIZES }                              from "styles/typography"

export type ItemProps = IItemProps & {
  danger?: boolean,
}

export const Item = styled(ZItem).attrs(({ danger, theme }: StyledProps<ItemProps>) => {
  if (!danger) return { color: theme.styles.colorPrimary, primary: false }
  return { color: theme.styles.colorDanger, primary: true }
})<ItemProps>`
  &&&& {
    ${({disabled}) => { 
      if(disabled) return ""
      
      return css`
        ${buttonLikeHoverable};
        color: ${(props) => props.theme.styles.textColorPrimary};
      `
    }};
    
    font-size: ${FONT_SIZES.SM};
    margin-bottom: ${SPACINGS.XS};

    :first-child {
      margin-top: 4px;
    }

    *[data-garden-id="dropdowns.item_icon"] {
      ${textColorForButton};
    }
  }
`

export const getItemType = (o: SelectorOption): ComponentType<ItemProps> | typeof Item => {
  if (o.isNextItem) return NextItem
  if (o.isBackItem) return PreviousItem
  if (o.isAddItem) return AddItem
  if (o.isHeaderItem) return HeaderItem

  return Item
}
