import { Label } from "components/forms/Label"
import { Toggle, ToggleProps } from "components/forms/Toggle"
import { FlexBox } from "components/layout/FlexBox"
import { Tag } from "components/tags/Tag"
import React from "react"

export type TaggedToggleProps = ToggleProps & {
  active?: boolean
  activeText?: string
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
