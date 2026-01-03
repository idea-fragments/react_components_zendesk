import React, { useState } from "react"
import { TabPanel, Tabs, Tab, TabList } from "components/layout/Tabs"
import { FlexBox } from "components/layout/FlexBox"
import { Label } from "components/text/Label"
import { Text as Paragraph } from "components/text/Text"

import { SPACINGS } from "styles/spacings"

export default {
  argTypes: {},
  component: Tabs,
  title: "layouts/Tabs",
}

const DefaultStory = () => {
  const [selectedTab, setSelectedTab] = useState("tab-1")

  return (
    <Tabs
      selectedItem={selectedTab}
      onChange={setSelectedTab}>
      <TabList>
        <Tab item={"tab-1"}>Tab 1</Tab>
        <Tab item={"tab-2"}>Tab 2</Tab>
        <Tab item={"tab-3"}>Tab 3</Tab>
      </TabList>
      <TabPanel item={"tab-1"}>
        <Paragraph>Content for Tab 1</Paragraph>
      </TabPanel>
      <TabPanel item={"tab-2"}>
        <Paragraph>Content for Tab 2</Paragraph>
      </TabPanel>
      <TabPanel item={"tab-3"}>
        <Paragraph>Content for Tab 3</Paragraph>
      </TabPanel>
    </Tabs>
  )
}

const ManyTabsStory = () => {
  const [selectedTab, setSelectedTab] = useState("tab-1")

  return (
    <Tabs
      bordered
      shadowed
      rounded
      selectedItem={selectedTab}
      onChange={setSelectedTab}>
      <TabList>
        <Tab
          tabKey={"tab-1"}
          onSelect={setSelectedTab}
          visibleTab={selectedTab}>
          Overview
        </Tab>
        <Tab
          tabKey={"tab-2"}
          onSelect={setSelectedTab}
          visibleTab={selectedTab}>
          Analytics
        </Tab>
        <Tab
          disabled
          tabKey={"tab-3"}
          onSelect={setSelectedTab}
          visibleTab={selectedTab}>
          Settings
        </Tab>
        <Tab
          tabKey={"tab-4"}
          onSelect={setSelectedTab}
          visibleTab={selectedTab}>
          Users
        </Tab>
        <Tab
          tabKey={"tab-5"}
          onSelect={setSelectedTab}
          visibleTab={selectedTab}>
          Permissions
        </Tab>
        <Tab
          tabKey={"tab-6"}
          onSelect={setSelectedTab}
          visibleTab={selectedTab}>
          Integrations
        </Tab>
        <Tab
          tabKey={"tab-7"}
          onSelect={setSelectedTab}
          visibleTab={selectedTab}>
          Billing
        </Tab>
        <Tab
          tabKey={"tab-8"}
          onSelect={setSelectedTab}
          visibleTab={selectedTab}>
          Support
        </Tab>
      </TabList>
      <TabPanel
        item={"tab-1"}
        visibleTab={selectedTab}>
        <Paragraph>Overview content with summary information.</Paragraph>
        <Paragraph>Overview content with summary information.</Paragraph>
        <Paragraph>Overview content with summary information.</Paragraph>
        <Paragraph>Overview content with summary information.</Paragraph>
        <Paragraph>Overview content with summary information.</Paragraph>
        <Paragraph>Overview content with summary information.</Paragraph>
      </TabPanel>
      <TabPanel
        item={"tab-2"}
        visibleTab={selectedTab}>
        <Paragraph>Analytics and reporting data.</Paragraph>
      </TabPanel>
      <TabPanel
        item={"tab-3"}
        visibleTab={selectedTab}>
        <Paragraph>Settings configuration options.</Paragraph>
      </TabPanel>
      <TabPanel
        item={"tab-4"}
        visibleTab={selectedTab}>
        <Paragraph>User management interface.</Paragraph>
      </TabPanel>
      <TabPanel
        item={"tab-5"}
        visibleTab={selectedTab}>
        <Paragraph>Permission controls and access levels.</Paragraph>
      </TabPanel>
      <TabPanel
        item={"tab-6"}
        visibleTab={selectedTab}>
        <Paragraph>Third-party integrations.</Paragraph>
      </TabPanel>
      <TabPanel
        item={"tab-7"}
        visibleTab={selectedTab}>
        <Paragraph>Billing and subscription information.</Paragraph>
      </TabPanel>
      <TabPanel
        item={"tab-8"}
        visibleTab={selectedTab}>
        <Paragraph>Support resources and help center.</Paragraph>
      </TabPanel>
    </Tabs>
  )
}

const WithContentStory = () => {
  const [selectedTab, setSelectedTab] = useState("overview")

  return (
    <Tabs
      selectedItem={selectedTab}
      onChange={setSelectedTab}>
      <TabList>
        <Tab item={"overview"}>Overview</Tab>
        <Tab item={"details"}>Details</Tab>
        <Tab item={"history"}>History</Tab>
      </TabList>
      <TabPanel item={"overview"}>
        <FlexBox
          gap={SPACINGS.MD}
          withRows>
          <Label>Overview Section</Label>
          <Paragraph>
            This is a more detailed content section showing how tabs can contain
            rich content with multiple elements, paragraphs, and structured
            data.
          </Paragraph>
          <Paragraph>
            Tabs are useful for organizing related content into separate views
            that users can switch between easily.
          </Paragraph>
        </FlexBox>
      </TabPanel>
      <TabPanel item={"details"}>
        <FlexBox
          gap={SPACINGS.MD}
          withRows>
          <Label>Details Section</Label>
          <Paragraph>
            Detailed information appears here when the Details tab is selected.
            This content is separate from the Overview content.
          </Paragraph>
        </FlexBox>
      </TabPanel>
      <TabPanel item={"history"}>
        <FlexBox
          gap={SPACINGS.MD}
          withRows>
          <Label>History Section</Label>
          <Paragraph>
            Historical data and timeline information would be displayed in this
            panel when the History tab is active.
          </Paragraph>
        </FlexBox>
      </TabPanel>
    </Tabs>
  )
}

const DisabledTabStory = () => {
  const [selectedTab, setSelectedTab] = useState("tab-1")

  return (
    <Tabs
      selectedItem={selectedTab}
      onChange={setSelectedTab}>
      <TabList>
        <Tab item={"tab-1"}>Active Tab</Tab>
        <Tab
          disabled
          item={"tab-2"}>
          Disabled Tab
        </Tab>
        <Tab item={"tab-3"}>Another Active Tab</Tab>
      </TabList>
      <TabPanel item={"tab-1"}>
        <Paragraph>Content for the first active tab.</Paragraph>
      </TabPanel>
      <TabPanel item={"tab-2"}>
        <Paragraph>
          This content cannot be accessed (tab is disabled).
        </Paragraph>
      </TabPanel>
      <TabPanel item={"tab-3"}>
        <Paragraph>Content for the second active tab.</Paragraph>
      </TabPanel>
    </Tabs>
  )
}

const VerticalTabsStory = () => {
  const [selectedTab, setSelectedTab] = useState("tab-1")

  return (
    <Tabs
      isVertical
      selectedItem={selectedTab}
      onChange={setSelectedTab}>
      <TabList>
        <Tab item={"tab-1"}>Dashboard</Tab>
        <Tab item={"tab-2"}>Profile</Tab>
        <Tab item={"tab-3"}>Settings</Tab>
        <Tab item={"tab-4"}>Notifications</Tab>
      </TabList>
      <TabPanel item={"tab-1"}>
        <Paragraph>Dashboard content displayed vertically.</Paragraph>
      </TabPanel>
      <TabPanel item={"tab-2"}>
        <Paragraph>Profile information panel.</Paragraph>
      </TabPanel>
      <TabPanel item={"tab-3"}>
        <Paragraph>Settings configuration panel.</Paragraph>
      </TabPanel>
      <TabPanel item={"tab-4"}>
        <Paragraph>Notification preferences panel.</Paragraph>
      </TabPanel>
    </Tabs>
  )
}

export const Default = DefaultStory.bind({})
// @ts-ignore
Default.args = {}

export const ManyTabs = ManyTabsStory.bind({})
// @ts-ignore
ManyTabs.args = {}

export const WithRichContent = WithContentStory.bind({})
// @ts-ignore
WithRichContent.args = {}

export const WithDisabledTab = DisabledTabStory.bind({})
// @ts-ignore
WithDisabledTab.args = {}

export const VerticalOrientation = VerticalTabsStory.bind({})
// @ts-ignore
VerticalOrientation.args = {}
