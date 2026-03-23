import {
  Section,
  SECTION_PADDING_SIZES,
  SectionProps,
} from "components/layout/Section"
import { SectionBody } from "components/layout/SectionBody"
import { SectionFooter } from "components/layout/SectionFooter"
import { SectionHeader } from "components/layout/SectionHeader"
import { FC, PropsWithChildren, ReactNode } from "react"
import { ColorProps, CSSProp } from "styles/types"

export type CardProps = PropsWithChildren<{
  borderedSections?: boolean
  compact?: boolean
  footerActions?: ReactNode
  headerActions?: ReactNode
  onClick?: () => void
  title?: ReactNode
}> &
  ColorProps &
  CSSProp &
  Pick<SectionProps, "shadowed">

export const Card: FC<CardProps> = ({
  _css,
  borderedSections = false,
  children,
  compact = false,
  color,
  footerActions,
  headerActions,
  onClick,
  shadowed,
  title,
}) => {
  const hasHeader = !!(title || headerActions)
  const hasFooter = !!footerActions

  return (
    <Section
      _css={_css}
      bordered
      color={color}
      compact
      onClick={onClick}
      rounded
      shadowed={shadowed}>
      {hasHeader ? (
        <SectionHeader
          actions={headerActions}
          bordered={borderedSections}
          paddingSize={
            compact ? SECTION_PADDING_SIZES.SMALL : SECTION_PADDING_SIZES.MEDIUM
          }>
          {title}
        </SectionHeader>
      ) : null}

      {children ? (
        <SectionBody
          paddingSize={
            compact ? SECTION_PADDING_SIZES.SMALL : SECTION_PADDING_SIZES.MEDIUM
          }>
          {children}
        </SectionBody>
      ) : null}

      {hasFooter ? (
        <SectionFooter
          actions={footerActions}
          bordered={borderedSections}
          paddingSize={
            compact ? SECTION_PADDING_SIZES.SMALL : SECTION_PADDING_SIZES.MEDIUM
          }
        />
      ) : null}
    </Section>
  )
}
