import { Alert, ALERT_TYPES, AlertContent, AlertProps } from "components/Alert"
import { Button } from "components/forms/Button"
import React, { useState } from "react"

export default {
  component: Alert,
  title: "Alert",
}

const Story = (args: Partial<AlertProps>) => {
  const [isVisible, setIsVisible] = useState(true)

  return (
    <div style={{ padding: "2rem" }}>
      <Alert
        alertContent={{
          body: "This is an informational alert message.",
          title: "Information",
          type: ALERT_TYPES.INFO,
        }}
        closeAlert={() => setIsVisible(false)}
        isVisible={isVisible}
      />
    </div>
  )
}

export const Default = Story.bind({})

//
// const StoryWithCallback = () => {
//   const [isVisible, setIsVisible] = useState(false)
//   const [alertContent, setAlertContent] = useState<AlertContent | null>(null)
//   const [callbackFired, setCallbackFired] = useState(false)
//
//   const showAlert = () => {
//     setCallbackFired(false)
//     setAlertContent({
//       body: "Close this alert to trigger the callback.",
//       onClose: () => setCallbackFired(true),
//       title: "Alert with Callback",
//       type: ALERT_TYPES.INFO,
//     })
//     setIsVisible(true)
//   }
//
//   return (
//     <div style={{ padding: "2rem" }}>
//       <h3>Alert - With onClose Callback</h3>
//       <p>Click the button to show an alert with a close callback</p>
//       <Button onClick={showAlert}>Show Alert</Button>
//       {callbackFired ? (
//         <p style={{ color: "green", marginTop: "1rem" }}>
//           ✓ Callback was triggered!
//         </p>
//       ) : null}
//       <Alert
//         alertContent={alertContent}
//         closeAlert={() => setIsVisible(false)}
//         isVisible={isVisible}
//       />
//     </div>
//   )
// }
//
// export const WithCallback = StoryWithCallback.bind({})

// const StoryLongMessage = () => {
//   const [isVisible, setIsVisible] = useState(false)
//   const [alertContent, setAlertContent] = useState<AlertContent | null>(null)
//
//   const showAlert = () => {
//     setAlertContent({
//       body: "This is a much longer alert message that demonstrates how the alert component handles multiple lines of text. It should wrap nicely within the alert container and maintain good readability.",
//       title: "Long Message",
//       type: ALERT_TYPES.INFO,
//     })
//     setIsVisible(true)
//   }
//
//   return (
//     <div style={{ padding: "2rem" }}>
//       <h3>Alert - Long Message</h3>
//       <p>Click the button to show an alert with a long message</p>
//       <Button onClick={showAlert}>Show Alert</Button>
//       <Alert
//         alertContent={alertContent}
//         closeAlert={() => setIsVisible(false)}
//         isVisible={isVisible}
//       />
//     </div>
//   )
// }
//
// export const LongMessage = StoryLongMessage.bind({})
