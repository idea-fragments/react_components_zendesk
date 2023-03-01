import {
  AddItem,
  HeaderItem,
  Item as ZItem,
  NextItem,
  PreviousItem
}                         from "@zendeskgarden/react-dropdowns"
import { IItemProps }     from "@zendeskgarden/react-dropdowns/dist/typings/types"
import {
  buttonLikeHoverable,
  textColorForButton
}                         from "components/forms/buttonMixins"
import { SelectorOption } from "components/forms/selectors/types"
import { ComponentType }  from "react"
import styled, {
  css,
  StyledProps
}                         from "styled-components"
import { SPACINGS }       from "styles/spacings"
import { CSSProp }        from "styles/types"
import { FONT_SIZES }     from "styles/typography"

export type ItemProps = Omit<IItemProps, "onClick"> & {
  danger?: boolean,
  disabled?: boolean,
} & CSSProp

export const Item = styled(ZItem).attrs(({ danger, theme, ...props }: StyledProps<ItemProps>) => {
  if (!danger) return { color: theme.styles.textColorPrimary, primary: false, ...props }
  return { color: theme.styles.colorDanger, primary: true, ...props }
})<ItemProps>`
  &&&& {
    ${({ disabled }) => {
      if (disabled) return ""

      return css`
        ${buttonLikeHoverable};
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

    ${({ _css }: CSSProp) => _css}
  }
`

export const getItemType = (o: SelectorOption): ComponentType<ItemProps> | typeof Item => {
  if (o.isNextItem) return NextItem
  if (o.isBackItem) return PreviousItem
  if (o.isAddItem) return AddItem
  if (o.isHeaderItem) return HeaderItem

  return Item
}
