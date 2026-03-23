import { Button } from "components/forms/Button"
import { FlexBox } from "components/layout/FlexBox"
import { DrawerModalManager } from "components/modals/DrawerModalManager"
import { DrawerModalStateProvider } from "components/stateProviders/DrawerModalStateProvider"
import { Paragraph } from "components/text/Paragraph"
import { useDrawerState } from "hooks/useDrawerState"
import React from "react"
import { SPACINGS } from "styles/spacings"

export default {
  argTypes: {},
  component: useDrawerState,
  title: "hooks/useDrawerState",
}

const Story = (args: any) => {
  return (
    <DrawerModalStateProvider>
      <DrawerModalManager />
      <WrappedStory {...args} />
    </DrawerModalStateProvider>
  )
}

const WrappedStory = () => {
  const { openDrawerWith } = useDrawerState()

  const openDrawer = () => {
    openDrawerWith({
      body: (
        <FlexBox
          gap={SPACINGS.MD}
          withRows>
          <Paragraph>This is a basic drawer opened.</Paragraph>
          <Paragraph>
            It uses the context-based drawer state management system.
          </Paragraph>
        </FlexBox>
      ),
      title: "Basic Drawer",
    })
  }

  return <Button onClick={openDrawer}>Open Drawer</Button>
}

// const WithCancelButtonStory = () => {
//   const { openDrawerWith } = useDrawerState()
//
//   const handleOpenDrawer = () => {
//     const drawerContent: DrawerContent = {
//       body: (
//         <FlexBox gap={SPACINGS.MD} withRows>
//           <Paragraph>This drawer includes both Cancel and OK buttons.</Paragraph>
//         </FlexBox>
//       ),
//       title: "Drawer with Cancel",
//       withCancelButton: true,
//     }
//     openDrawerWith(drawerContent)
//   }
//
//   return (
//     <FlexBox gap={SPACINGS.MD} withRows>
//       <Button onClick={handleOpenDrawer}>Open Drawer with Cancel Button</Button>
//     </FlexBox>
//   )
// }
//
// const NoActionsStory = () => {
//   const { openDrawerWith } = useDrawerState()
//
//   const handleOpenDrawer = () => {
//     const drawerContent: DrawerContent = {
//       body: (
//         <FlexBox gap={SPACINGS.MD} withRows>
//           <Paragraph>This drawer has no footer action buttons.</Paragraph>
//           <Paragraph>Close it using the X button or clicking the backdrop.</Paragraph>
//         </FlexBox>
//       ),
//       title: "No Actions",
//       withNoActions: true,
//     }
//     openDrawerWith(drawerContent)
//   }
//
//   return (
//     <FlexBox gap={SPACINGS.MD} withRows>
//       <Button onClick={handleOpenDrawer}>Open Drawer without Actions</Button>
//     </FlexBox>
//   )
// }
//
// const WithFormStory = () => {
//   const { openDrawerWith } = useDrawerState()
//   const [formData, setFormData] = useState({ email: "", name: "" })
//
//   const handleOpenDrawer = () => {
//     const drawerContent: DrawerContent = {
//       body: (
//         <FlexBox gap={SPACINGS.MD} withRows>
//           <Label>User Form</Label>
//           <TextField
//             label={"Name"}
//             value={formData.name}
//             onChange={(name) => setFormData((prev) => ({ ...prev, name }))}
//           />
//           <TextField
//             label={"Email"}
//             type={"email"}
//             value={formData.email}
//             onChange={(email) => setFormData((prev) => ({ ...prev, email }))}
//           />
//         </FlexBox>
//       ),
//       title: "Edit User",
//       withCancelButton: true,
//     }
//     openDrawerWith(drawerContent)
//   }
//
//   return (
//     <FlexBox gap={SPACINGS.MD} withRows>
//       <Button onClick={handleOpenDrawer}>Open Form Drawer</Button>
//       <Paragraph>Name: {formData.name}</Paragraph>
//       <Paragraph>Email: {formData.email}</Paragraph>
//     </FlexBox>
//   )
// }
//
// const WithOnCloseCallbackStory = () => {
//   const { openDrawerWith } = useDrawerState()
//   const [closeCount, setCloseCount] = useState(0)
//
//   const handleOnClose = () => {
//     setCloseCount((prev) => prev + 1)
//     alert(`Drawer closed! Total closes: ${closeCount + 1}`)
//   }
//
//   const handleOpenDrawer = () => {
//     const drawerContent: DrawerContent = {
//       body: (
//         <FlexBox gap={SPACINGS.MD} withRows>
//           <Paragraph>This drawer has an onClose callback.</Paragraph>
//           <Paragraph>An alert will show when you close it.</Paragraph>
//           <Paragraph>Times closed: {closeCount}</Paragraph>
//         </FlexBox>
//       ),
//       onClose: handleOnClose,
//       title: "Drawer with Callback",
//       withCancelButton: true,
//     }
//     openDrawerWith(drawerContent)
//   }
//
//   return (
//     <FlexBox gap={SPACINGS.MD} withRows>
//       <Button onClick={handleOpenDrawer}>Open Drawer with onClose</Button>
//       <Paragraph>Close count: {closeCount}</Paragraph>
//     </FlexBox>
//   )
// }
//
// const MultipleDrawersStory = () => {
//   const { openDrawerWith } = useDrawerState()
//
//   const openFirstDrawer = () => {
//     const drawerContent: DrawerContent = {
//       body: (
//         <FlexBox gap={SPACINGS.MD} withRows>
//           <Paragraph>This is the first drawer.</Paragraph>
//           <Paragraph>
//             Opening another drawer will replace this one (only one drawer can be open at a
//             time).
//           </Paragraph>
//         </FlexBox>
//       ),
//       title: "First Drawer",
//     }
//     openDrawerWith(drawerContent)
//   }
//
//   const openSecondDrawer = () => {
//     const drawerContent: DrawerContent = {
//       body: (
//         <FlexBox gap={SPACINGS.MD} withRows>
//           <Paragraph>This is the second drawer.</Paragraph>
//           <Paragraph>It replaced the first drawer.</Paragraph>
//         </FlexBox>
//       ),
//       title: "Second Drawer",
//       withCancelButton: true,
//     }
//     openDrawerWith(drawerContent)
//   }
//
//   return (
//     <FlexBox gap={SPACINGS.MD} withRows>
//       {/*<Button onClick={openFirstDrawer}>Open First Drawer</Button>*/}
//       {/*<Button onClick={openSecondDrawer}>Open Second Drawer</Button>*/}
//     </FlexBox>
//   )
// }

export const Default = Story.bind({})
Default.args = {}
//
// export const WithCancelButton = () => <WithDrawerProvider Story={WithCancelButtonStory} />
// // @ts-ignore
// WithCancelButton.args = {}
//
// export const WithoutActions = () => <WithDrawerProvider Story={NoActionsStory} />
// // @ts-ignore
// WithoutActions.args = {}
//
// export const WithForm = () => <WithDrawerProvider Story={WithFormStory} />
// // @ts-ignore
// WithForm.args = {}
//
// export const WithOnCloseCallback = () => <WithDrawerProvider Story={WithOnCloseCallbackStory} />
// // @ts-ignore
// WithOnCloseCallback.args = {}
//
// export const MultipleDrawers = () => <WithDrawerProvider Story={MultipleDrawersStory} />
// // @ts-ignore
// MultipleDrawers.args = {}
