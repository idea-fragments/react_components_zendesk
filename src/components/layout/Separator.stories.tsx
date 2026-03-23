import { FlexBox } from "components/layout/FlexBox"
import {
  Separator,
  SeparatorProps,
  SEPARATOR_ORIENTATIONS,
} from "components/layout/Separator"
import { H3 } from "components/text/Header"
import { Paragraph } from "components/text/Paragraph"
import React from "react"
import { css } from "styled-components"
import { SPACINGS } from "styles/spacings"

export default {
  title: "Layouts/Separator",
  component: Separator,
  argTypes: {},
}

const Story = (args: SeparatorProps) => {
  return (
    <FlexBox
      gap={SPACINGS.LG}
      withRows>
      {/* Horizontal Separator - Default */}
      <FlexBox
        gap={SPACINGS.SM}
        withRows>
        <H3>Horizontal Separator (Default)</H3>
        <Paragraph>Content above separator</Paragraph>
        <Separator {...args} />
        <Paragraph>Content below separator</Paragraph>
      </FlexBox>

      {/* Horizontal Separator - Fluid */}
      <FlexBox
        gap={SPACINGS.SM}
        withRows>
        <H3>Horizontal Separator (Fluid)</H3>
        <Paragraph>Content above separator</Paragraph>
        <Separator
          fluid
          {...args}
        />
        <Paragraph>Content below separator</Paragraph>
      </FlexBox>

      {/* Vertical Separator */}
      <FlexBox
        gap={SPACINGS.SM}
        withRows>
        <H3>Vertical Separator</H3>
        <FlexBox
          alignItems={"center"}
          gap={SPACINGS.SM}>
          <Paragraph>Left content</Paragraph>
          <Separator
            orientation={SEPARATOR_ORIENTATIONS.VERTICAL}
            {...args}
          />
          <Paragraph>Right content</Paragraph>
        </FlexBox>
      </FlexBox>

      {/* Vertical Separator - Fluid */}
      <FlexBox
        gap={SPACINGS.SM}
        withRows>
        <H3>Vertical Separator (Fluid)</H3>
        <FlexBox
          _css={css`
            height: 100px;
          `}
          alignItems={"center"}
          gap={SPACINGS.SM}>
          <Paragraph>Left content</Paragraph>
          <Separator
            fluid
            orientation={SEPARATOR_ORIENTATIONS.VERTICAL}
            {...args}
          />
          <Paragraph>Right content</Paragraph>
        </FlexBox>
      </FlexBox>

      {/* Custom Color */}
      <FlexBox
        gap={SPACINGS.SM}
        withRows>
        <H3>Custom Color</H3>
        <Paragraph>Content above separator</Paragraph>
        <Separator
          color={"#ff6b6b"}
          fluid
          {...args}
        />
        <Paragraph>Content below separator</Paragraph>
      </FlexBox>
    </FlexBox>
  )
}

export const Default = Story.bind({})
// @ts-ignore
Default.args = {}
