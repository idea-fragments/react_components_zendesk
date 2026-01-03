import { Alert, ALERT_TYPES, AlertContent } from "components/Alert"
import { Button } from "components/forms/Button"
import React, { useState } from "react"

export default {
  component: Alert,
  title: "Alert",
}

const Story = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [alertContent, setAlertContent] = useState<AlertContent | null>(null)

  const showAlert = () => {
    setAlertContent({
      body: "This is an informational alert message.",
      title: "Information",
      type: ALERT_TYPES.INFO,
    })
    setIsVisible(true)
  }

  return (
    <div style={{ padding: "2rem" }}>
      <h3>Alert - Info Type</h3>
      <p>
        Click the button to show an info alert (auto-dismisses after 8 seconds)
      </p>
      <Button onClick={showAlert}>Show Info Alert</Button>
      <Alert
        alertContent={alertContent}
        closeAlert={() => setIsVisible(false)}
        isVisible={isVisible}
      />
    </div>
  )
}

export const Info = Story.bind({})

const StorySuccess = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [alertContent, setAlertContent] = useState<AlertContent | null>(null)

  const showAlert = () => {
    setAlertContent({
      body: "Your changes have been saved successfully!",
      title: "Success",
      type: ALERT_TYPES.SUCCESS,
    })
    setIsVisible(true)
  }

  return (
    <div style={{ padding: "2rem" }}>
      <h3>Alert - Success Type</h3>
      <p>Click the button to show a success alert</p>
      <Button onClick={showAlert}>Show Success Alert</Button>
      <Alert
        alertContent={alertContent}
        closeAlert={() => setIsVisible(false)}
        isVisible={isVisible}
      />
    </div>
  )
}

export const Success = StorySuccess.bind({})

const StoryError = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [alertContent, setAlertContent] = useState<AlertContent | null>(null)

  const showAlert = () => {
    setAlertContent({
      body: "An error occurred while processing your request. Please try again.",
      title: "Error",
      type: ALERT_TYPES.ERROR,
    })
    setIsVisible(true)
  }

  return (
    <div style={{ padding: "2rem" }}>
      <h3>Alert - Error Type</h3>
      <p>Click the button to show an error alert</p>
      <Button onClick={showAlert}>Show Error Alert</Button>
      <Alert
        alertContent={alertContent}
        closeAlert={() => setIsVisible(false)}
        isVisible={isVisible}
      />
    </div>
  )
}

export const Error = StoryError.bind({})

const StoryWarning = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [alertContent, setAlertContent] = useState<AlertContent | null>(null)

  const showAlert = () => {
    setAlertContent({
      body: "Your session will expire in 5 minutes. Please save your work.",
      title: "Warning",
      type: ALERT_TYPES.WARNING,
    })
    setIsVisible(true)
  }

  return (
    <div style={{ padding: "2rem" }}>
      <h3>Alert - Warning Type</h3>
      <p>Click the button to show a warning alert</p>
      <Button onClick={showAlert}>Show Warning Alert</Button>
      <Alert
        alertContent={alertContent}
        closeAlert={() => setIsVisible(false)}
        isVisible={isVisible}
      />
    </div>
  )
}

export const Warning = StoryWarning.bind({})

const StoryNoTitle = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [alertContent, setAlertContent] = useState<AlertContent | null>(null)

  const showAlert = () => {
    setAlertContent({
      body: "This alert has no title, just a body message.",
      type: ALERT_TYPES.INFO,
    })
    setIsVisible(true)
  }

  return (
    <div style={{ padding: "2rem" }}>
      <h3>Alert - No Title</h3>
      <p>Click the button to show an alert without a title</p>
      <Button onClick={showAlert}>Show Alert</Button>
      <Alert
        alertContent={alertContent}
        closeAlert={() => setIsVisible(false)}
        isVisible={isVisible}
      />
    </div>
  )
}

export const NoTitle = StoryNoTitle.bind({})

const StoryWithCallback = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [alertContent, setAlertContent] = useState<AlertContent | null>(null)
  const [callbackFired, setCallbackFired] = useState(false)

  const showAlert = () => {
    setCallbackFired(false)
    setAlertContent({
      body: "Close this alert to trigger the callback.",
      onClose: () => setCallbackFired(true),
      title: "Alert with Callback",
      type: ALERT_TYPES.INFO,
    })
    setIsVisible(true)
  }

  return (
    <div style={{ padding: "2rem" }}>
      <h3>Alert - With onClose Callback</h3>
      <p>Click the button to show an alert with a close callback</p>
      <Button onClick={showAlert}>Show Alert</Button>
      {callbackFired ? (
        <p style={{ color: "green", marginTop: "1rem" }}>
          ✓ Callback was triggered!
        </p>
      ) : null}
      <Alert
        alertContent={alertContent}
        closeAlert={() => setIsVisible(false)}
        isVisible={isVisible}
      />
    </div>
  )
}

export const WithCallback = StoryWithCallback.bind({})

const StoryLongMessage = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [alertContent, setAlertContent] = useState<AlertContent | null>(null)

  const showAlert = () => {
    setAlertContent({
      body: "This is a much longer alert message that demonstrates how the alert component handles multiple lines of text. It should wrap nicely within the alert container and maintain good readability.",
      title: "Long Message",
      type: ALERT_TYPES.INFO,
    })
    setIsVisible(true)
  }

  return (
    <div style={{ padding: "2rem" }}>
      <h3>Alert - Long Message</h3>
      <p>Click the button to show an alert with a long message</p>
      <Button onClick={showAlert}>Show Alert</Button>
      <Alert
        alertContent={alertContent}
        closeAlert={() => setIsVisible(false)}
        isVisible={isVisible}
      />
    </div>
  )
}

export const LongMessage = StoryLongMessage.bind({})
