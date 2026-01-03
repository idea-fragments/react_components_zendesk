import { Drawer, DrawerContent, DrawerProps } from "components/Drawer"

import { Button } from "components/forms/Button"
import { TextField } from "components/forms/textfields/TextField"
import { FlexBox } from "components/layout/FlexBox"
import { Label } from "components/text/Label"
import { Paragraph } from "components/text/Paragraph"
import React, { useState } from "react"

import { SPACINGS } from "styles/spacings"

export default {
  argTypes: {},
  component: Drawer,
  title: "layouts/modals/Drawer",
}

const BasicDrawerStory = (props: DrawerProps) => {
  const { drawerContent: { size } = { size: undefined } } = props
  const [drawerContent, setDrawerContent] = useState<DrawerContent | null>(null)
  const [isOpen, setIsOpen] = useState(false)

  const openDrawer = () => {
    setDrawerContent({
      body: (
        <FlexBox
          gap={SPACINGS.MD}
          withRows>
          <Paragraph>This is a basic drawer with simple content.</Paragraph>
        </FlexBox>
      ),
      size,
      title: "Basic Drawer",
    })
    setIsOpen(true)
  }

  const closeDrawer = () => {
    setIsOpen(false)
  }

  return (
    <FlexBox
      gap={SPACINGS.MD}
      withRows>
      <Button onClick={openDrawer}>Open Basic Drawer</Button>
      <Drawer
        closeDrawer={closeDrawer}
        drawerContent={drawerContent}
        isOpen={isOpen}
      />
    </FlexBox>
  )
}

const WithCancelButtonStory = () => {
  const [drawerContent, setDrawerContent] = useState<DrawerContent | null>(null)
  const [isOpen, setIsOpen] = useState(false)

  const openDrawer = () => {
    setDrawerContent({
      body: (
        <FlexBox
          gap={SPACINGS.MD}
          withRows>
          <Paragraph>This drawer has both Cancel and OK buttons.</Paragraph>
        </FlexBox>
      ),
      title: "Drawer with Cancel",
      withCancelButton: true,
    })
    setIsOpen(true)
  }

  const closeDrawer = () => {
    setIsOpen(false)
  }

  return (
    <FlexBox
      gap={SPACINGS.MD}
      withRows>
      <Button onClick={openDrawer}>Open Drawer with Cancel Button</Button>
      <Drawer
        closeDrawer={closeDrawer}
        drawerContent={drawerContent}
        isOpen={isOpen}
      />
    </FlexBox>
  )
}

const NoActionsStory = () => {
  const [drawerContent, setDrawerContent] = useState<DrawerContent | null>(null)
  const [isOpen, setIsOpen] = useState(false)

  const openDrawer = () => {
    setDrawerContent({
      body: (
        <FlexBox
          gap={SPACINGS.MD}
          withRows>
          <Paragraph>
            This drawer has no action buttons in the footer.
          </Paragraph>
          <Paragraph>
            You can only close it using the X button or clicking the backdrop.
          </Paragraph>
        </FlexBox>
      ),
      title: "Drawer without Actions",
      withNoActions: true,
    })
    setIsOpen(true)
  }

  const closeDrawer = () => {
    setIsOpen(false)
  }

  return (
    <FlexBox
      gap={SPACINGS.MD}
      withRows>
      <Button onClick={openDrawer}>Open Drawer without Actions</Button>
      <Drawer
        closeDrawer={closeDrawer}
        drawerContent={drawerContent}
        isOpen={isOpen}
      />
    </FlexBox>
  )
}

const WithFormStory = () => {
  const [drawerContent, setDrawerContent] = useState<DrawerContent | null>(null)
  const [isOpen, setIsOpen] = useState(false)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")

  const openDrawer = () => {
    setDrawerContent({
      body: (
        <FlexBox
          gap={SPACINGS.MD}
          withRows>
          <Label>User Information</Label>
          <TextField
            label={"Name"}
            value={name}
            onChange={setName}
          />
          <TextField
            label={"Email"}
            type={"email"}
            value={email}
            onChange={setEmail}
          />
          <Paragraph>Fill out the form and click OK to submit.</Paragraph>
        </FlexBox>
      ),
      title: "Edit User",
      withCancelButton: true,
    })
    setIsOpen(true)
  }

  const closeDrawer = () => {
    setIsOpen(false)
  }

  return (
    <FlexBox
      gap={SPACINGS.MD}
      withRows>
      <Button onClick={openDrawer}>Open Form Drawer</Button>
      <Drawer
        closeDrawer={closeDrawer}
        drawerContent={drawerContent}
        isOpen={isOpen}
      />
    </FlexBox>
  )
}

const WithOnCloseCallbackStory = () => {
  const [drawerContent, setDrawerContent] = useState<DrawerContent | null>(null)
  const [isOpen, setIsOpen] = useState(false)
  const [closeCount, setCloseCount] = useState(0)

  const handleOnClose = () => {
    setCloseCount((prev) => prev + 1)
    alert(`Drawer closed! Total closes: ${closeCount + 1}`)
  }

  const openDrawer = () => {
    setDrawerContent({
      body: (
        <FlexBox
          gap={SPACINGS.MD}
          withRows>
          <Paragraph>This drawer has an onClose callback.</Paragraph>
          <Paragraph>When you close it, an alert will show.</Paragraph>
          <Paragraph>Times closed: {closeCount}</Paragraph>
        </FlexBox>
      ),
      onClose: handleOnClose,
      title: "Drawer with Callback",
      withCancelButton: true,
    })
    setIsOpen(true)
  }

  const closeDrawer = () => {
    setIsOpen(false)
  }

  return (
    <FlexBox
      gap={SPACINGS.MD}
      withRows>
      <Button onClick={openDrawer}>Open Drawer with onClose Callback</Button>
      <Drawer
        closeDrawer={closeDrawer}
        drawerContent={drawerContent}
        isOpen={isOpen}
      />
    </FlexBox>
  )
}

const RichContentStory = () => {
  const [drawerContent, setDrawerContent] = useState<DrawerContent | null>(null)
  const [isOpen, setIsOpen] = useState(false)

  const openDrawer = () => {
    setDrawerContent({
      body: (
        <FlexBox
          gap={SPACINGS.LG}
          withRows>
          <FlexBox
            gap={SPACINGS.SM}
            withRows>
            <Label>Section 1: Introduction</Label>
            <Paragraph>
              This drawer demonstrates rich content with multiple sections,
              labels, and paragraphs. The body is scrollable when content
              exceeds the viewport height.
            </Paragraph>
          </FlexBox>
          <FlexBox
            gap={SPACINGS.SM}
            withRows>
            <Label>Section 2: Details</Label>
            <Paragraph>
              You can include any React components inside the drawer body. This
              makes it very flexible for different use cases.
            </Paragraph>
            <Paragraph>
              The drawer slides in from the right side with a smooth animation
              and includes a backdrop that prevents interaction with the page
              behind it.
            </Paragraph>
          </FlexBox>
          <FlexBox
            gap={SPACINGS.SM}
            withRows>
            <Label>Section 3: Features</Label>
            <Paragraph>Features include:</Paragraph>
            <Paragraph>- Slide-in animation from the right</Paragraph>
            <Paragraph>- Backdrop click to close</Paragraph>
            <Paragraph>- Close button in header</Paragraph>
            <Paragraph>- Optional action buttons</Paragraph>
            <Paragraph>- Responsive width (90vw max on mobile)</Paragraph>
            <Paragraph>- Prevents body scroll when open</Paragraph>
          </FlexBox>
          <FlexBox
            gap={SPACINGS.SM}
            withRows>
            <Label>Section 4: More Content</Label>
            <Paragraph>
              This is additional content to demonstrate scrolling behavior when
              the drawer body contains more content than can fit in the
              viewport.
            </Paragraph>
            <Paragraph>
              The header and footer remain fixed while the body scrolls
              independently.
            </Paragraph>
          </FlexBox>
        </FlexBox>
      ),
      title: "Rich Content Drawer",
      withCancelButton: true,
    })
    setIsOpen(true)
  }

  const closeDrawer = () => {
    setIsOpen(false)
  }

  return (
    <FlexBox
      gap={SPACINGS.MD}
      withRows>
      <Button onClick={openDrawer}>Open Rich Content Drawer</Button>
      <Drawer
        closeDrawer={closeDrawer}
        drawerContent={drawerContent}
        isOpen={isOpen}
      />
    </FlexBox>
  )
}

export const BasicDrawer = BasicDrawerStory.bind({})
// @ts-ignore
BasicDrawer.args = {}

export const WithCancelButton = WithCancelButtonStory.bind({})
// @ts-ignore
WithCancelButton.args = {}

export const WithoutActions = NoActionsStory.bind({})
// @ts-ignore
WithoutActions.args = {}

export const WithForm = WithFormStory.bind({})
// @ts-ignore
WithForm.args = {}

export const WithOnCloseCallback = WithOnCloseCallbackStory.bind({})
// @ts-ignore
WithOnCloseCallback.args = {}

export const WithRichContent = RichContentStory.bind({})
// @ts-ignore
WithRichContent.args = {}
