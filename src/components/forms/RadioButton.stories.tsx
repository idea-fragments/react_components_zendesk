import { RadioButton } from "components/forms/RadioButton"
import React, { useState } from "react"
import { FlexBox } from "components/layout/FlexBox"
import { SPACINGS } from "styles/spacings"

export default {
  component: RadioButton,
  title: "forms/RadioButton",
}

const Story = () => {
  const [selectedValue, setSelectedValue] = useState<string>("")

  return (
    <div style={{ padding: "2rem" }}>
      <h3>Radio Button - Default</h3>
      <p>Selected: {selectedValue || "None"}</p>
      <FlexBox
        gap={SPACINGS.MD}
        withRows>
        <RadioButton
          checked={selectedValue === "option1"}
          label={"Option 1"}
          name={"radio-group"}
          value={"option1"}
          onChange={setSelectedValue}
        />
        <RadioButton
          checked={selectedValue === "option2"}
          label={"Option 2"}
          name={"radio-group"}
          value={"option2"}
          onChange={setSelectedValue}
        />
      </FlexBox>
    </div>
  )
}

export const Default = Story.bind({})

const StoryPreselected = () => {
  const [selectedValue, setSelectedValue] = useState<string>("option2")

  return (
    <div style={{ padding: "2rem" }}>
      <h3>Radio Button - Preselected</h3>
      <p>Selected: {selectedValue}</p>
      <FlexBox
        gap={SPACINGS.MD}
        withRows>
        <RadioButton
          checked={selectedValue === "option1"}
          label={"Option 1"}
          name={"radio-group-preselected"}
          value={"option1"}
          onChange={setSelectedValue}
        />
        <RadioButton
          checked={selectedValue === "option2"}
          label={"Option 2"}
          name={"radio-group-preselected"}
          value={"option2"}
          onChange={setSelectedValue}
        />
      </FlexBox>
    </div>
  )
}

export const Preselected = StoryPreselected.bind({})

const StoryDisabled = () => {
  const [selectedValue, setSelectedValue] = useState<string>("option1")

  return (
    <div style={{ padding: "2rem" }}>
      <h3>Radio Button - With Disabled Options</h3>
      <p>Selected: {selectedValue}</p>
      <FlexBox
        gap={SPACINGS.MD}
        withRows>
        <RadioButton
          checked={selectedValue === "option1"}
          label={"Option 1"}
          name={"radio-group-disabled"}
          value={"option1"}
          onChange={setSelectedValue}
        />
        <RadioButton
          checked={selectedValue === "option2"}
          disabled
          label={"Option 2 (Disabled)"}
          name={"radio-group-disabled"}
          value={"option2"}
          onChange={setSelectedValue}
        />
        <RadioButton
          checked={selectedValue === "option3"}
          disabled
          label={"Option 3 (Disabled)"}
          name={"radio-group-disabled"}
          value={"option3"}
          onChange={setSelectedValue}
        />
        <RadioButton
          checked={selectedValue === "option4"}
          label={"Option 4"}
          name={"radio-group-disabled"}
          value={"option4"}
          onChange={setSelectedValue}
        />
      </FlexBox>
    </div>
  )
}

export const WithDisabled = StoryDisabled.bind({})

const StoryWithHint = () => {
  const [selectedValue, setSelectedValue] = useState<string>("")

  return (
    <div style={{ padding: "2rem" }}>
      <h3>Radio Button - With Hints</h3>
      <p>Selected: {selectedValue || "None"}</p>
      <FlexBox
        gap={SPACINGS.MD}
        withRows>
        <RadioButton
          checked={selectedValue === "small"}
          hint={"Best for personal use"}
          label={"Small"}
          name={"radio-group-hint"}
          value={"small"}
          onChange={setSelectedValue}
        />
        <RadioButton
          checked={selectedValue === "medium"}
          hint={"Best for small teams"}
          label={"Medium"}
          name={"radio-group-hint"}
          value={"medium"}
          onChange={setSelectedValue}
        />
        <RadioButton
          checked={selectedValue === "large"}
          hint={"Best for enterprises"}
          label={"Large"}
          name={"radio-group-hint"}
          value={"large"}
          onChange={setSelectedValue}
        />
      </FlexBox>
    </div>
  )
}

export const WithHints = StoryWithHint.bind({})

const StoryWithValidation = () => {
  const [selectedValue, setSelectedValue] = useState<string>("")

  return (
    <div style={{ padding: "2rem" }}>
      <h3>Radio Button - With Validation</h3>
      <p>Selected: {selectedValue || "None"}</p>
      <FlexBox
        gap={SPACINGS.MD}
        withRows>
        <RadioButton
          checked={selectedValue === "option1"}
          label={"Option 1"}
          message={!selectedValue ? "Please select an option" : undefined}
          name={"radio-group-validation"}
          validation={{
            message: "Please select an option",
            validation: !selectedValue ? "error" : "success",
          }}
          value={"option1"}
          onChange={setSelectedValue}
        />
        <RadioButton
          checked={selectedValue === "option2"}
          label={"Option 2"}
          name={"radio-group-validation"}
          value={"option2"}
          onChange={setSelectedValue}
        />
        <RadioButton
          checked={selectedValue === "option3"}
          label={"Option 3"}
          name={"radio-group-validation"}
          value={"option3"}
          onChange={setSelectedValue}
        />
      </FlexBox>
    </div>
  )
}

export const WithValidation = StoryWithValidation.bind({})

const StoryFluid = () => {
  const [selectedValue, setSelectedValue] = useState<string>("")

  return (
    <div style={{ padding: "2rem" }}>
      <h3>Radio Button - Fluid Width</h3>
      <p>Selected: {selectedValue || "None"}</p>
      <FlexBox
        gap={SPACINGS.MD}
        withRows>
        <RadioButton
          checked={selectedValue === "option1"}
          fluid
          label={"Option 1 - Full Width"}
          name={"radio-group-fluid"}
          value={"option1"}
          onChange={setSelectedValue}
        />
        <RadioButton
          checked={selectedValue === "option2"}
          fluid
          label={"Option 2 - Full Width"}
          name={"radio-group-fluid"}
          value={"option2"}
          onChange={setSelectedValue}
        />
        <RadioButton
          checked={selectedValue === "option3"}
          fluid
          label={"Option 3 - Full Width"}
          name={"radio-group-fluid"}
          value={"option3"}
          onChange={setSelectedValue}
        />
      </FlexBox>
    </div>
  )
}

export const Fluid = StoryFluid.bind({})

const StoryNoLabel = () => {
  const [selectedValue, setSelectedValue] = useState<string>("")

  return (
    <div style={{ padding: "2rem" }}>
      <h3>Radio Button - Without Labels</h3>
      <p>Selected: {selectedValue || "None"}</p>
      <FlexBox gap={SPACINGS.MD}>
        <RadioButton
          checked={selectedValue === "option1"}
          name={"radio-group-no-label"}
          value={"option1"}
          onChange={setSelectedValue}
        />
        <RadioButton
          checked={selectedValue === "option2"}
          name={"radio-group-no-label"}
          value={"option2"}
          onChange={setSelectedValue}
        />
        <RadioButton
          checked={selectedValue === "option3"}
          name={"radio-group-no-label"}
          value={"option3"}
          onChange={setSelectedValue}
        />
      </FlexBox>
    </div>
  )
}

export const WithoutLabels = StoryNoLabel.bind({})

const StoryMultipleGroups = () => {
  const [colorValue, setColorValue] = useState<string>("red")
  const [sizeValue, setSizeValue] = useState<string>("medium")

  return (
    <div style={{ padding: "2rem" }}>
      <h3>Radio Button - Multiple Groups</h3>
      <div style={{ marginBottom: "2rem" }}>
        <h4>Color</h4>
        <p>Selected: {colorValue}</p>
        <FlexBox
          gap={SPACINGS.MD}
          withRows>
          <RadioButton
            checked={colorValue === "red"}
            label={"Red"}
            name={"color-group"}
            value={"red"}
            onChange={setColorValue}
          />
          <RadioButton
            checked={colorValue === "blue"}
            label={"Blue"}
            name={"color-group"}
            value={"blue"}
            onChange={setColorValue}
          />
          <RadioButton
            checked={colorValue === "green"}
            label={"Green"}
            name={"color-group"}
            value={"green"}
            onChange={setColorValue}
          />
        </FlexBox>
      </div>
      <div>
        <h4>Size</h4>
        <p>Selected: {sizeValue}</p>
        <FlexBox
          gap={SPACINGS.MD}
          withRows>
          <RadioButton
            checked={sizeValue === "small"}
            label={"Small"}
            name={"size-group"}
            value={"small"}
            onChange={setSizeValue}
          />
          <RadioButton
            checked={sizeValue === "medium"}
            label={"Medium"}
            name={"size-group"}
            value={"medium"}
            onChange={setSizeValue}
          />
          <RadioButton
            checked={sizeValue === "large"}
            label={"Large"}
            name={"size-group"}
            value={"large"}
            onChange={setSizeValue}
          />
        </FlexBox>
      </div>
    </div>
  )
}

export const MultipleGroups = StoryMultipleGroups.bind({})

const StoryWithColors = () => {
  const [selectedValue, setSelectedValue] = useState<string>("")

  const colorMap = {
    red: "#e35b66",
    green: "#038153",
    purple: "#b552e2",
    orange: "#de701d",
  }
  return (
    <div style={{ padding: "2rem" }}>
      <h3>Radio Button - With Custom Colors</h3>
      <p>Selected: {selectedValue || "None"}</p>
      <FlexBox
        gap={SPACINGS.MD}
        withRows>
        <RadioButton
          checked={selectedValue === "red"}
          color={colorMap[selectedValue]}
          label={"Red"}
          name={"radio-group-colors"}
          value={"red"}
          onChange={setSelectedValue}
        />
        <RadioButton
          checked={selectedValue === "green"}
          color={colorMap[selectedValue]}
          label={"Green"}
          name={"radio-group-colors"}
          value={"green"}
          onChange={setSelectedValue}
        />
        <RadioButton
          checked={selectedValue === "purple"}
          color={colorMap[selectedValue]}
          label={"Purple"}
          name={"radio-group-colors"}
          value={"purple"}
          onChange={setSelectedValue}
        />
        <RadioButton
          checked={selectedValue === "orange"}
          color={colorMap[selectedValue]}
          label={"Orange"}
          name={"radio-group-colors"}
          value={"orange"}
          onChange={setSelectedValue}
        />
      </FlexBox>
    </div>
  )
}

export const WithCustomColors = StoryWithColors.bind({})
