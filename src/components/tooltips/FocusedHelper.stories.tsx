import { Button } from "components/forms/Button"
import { FocusedHelper } from "components/tooltips/FocusedHelper"
import {
  SteppedTooltip,
  SteppedTooltipStep,
} from "components/tooltips/SteppedTooltip"
import React, { ReactElement, useState } from "react"
import { FlexBox } from "components/layout/FlexBox"
import { SPACINGS } from "styles/spacings"

export default {
  argTypes: {},
  title: "tooltips/FocusedHelper",
}

const STEP: SteppedTooltipStep = {
  actionHint: "Tap the camera button to continue",
  body: "Tap the camera button to open the scanner — we'll read the items and totals for you.",
  isAction: true,
  label: "Step 1 of 5",
  title: "Scan your first receipt",
}

const BasicStory = () => {
  const [active, setActive] = useState(false)

  return (
    <FlexBox
      _css={`padding: ${SPACINGS.XXXL} ${SPACINGS.LG};`}
      justifyContent={"center"}>
      <FocusedHelper active={active}>
        <Button onClick={() => setActive(!active)}>
          {active ? "Deactivate spotlight" : "Activate spotlight"}
        </Button>
      </FocusedHelper>
    </FlexBox>
  )
}

const WithTooltipStory = () => {
  const [active, setActive] = useState(false)

  return (
    <FlexBox
      _css={`padding: ${SPACINGS.XXXL} ${SPACINGS.LG};`}
      justifyContent={"center"}>
      <FocusedHelper
        active={active}
        renderTooltip={(child: ReactElement) => (
          <SteppedTooltip
            activeDotIndex={0}
            dotCount={5}
            onExit={() => setActive(false)}
            placement={"bottom"}
            step={active ? STEP : null}>
            {child}
          </SteppedTooltip>
        )}>
        <Button onClick={() => setActive(true)}>Camera button</Button>
      </FocusedHelper>
    </FlexBox>
  )
}

const CustomRadiusStory = () => {
  const [active, setActive] = useState(false)

  return (
    <FlexBox
      _css={`padding: ${SPACINGS.XXXL} ${SPACINGS.LG};`}
      justifyContent={"center"}>
      <FocusedHelper
        active={active}
        ringBorderRadius={0}>
        <div
          css={`
            background: #f3f4f2;
            border-radius: 4px;
            cursor: pointer;
            padding: ${SPACINGS.SM} ${SPACINGS.MD};
            width: 400px;
          `}
          onClick={() => setActive(!active)}>
          Whole Foods Market · $42.17 — click to spotlight row
        </div>
      </FocusedHelper>
    </FlexBox>
  )
}

export const Basic = BasicStory.bind({})
// @ts-ignore
Basic.args = {}

export const WithTooltip = WithTooltipStory.bind({})
// @ts-ignore
WithTooltip.args = {}

export const CustomRadius = CustomRadiusStory.bind({})
// @ts-ignore
CustomRadius.args = {}
