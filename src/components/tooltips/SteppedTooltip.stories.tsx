import { Button } from "components/forms/Button"
import { FlexBox } from "components/layout/FlexBox"
import {
  SteppedTooltip,
  SteppedTooltipStep,
} from "components/tooltips/SteppedTooltip"
import React, { useState } from "react"
import { SPACINGS } from "styles/spacings"

export default {
  argTypes: {},
  title: "tooltips/SteppedTooltip",
}

const STEPS: SteppedTooltipStep[] = [
  {
    actionHint: "Tap the camera button to continue",
    body: "Tap the camera button to open the scanner — we'll read the items and totals for you.",
    isAction: true,
    title: "Scan your first receipt",
  },
  {
    body: "Your receipt is uploading. It shows as Processing while we extract the store name, items, and total.",
    label: "Step 2 of 5",
    title: "We're reading it now",
  },
  {
    body: "Once finished, the store name, total, and categories appear. We'll send you a notification when your receipt is ready.",
    label: "Step 3 of 5",
    title: "Done — automatically",
  },
  {
    body: "Tap any completed receipt to see its full breakdown — every item, category, and price.",
    label: "Step 4 of 5",
    title: "Open the details",
  },
  {
    body: "Scan more receipts to start building your spending and health insights.",
    label: "Step 5 of 5",
    title: "You're all set!",
  },
]

const ActionStepStory = () => {
  const [visible, setVisible] = useState(true)

  return (
    <FlexBox
      _css={`padding: 160px 60px;`}
      justifyContent={"center"}>
      <SteppedTooltip
        activeDotIndex={0}
        dotCount={5}
        onBack={undefined}
        onExit={() => setVisible(false)}
        placement={"bottom"}
        step={visible ? STEPS[0] : null}>
        <Button onClick={() => setVisible(true)}>Camera button</Button>
      </SteppedTooltip>
    </FlexBox>
  )
}

const RegularStepStory = () => {
  const [visible, setVisible] = useState(true)

  return (
    <FlexBox
      _css={`padding: 80px 320px 80px 60px;`}
      alignItems={"flex-start"}>
      <SteppedTooltip
        activeDotIndex={1}
        dotCount={5}
        onBack={() => {}}
        onNext={() => setVisible(false)}
        placement={"end"}
        step={visible ? STEPS[1] : null}
        width={295}>
        <div
          css={`
            background: #f3f4f2;
            border-radius: 8px;
            cursor: pointer;
            padding: 12px 16px;
            width: 340px;
          `}>
          Whole Foods Market · $42.17
        </div>
      </SteppedTooltip>
    </FlexBox>
  )
}

const FinishStepStory = () => {
  const [visible, setVisible] = useState(true)

  return (
    <FlexBox
      _css={`padding: 80px 320px 80px 60px;`}
      alignItems={"flex-start"}>
      <SteppedTooltip
        activeDotIndex={4}
        dotCount={5}
        isFinish
        onBack={() => {}}
        onNext={() => setVisible(false)}
        placement={"end"}
        step={visible ? STEPS[4] : null}
        width={295}>
        <div
          css={`
            background: #f3f4f2;
            border-radius: 8px;
            cursor: pointer;
            padding: 12px 16px;
            width: 340px;
          `}>
          Whole Foods Market · $42.17
        </div>
      </SteppedTooltip>
    </FlexBox>
  )
}

const InteractiveStory = () => {
  const [stepIndex, setStepIndex] = useState<number | null>(0)

  const currentStep = stepIndex !== null ? STEPS[stepIndex] : null
  const isLast = stepIndex === STEPS.length - 1

  const handleNext = () => {
    if (stepIndex === null) return
    if (isLast) {
      setStepIndex(null)
    } else {
      setStepIndex(stepIndex + 1)
    }
  }

  const handleBack = () => {
    if (stepIndex === null || stepIndex === 0) return
    setStepIndex(stepIndex - 1)
  }

  const isActionStep = currentStep?.isAction === true

  return (
    <FlexBox
      _css={`padding: 160px 60px;`}
      gap={SPACINGS.LG}
      withRows>
      <FlexBox justifyContent={"center"}>
        <SteppedTooltip
          activeDotIndex={stepIndex ?? 0}
          dotCount={STEPS.length}
          isFinish={isLast}
          onBack={stepIndex && stepIndex > 0 ? handleBack : undefined}
          onExit={() => setStepIndex(null)}
          onNext={isActionStep ? undefined : handleNext}
          placement={"bottom"}
          step={currentStep}>
          <Button onClick={() => setStepIndex(0)}>
            {stepIndex === null ? "Restart walkthrough" : "Camera button"}
          </Button>
        </SteppedTooltip>
      </FlexBox>
    </FlexBox>
  )
}

const CustomLabelStory = () => {
  const [visible, setVisible] = useState(true)

  return (
    <FlexBox
      _css={`padding: 160px 60px;`}
      justifyContent={"center"}>
      <SteppedTooltip
        activeDotIndex={1}
        dotCount={5}
        onBack={() => {}}
        onExit={() => setVisible(false)}
        onNext={() => setVisible(false)}
        placement={"bottom"}
        step={
          visible
            ? {
                body: "This step overrides the Stepper's auto-generated title with its own label.",
                label: "Getting started",
                title: "Custom label wins",
              }
            : null
        }>
        <Button onClick={() => setVisible(true)}>Anchor</Button>
      </SteppedTooltip>
    </FlexBox>
  )
}

export const ActionStep = ActionStepStory.bind({})
// @ts-ignore
ActionStep.args = {}

export const RegularStep = RegularStepStory.bind({})
// @ts-ignore
RegularStep.args = {}

export const FinishStep = FinishStepStory.bind({})
// @ts-ignore
FinishStep.args = {}

export const Interactive = InteractiveStory.bind({})
// @ts-ignore
Interactive.args = {}

export const CustomLabel = CustomLabelStory.bind({})
// @ts-ignore
CustomLabel.args = {}
