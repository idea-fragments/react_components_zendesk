import { RadioButtonGroup } from "components/forms/RadioButtonGroup"
import React, { useState } from "react"
import { useTheme } from "styles/theme/useTheme"

export default {
  component: RadioButtonGroup,
  title: "forms/RadioButtonGroup",
}

const Story = () => {
  const [selectedValue, setSelectedValue] = useState<string | undefined>(
    undefined,
  )

  const options = [
    { label: "Option 1", value: "option1" },
    { label: "Option 2", value: "option2" },
    { label: "Option 3", value: "option3" },
  ]

  return (
    <div style={{ padding: "2rem" }}>
      <h3>Radio Button Group - Default</h3>
      <p>Selected: {selectedValue || "None"}</p>
      <RadioButtonGroup
        name={"radio-group-default"}
        options={options}
        checkedOption={selectedValue}
        onChange={setSelectedValue}
      />
    </div>
  )
}

export const Default = Story.bind({})

const StoryWithLabel = () => {
  const [selectedValue, setSelectedValue] = useState<string | undefined>(
    undefined,
  )

  const options = [
    { label: "Small", value: "small" },
    { label: "Medium", value: "medium" },
    { label: "Large", value: "large" },
  ]

  return (
    <div style={{ padding: "2rem" }}>
      <h3>Radio Button Group - With Label</h3>
      <p>Selected: {selectedValue || "None"}</p>
      <RadioButtonGroup
        label={"Choose a size"}
        name={"radio-group-label"}
        options={options}
        checkedOption={selectedValue}
        onChange={setSelectedValue}
      />
    </div>
  )
}

export const WithLabel = StoryWithLabel.bind({})

const StoryPreselected = () => {
  const [selectedValue, setSelectedValue] = useState<string>("medium")

  const options = [
    { label: "Small", value: "small" },
    { label: "Medium", value: "medium" },
    { label: "Large", value: "large" },
  ]

  return (
    <div style={{ padding: "2rem" }}>
      <h3>Radio Button Group - Preselected</h3>
      <p>Selected: {selectedValue}</p>
      <RadioButtonGroup
        label={"Choose a size"}
        name={"radio-group-preselected"}
        options={options}
        checkedOption={selectedValue}
        onChange={setSelectedValue}
      />
    </div>
  )
}

export const Preselected = StoryPreselected.bind({})

const StoryWithHints = () => {
  const [selectedValue, setSelectedValue] = useState<string | undefined>(
    undefined,
  )

  const options = [
    { hint: "Best for personal use", label: "Personal", value: "personal" },
    { hint: "Best for small teams", label: "Team", value: "team" },
    { hint: "Best for enterprises", label: "Enterprise", value: "enterprise" },
  ]

  return (
    <div style={{ padding: "2rem" }}>
      <h3>Radio Button Group - With Hints</h3>
      <p>Selected: {selectedValue || "None"}</p>
      <RadioButtonGroup
        label={"Choose a plan"}
        name={"radio-group-hints"}
        options={options}
        checkedOption={selectedValue}
        onChange={setSelectedValue}
      />
    </div>
  )
}

export const WithHints = StoryWithHints.bind({})

const StoryWithDisabledOptions = () => {
  const [selectedValue, setSelectedValue] = useState<string>("option2")

  const options = [
    { label: "Option 1", value: "option1" },
    { disabled: true, label: "Option 2 (Disabled)", value: "option2" },
    { disabled: true, label: "Option 3 (Disabled)", value: "option3" },
    { label: "Option 4", value: "option4" },
  ]

  return (
    <div style={{ padding: "2rem" }}>
      <h3>Radio Button Group - With Disabled Options</h3>
      <p>Selected: {selectedValue}</p>
      <RadioButtonGroup
        label={"Choose an option"}
        name={"radio-group-disabled-options"}
        options={options}
        checkedOption={selectedValue}
        onChange={setSelectedValue}
      />
    </div>
  )
}

export const WithDisabledOptions = StoryWithDisabledOptions.bind({})

const StoryFullyDisabled = () => {
  const [selectedValue, setSelectedValue] = useState<string>("medium")

  const options = [
    { label: "Small", value: "small" },
    { label: "Medium", value: "medium" },
    { label: "Large", value: "large" },
  ]

  return (
    <div style={{ padding: "2rem" }}>
      <h3>Radio Button Group - Fully Disabled</h3>
      <p>Selected: {selectedValue}</p>
      <RadioButtonGroup
        disabled
        label={"Choose a size (Disabled)"}
        name={"radio-group-fully-disabled"}
        options={options}
        checkedOption={selectedValue}
        onChange={setSelectedValue}
      />
    </div>
  )
}

export const FullyDisabled = StoryFullyDisabled.bind({})

const StoryWithValidation = () => {
  const [selectedValue, setSelectedValue] = useState<string | undefined>(
    undefined,
  )

  const options = [
    { label: "Yes", value: "yes" },
    { label: "No", value: "no" },
    { label: "Maybe", value: "maybe" },
  ]

  return (
    <div style={{ padding: "2rem" }}>
      <h3>Radio Button Group - With Validation</h3>
      <p>Selected: {selectedValue || "None"}</p>
      <RadioButtonGroup
        label={"Do you agree?"}
        message={!selectedValue ? "Please select an option" : undefined}
        name={"radio-group-validation"}
        options={options}
        validation={{
          message: "Please select an option",
          validation: !selectedValue ? "error" : "success",
        }}
        checkedOption={selectedValue}
        onChange={setSelectedValue}
      />
    </div>
  )
}

export const WithValidation = StoryWithValidation.bind({})

const StoryWithGroupHint = () => {
  const [selectedValue, setSelectedValue] = useState<string | undefined>(
    undefined,
  )

  const options = [
    { label: "Economy", value: "economy" },
    { label: "Business", value: "business" },
    { label: "First Class", value: "first" },
  ]

  return (
    <div style={{ padding: "2rem" }}>
      <h3>Radio Button Group - With Group Hint</h3>
      <p>Selected: {selectedValue || "None"}</p>
      <RadioButtonGroup
        hint={"Select your preferred cabin class"}
        label={"Cabin Class"}
        name={"radio-group-group-hint"}
        options={options}
        checkedOption={selectedValue}
        onChange={setSelectedValue}
      />
    </div>
  )
}

export const WithGroupHint = StoryWithGroupHint.bind({})

const StoryWithColors = () => {
  const [selectedValue, setSelectedValue] = useState<string | undefined>(
    undefined,
  )
  const { styles } = useTheme()

  const options = [
    { color: styles.colors.red, label: "Red", value: "red" },
    { color: styles.colors.green, label: "Green", value: "green" },
    { color: styles.colors.purple, label: "Purple", value: "purple" },
    { color: styles.colors.orange, label: "Orange", value: "orange" },
  ]

  return (
    <div style={{ padding: "2rem" }}>
      <h3>Radio Button Group - With Custom Colors</h3>
      <p>Selected: {selectedValue || "None"}</p>
      <RadioButtonGroup
        label={"Choose a color"}
        name={"radio-group-colors"}
        options={options}
        checkedOption={selectedValue}
        onChange={setSelectedValue}
      />
    </div>
  )
}

export const WithCustomColors = StoryWithColors.bind({})

const StoryWithGroupColor = () => {
  const [selectedValue, setSelectedValue] = useState<string | undefined>(
    undefined,
  )
  const { styles } = useTheme()

  const options = [
    { label: "Bronze", value: "bronze" },
    { label: "Silver", value: "silver" },
    { label: "Gold", value: "gold" },
  ]

  return (
    <div style={{ padding: "2rem" }}>
      <h3>Radio Button Group - With Group Color</h3>
      <p>Selected: {selectedValue || "None"}</p>
      <RadioButtonGroup
        color={styles.colors.orange}
        label={"Membership Tier"}
        name={"radio-group-group-color"}
        options={options}
        checkedOption={selectedValue}
        onChange={setSelectedValue}
      />
    </div>
  )
}

export const WithGroupColor = StoryWithGroupColor.bind({})

const StoryFluid = () => {
  const [selectedValue, setSelectedValue] = useState<string | undefined>(
    undefined,
  )

  const options = [
    { label: "Option 1", value: "option1" },
    { label: "Option 2", value: "option2" },
    { label: "Option 3", value: "option3" },
  ]

  return (
    <div style={{ padding: "2rem" }}>
      <h3>Radio Button Group - Fluid Width</h3>
      <p>Selected: {selectedValue || "None"}</p>
      <RadioButtonGroup
        fluid
        label={"Choose an option"}
        name={"radio-group-fluid"}
        options={options}
        checkedOption={selectedValue}
        onChange={setSelectedValue}
      />
    </div>
  )
}

export const Fluid = StoryFluid.bind({})

const StoryComplex = () => {
  const [selectedValue, setSelectedValue] = useState<string | undefined>(
    undefined,
  )
  const { styles } = useTheme()

  const options = [
    {
      hint: "$0/month - 1GB storage",
      label: "Free",
      value: "free",
    },
    {
      color: styles.colors.blue,
      hint: "$9/month - 10GB storage",
      label: "Basic",
      value: "basic",
    },
    {
      color: styles.colors.purple,
      hint: "$29/month - 100GB storage",
      label: "Pro",
      value: "pro",
    },
    {
      color: styles.colors.orange,
      hint: "$99/month - Unlimited storage",
      label: "Enterprise",
      value: "enterprise",
    },
  ]

  return (
    <div style={{ padding: "2rem" }}>
      <h3>Radio Button Group - Complex Example</h3>
      <p>Selected: {selectedValue || "None"}</p>
      <RadioButtonGroup
        hint={"Choose the plan that fits your needs"}
        label={"Pricing Plans"}
        name={"radio-group-complex"}
        options={options}
        checkedOption={selectedValue}
        onChange={setSelectedValue}
      />
    </div>
  )
}

export const Complex = StoryComplex.bind({})

const StoryWithRenderAdditional = () => {
  const [selectedValue, setSelectedValue] = useState<string | undefined>(
    undefined,
  )

  const options = [
    {
      label: "Standard",
      renderAdditional: ({ renderedRadioButton }) => (
        <div>
          {renderedRadioButton}
          <p style={{ fontSize: "0.75rem", margin: "0.25rem 0 0 0" }}>
            Ships in 5–7 business days
          </p>
        </div>
      ),
      value: "standard",
    },
    {
      label: "Express",
      renderAdditional: ({ renderedRadioButton }) => (
        <div>
          {renderedRadioButton}
          <p style={{ fontSize: "0.75rem", margin: "0.25rem 0 0 0" }}>
            Ships in 1–2 business days
          </p>
        </div>
      ),
      value: "express",
    },
    {
      label: "Overnight",
      renderAdditional: ({ renderedRadioButton }) => (
        <div>
          {renderedRadioButton}
          <p style={{ fontSize: "0.75rem", margin: "0.25rem 0 0 0" }}>
            Delivered next business day
          </p>
        </div>
      ),
      value: "overnight",
    },
  ]

  return (
    <div style={{ padding: "2rem" }}>
      <h3>Radio Button Group - With Render Additional</h3>
      <p>Selected: {selectedValue || "None"}</p>
      <RadioButtonGroup
        label={"Shipping method"}
        name={"radio-group-render-additional"}
        options={options}
        checkedOption={selectedValue}
        onChange={setSelectedValue}
      />
    </div>
  )
}

export const WithRenderAdditional = StoryWithRenderAdditional.bind({})
