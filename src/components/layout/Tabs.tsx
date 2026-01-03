import { FlexBox } from "components/layout/FlexBox"
import { Section, SectionProps } from "components/layout/Section"
import { SectionBody } from "components/layout/SectionBody"
import React, { FC, ReactNode } from "react"
import styled, { css } from "styled-components"
import { light } from "styles/colors"

import { FONT_WEIGHTS } from "styles/typography"
import { SPACINGS } from "styles/spacings"

export type TabsProps = {
  children: ReactNode
  onChange?: (selectedTab: string) => void
  selectedItem?: string
} & SectionProps

export type TabProps = {
  children: ReactNode
  disabled?: boolean
  onSelect: (tabKey: string) => void
  tabKey: string
  visibleTab: string
}

export type TabPanelProps = {
  children: ReactNode
  item: string
  visibleTab: string
}

export const Tabs: FC<TabsProps> = ({
  bordered,
  rounded,
  shadowed,
  children,
  ...props
}) => {
  const sectionProps = {
    bordered,
    rounded,
    shadowed,
  }
  return (
    <Section {...sectionProps}>
      <SectionBody
        _css={css`
          padding-top: ${SPACINGS.SM};
          padding-bottom: ${SPACINGS.SM};
        `}>
        {children}
      </SectionBody>
    </Section>
  )
}

export const Tab: FC<TabProps> = ({
  children,
  disabled,
  onSelect,
  tabKey,
  visibleTab,
}) => {
  const isSelected = tabKey === visibleTab

  const handleClick = () => {
    if (!disabled) {
      onSelect(tabKey)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!disabled && (e.key === "Enter" || e.key === " ")) {
      e.preventDefault()
      onSelect(tabKey)
    }
  }

  return (
    <StyledTab
      aria-selected={isSelected}
      disabled={disabled}
      role={"tab"}
      tabIndex={disabled ? -1 : 0}
      onClick={handleClick}
      onKeyDown={handleKeyDown}>
      {children}
    </StyledTab>
  )
}

export const TabPanel: FC<TabPanelProps> = ({ children, item, visibleTab }) => {
  const isVisible = item === visibleTab

  return isVisible ? (
    <StyledTabPanel role={"tabpanel"}>{children}</StyledTabPanel>
  ) : null
}

export const TabList = styled(FlexBox)`
  gap: unset;
  overflow-x: auto;
  width: 100%;
`

const StyledTab = styled.button<{ disabled?: boolean }>`
  background: none;
  border: none;
  border-bottom: 2px solid ${({ theme }) => theme.styles.border.color};
  border-bottom-color: ${({ disabled, theme }) =>
    disabled ? "transparent" : theme.styles.border.color};
  color: ${({ disabled, theme }) => {
    if (disabled) return theme.styles.colors.grey["400"]
    return light(theme.styles.textColorPrimary, 0.6)
  }};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  font-size: inherit;
  padding: ${SPACINGS.SM} ${SPACINGS.SM};
  transition: all 0.2s ease;
  white-space: nowrap;

  &[aria-selected="true"] {
    border-bottom-color: ${({ theme }) => theme.styles.colorPrimary};
    color: ${({ theme }) => theme.styles.colorPrimary};
    font-weight: ${FONT_WEIGHTS.BOLD};
  }

  &:hover:not([aria-selected="true"]):not(:disabled) {
    border-bottom-color: ${({ theme }) => theme.styles.colors.grey["300"]};
    color: ${({ theme }) => theme.styles.textColorPrimary};
  }

  // &:focus {
  //   outline: 2px solid ${({ theme }) => theme.styles.colors.grey["300"]};
  //   outline-offset: -2px;
  // }
  //
  // &:focus:not([aria-selected="true"]) {
  //   color: ${({ theme }) => theme.styles.colorPrimary};
  // }
`

const StyledTabPanel = styled.div`
  padding: ${SPACINGS.MD} ${SPACINGS.SM};
`
