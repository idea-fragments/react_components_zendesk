import {
  NPSQuestion,
  NPSQuestionProps,
  NPSScore,
} from "components/forms/NPSQuestion"
import React, { useState } from "react"

export default {
  title: "forms/NPSQuestion",
  component: NPSQuestion,
  argTypes: {},
}

const Story = (props: NPSQuestionProps) => {
  const [score, setScore] = useState<NPSScore>()

  return (
    <NPSQuestion
      label={
        "On a scale of 1 to 10, how likely are you to recommend our product to a colleague?"
      }
      {...props}
      onChange={setScore}
      value={score}
    />
  )
}

export const Default = Story.bind({})
Default.args = {}
