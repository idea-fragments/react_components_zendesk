import { Breadcrumbs } from "components/navigation/Breadcrumbs"
import React from "react"

export default {
  component: Breadcrumbs,
  title: "navigation/Breadcrumbs",
}

const Story = () => {
  return (
    <div style={{ padding: "2rem" }}>
      <h3>Breadcrumbs - Basic</h3>
      <Breadcrumbs>
        <a href="https://google.com">Home</a>
        <a href="https://google.com">Products</a>
        <span>Current Page</span>
      </Breadcrumbs>
    </div>
  )
}

export const Default = Story.bind({})

const StoryTwoLevels = () => {
  return (
    <div style={{ padding: "2rem" }}>
      <h3>Breadcrumbs - Two Levels</h3>
      <Breadcrumbs>
        <a href="https://google.com">Home</a>
        <span>Current Page</span>
      </Breadcrumbs>
    </div>
  )
}

export const TwoLevels = StoryTwoLevels.bind({})

const StoryFourLevels = () => {
  return (
    <div style={{ padding: "2rem" }}>
      <h3>Breadcrumbs - Four Levels</h3>
      <Breadcrumbs>
        <a href="https://google.com">Home</a>
        <a href="https://google.com">Category</a>
        <a href="https://google.com">Subcategory</a>
        <span>Current Page</span>
      </Breadcrumbs>
    </div>
  )
}

export const FourLevels = StoryFourLevels.bind({})

const StoryLongNames = () => {
  return (
    <div style={{ padding: "2rem" }}>
      <h3>Breadcrumbs - Long Page Names</h3>
      <Breadcrumbs>
        <a href="https://google.com">Dashboard</a>
        <a href="https://google.com">User Management</a>
        <a href="https://google.com">Advanced Settings</a>
        <span>Email Notification Preferences</span>
      </Breadcrumbs>
    </div>
  )
}

export const LongNames = StoryLongNames.bind({})

const StoryWithButtons = () => {
  const handleClick = (page: string) => {
    alert(`Navigating to: ${page}`)
  }

  return (
    <div style={{ padding: "2rem" }}>
      <h3>Breadcrumbs - With Button Handlers</h3>
      <Breadcrumbs>
        <button
          onClick={() => handleClick("Home")}
          style={{
            background: "none",
            border: "none",
            color: "inherit",
            cursor: "pointer",
            padding: 0,
          }}>
          Home
        </button>
        <button
          onClick={() => handleClick("Settings")}
          style={{
            background: "none",
            border: "none",
            color: "inherit",
            cursor: "pointer",
            padding: 0,
          }}>
          Settings
        </button>
        <span>Account</span>
      </Breadcrumbs>
    </div>
  )
}

export const WithButtons = StoryWithButtons.bind({})
