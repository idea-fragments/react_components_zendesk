import { Selector } from "components/forms/selectors/Selector"
import { FlexBox } from "components/layout/FlexBox"

import { Tag, TagProps } from "components/tags/Tag"
import React, { useState } from "react"
import { SPACINGS } from "styles/spacings"
import { useTheme } from "styles/theme/useTheme"

export default {
  argTypes: {},
  component: Tag,
  title: "tags/Tag",
}

const DefaultStory = (args: Partial<TagProps>) => {
  return <Tag {...args}>Default Tag</Tag>
}

const ColorStory = (args: Partial<TagProps>) => {
  const theme = useTheme()

  return (
    <Tag
      {...args}
      color={theme.styles.colors.purple}>
      Tag with Color Prop
    </Tag>
  )
}

const CustomColorsStory = (args: Partial<TagProps>) => {
  return (
    <Tag
      {...args}
      backgroundColor={"#dcfce7"}
      textColor={"#e106ff"}>
      Custom Background & Text
    </Tag>
  )
}

const BackgroundColorWeightStory = (args: Partial<TagProps>) => {
  const theme = useTheme()
  const [selectedWeight, setSelectedWeight] = useState<string>("400")

  const weightOptions = [
    { label: "100", value: "100" },
    { label: "200", value: "200" },
    { label: "300", value: "300" },
    { label: "400", value: "400" },
    { label: "500", value: "500" },
    { label: "600", value: "600" },
    { label: "700", value: "700" },
    { label: "800", value: "800" },
  ]

  return (
    <FlexBox
      alignItems={"flex-start"}
      gap={SPACINGS.MD}
      withRows>
      <Selector
        keyField={"value"}
        label={"Background Color Weight"}
        labelField={"label"}
        onChange={setSelectedWeight}
        options={weightOptions}
        selectedKey={selectedWeight}
      />
      <Tag
        {...args}
        backgroundColorWeight={
          Number(selectedWeight) as keyof typeof theme.styles.colors.orange
        }
        color={theme.styles.colors.orange}>
        Tag with background color weight {selectedWeight}
      </Tag>
    </FlexBox>
  )
}

const ClickableStory = (args: Partial<TagProps>) => {
  const onClick = () => {
    alert("Tag clicked")
  }

  return (
    <Tag
      {...args}
      onClick={onClick}>
      Clickable Tag
    </Tag>
  )
}

const ClosableStory = (args: Partial<TagProps>) => {
  const theme = useTheme()
  const onClose = () => {
    alert("Close clicked")
  }

  return (
    <Tag
      {...args}
      color={theme.styles.colors.blue}
      onClose={onClose}>
      Closable Tag
    </Tag>
  )
}

const SuccessStory = (args: Partial<TagProps>) => {
  return (
    <Tag
      {...args}
      success>
      Success Tag
    </Tag>
  )
}

const SmallSizeStory = (args: Partial<TagProps>) => {
  const theme = useTheme()

  return (
    <Tag
      {...args}
      color={theme.styles.colors.lemon}
      size={"small"}>
      Small Tag
    </Tag>
  )
}

const LargeSizeStory = (args: Partial<TagProps>) => {
  const theme = useTheme()

  return (
    <Tag
      {...args}
      color={theme.styles.colors.red}
      size={"large"}>
      Large Tag
    </Tag>
  )
}

export const Default = DefaultStory.bind({})
// @ts-ignore
Default.args = {}

export const WithColorProp = ColorStory.bind({})
// @ts-ignore
WithColorProp.args = {}

export const WithCustomColors = CustomColorsStory.bind({})
// @ts-ignore
WithCustomColors.args = {}

export const WithBackgroundColorWeight = BackgroundColorWeightStory.bind({})
// @ts-ignore
WithBackgroundColorWeight.args = {}

export const Clickable = ClickableStory.bind({})
// @ts-ignore
Clickable.args = {}

export const Closable = ClosableStory.bind({})
// @ts-ignore
Closable.args = {}

export const Success = SuccessStory.bind({})
// @ts-ignore
Success.args = {}

export const SmallSize = SmallSizeStory.bind({})
// @ts-ignore
SmallSize.args = {}

export const LargeSize = LargeSizeStory.bind({})
// @ts-ignore
LargeSize.args = {}
