import { Label } from "@zendeskgarden/react-forms"
import { Toggle, ToggleProps } from "components/forms/Toggle"
import { FlexBox } from "components/layout/FlexBox"
import { Tag } from "components/tags/Tag"
import React from "react"
import { FullSpectrumColors } from "styles/theme/Theme.type"

export type TaggedToggleProps = Omit<ToggleProps, "color"> & {
  active?: boolean
  activeText?: string
  color?: FullSpectrumColors
  inactiveText?: string
  toggleColor?: string
}

export const TaggedToggle = ({
  active,
  checked,
  color,
  activeText,
  label,
  inactiveText,
  onChange,
  success,
  toggleColor,
  ...props
}: TaggedToggleProps) => {
  const isActive = checked ?? active

  return (
    <FlexBox>
      <Label hidden={!label}>{label}</Label>
      <Tag
        color={color}
        success={success}>
        {isActive ? activeText ?? "Enabled" : inactiveText ?? "Disabled"}
      </Tag>
      <Toggle
        checked={isActive}
        color={toggleColor}
        onChange={onChange}
        success={success}
        {...props}
      />
    </FlexBox>
  )
}
