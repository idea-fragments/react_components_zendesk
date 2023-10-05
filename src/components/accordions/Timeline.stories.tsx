import { mdiLeaf } from "@mdi/js"
import {
  Timeline,
  TimelineProps
}                  from "components/accordions/Timeline"
import { Icon }    from "components/Icon"
import React       from "react"

export default {
  title:     "accordions/Timeline",
  component: Timeline,
  argTypes:  {}
}

const data = [
  { content:  "hello world",
    dateTime: "2023-10-21, 9:50 PM",
    icon:     <Icon size={"unset"} svg={mdiLeaf} />
  },
  { 
    content: "good bye world", 
    dateTime: "2023-10-21, 9:50 PM" 
  },
  {
    content: "The world is full of \ninjustice",
    dateTime: "2023-10-21, 9:50 PM"
  }
]

const Story = (props: TimelineProps) => {
  return <Timeline {...props} data={data} />
}

export const Default = Story.bind({})
Default.args         = {
  isAlternate: false
}

export const Alternate = Story.bind({})
Alternate.args         = {
  isAlternate: true
}
