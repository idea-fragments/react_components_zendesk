import { mdiLeaf } from "@mdi/js"
import { Timeline, TimelineProps } from "components/accordions/Timeline"
import { Icon } from "components/Icon"
import { FlexBox } from "components/layout/FlexBox"
import { OverflowMenu } from "components/layout/OverflowMenu"
import { ButtonLink } from "components/navigation/ButtonLink"
import { Text } from "components/text/Text"
import React from "react"

export default {
  title: "accordions/Timeline",
  component: Timeline,
  argTypes: {},
}

const data = [
  {
    content: "hello world",
    dateTime: "2023-10-21, 9:50 PM",
    icon: (
      <Icon
        size={"unset"}
        svg={mdiLeaf}
      />
    ),
    key: 1,
  },
  {
    content: (
      <FlexBox>
        <FlexBox withRows>
          <Text>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </Text>
          <ButtonLink
            external
            href={"https://google.com"}
            inline>
            Some link
          </ButtonLink>
        </FlexBox>
        <OverflowMenu
          actions={[
            { action: () => alert("action 1"), label: "Action 1" },
            { action: () => alert("action 2"), label: "Action 2" },
          ]}
          appendToNode={document.body}
        />
      </FlexBox>
    ),
    dateTime: "2023-10-21, 9:50 PM",
    key: 2,
  },
  {
    content: "The world is full of \nflowers",
    dateTime: "2023-10-21, 9:50 PM",
    key: 3,
  },
]

const Story = (props: TimelineProps) => {
  return (
    <Timeline
      {...props}
      data={data}
    />
  )
}

export const Default = Story.bind({})
Default.args = {
  isAlternate: false,
}

export const Alternate = Story.bind({})
Alternate.args = {
  isAlternate: true,
}
