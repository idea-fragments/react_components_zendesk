import {
  AddItem as ZAddItem,
  HeaderItem as ZHeaderItem,
  Item as ZItem,
  NextItem as ZNextItem,
  PreviousItem as ZPreviousItem,
} from "@zendeskgarden/react-dropdowns"
import { IItemProps } from "@zendeskgarden/react-dropdowns/dist/typings/types"
import {
  buttonLikeHoverable,
  textColorForButton,
} from "components/forms/buttonMixins"
import { SelectorOption } from "components/forms/selectors/types"
import { ComponentType } from "react"
import styled, { css, StyledProps } from "styled-components"
import { fade } from "styles/colors"
import { SPACINGS } from "styles/spacings"
import { CSSProp } from "styles/types"
import { FONT_SIZES, FONT_WEIGHTS } from "styles/typography"

export type ItemProps = Omit<IItemProps, "onClick"> & {
  danger?: boolean
  disabled?: boolean
} & CSSProp

export const Item = styled(ZItem).attrs(
  ({ danger, theme, ...props }: StyledProps<ItemProps>) => {
    if (!danger) {
      return {
        color: theme.styles.textColorPrimary,
        primary: false,
        ...props,
      }
    }

    return { color: theme.styles.colorDanger, primary: true, ...props }
  },
)<ItemProps>`
  &&&& {
    ${({ color, disabled, theme }) => {
      if (disabled) return ""

      if (color !== theme.styles.textColorPrimary) {
        return buttonLikeHoverable
      }

      return css`
        &[aria-selected="true"] {
          background: ${fade(theme.styles.colorPrimary, 0.9)};
        }
      `
    }};

    font-size: ${FONT_SIZES.SM};
    margin-bottom: ${SPACINGS.XS};

    :first-child {
      margin-top: 4px;
    }

    *[data-garden-id="dropdowns.item_icon"] {
      ${({ color, theme }) => {
        if (color !== theme.styles.textColorPrimary) return textColorForButton

        return css`
          color: ${theme.styles.colorPrimary};
        `
      }};
    }

    ${({ _css }: CSSProp) => {
      return _css
    }}
  }
`

const NextItem = styled(ZNextItem)`
  &&&& {
    font-size: ${FONT_SIZES.SM};
    font-weight: ${FONT_WEIGHTS.SEMI_BOLD};
  }
`

const PreviousItem = styled(ZPreviousItem)`
  &&&& {
    font-size: ${FONT_SIZES.SM};
    font-weight: ${FONT_WEIGHTS.SEMI_BOLD};
  }
`

const AddItem = styled(ZAddItem)`
  &&&& {
    font-size: ${FONT_SIZES.SM};
    font-weight: ${FONT_WEIGHTS.SEMI_BOLD};
  }
`

const HeaderItem = styled(ZHeaderItem)`
  &&&& {
    font-size: ${FONT_SIZES.SM};
    font-weight: ${FONT_WEIGHTS.BOLD};
  }
`

export const getItemType = (
  o: SelectorOption<any>,
): ComponentType<ItemProps> | typeof Item => {
  if (o.isNextItem) return NextItem
  if (o.isBackItem) return PreviousItem
  if (o.isAddItem) return AddItem
  if (o.isHeaderItem) return HeaderItem

  return Item
}
