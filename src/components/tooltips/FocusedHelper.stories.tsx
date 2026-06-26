import { Button } from "components/forms/Button"
import { FocusedHelper } from "components/tooltips/FocusedHelper"
import {
  SteppedTooltip,
  SteppedTooltipStep,
} from "components/tooltips/SteppedTooltip"
import React, { ReactElement, useRef, useState } from "react"
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

const ROW_STEP: SteppedTooltipStep = {
  body: "We extract the store name, items, and total automatically.",
  label: "Step 2 of 5",
  title: "We're reading it now",
}

const ROW_COLUMNS = "40px 1fr 130px 110px"

// Climb to the nearest grid ancestor — mirrors how a consumer would resolve a
// table row from an inner cell.
const nearestGrid = (el: Element): Element => {
  let current: Element | null = el.parentElement
  while (current) {
    if (window.getComputedStyle(current).display === "grid") return current
    current = current.parentElement
  }
  return el
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

// Target mode via targetRef: spotlight an element the helper does NOT wrap, so
// the surrounding layout is untouched. FocusedHelper is rendered as a sibling.
const TargetRefStory = () => {
  const [active, setActive] = useState(false)
  const rowRef = useRef<HTMLDivElement>(null)

  return (
    <FlexBox
      _css={`padding: ${SPACINGS.XXXL} ${SPACINGS.LG};`}
      justifyContent={"center"}
      withRows>
      <Button onClick={() => setActive((a) => !a)}>
        {active ? "Deactivate spotlight" : "Spotlight the middle row"}
      </Button>

      <div
        css={`
          border: 1px solid #eaece9;
          border-radius: 8px;
          overflow: hidden;
          width: 460px;
        `}>
        {["Trader Joe's", "Whole Foods Market", "Green Grocer"].map(
          (store, i) => (
            <div
              css={`
                border-bottom: 1px solid #f0f1f0;
                padding: ${SPACINGS.SM} ${SPACINGS.MD};
              `}
              key={store}
              ref={i === 1 ? rowRef : undefined}>
              {store} · $4{i}.17
            </div>
          ),
        )}
      </div>

      <FocusedHelper
        active={active}
        renderTooltip={(child: ReactElement) => (
          <SteppedTooltip
            activeDotIndex={1}
            dotCount={5}
            onExit={() => setActive(false)}
            onNext={() => setActive(false)}
            placement={"bottom"}
            step={active ? ROW_STEP : null}>
            {child}
          </SteppedTooltip>
        )}
        ringPadding={6}
        targetRef={rowRef}
      />
    </FlexBox>
  )
}

// Target mode via resolveTarget: query an inner cell and climb to its grid row.
// This is the layout the wrap-mode PaddedAnchor would have collapsed; here the
// grid row keeps its 1fr columns and is spotlit in place.
const ResolveTargetStory = () => {
  const [active, setActive] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <FlexBox
      _css={`padding: ${SPACINGS.XXXL} ${SPACINGS.LG};`}
      justifyContent={"center"}
      withRows>
      <Button onClick={() => setActive((a) => !a)}>
        {active ? "Deactivate spotlight" : "Spotlight the first row"}
      </Button>

      <div
        css={`
          border: 1px solid #eaece9;
          border-radius: 8px;
          overflow: hidden;
          width: 520px;
        `}
        ref={containerRef}>
        {[
          ["Whole Foods Market", "Processing", "$42.17"],
          ["Trader Joe's", "Completed", "$31.04"],
        ].map(([store, status, total], i) => (
          <div
            css={`
              align-items: center;
              border-bottom: 1px solid #f0f1f0;
              display: grid;
              grid-template-columns: ${ROW_COLUMNS};
              padding: ${SPACINGS.SM} ${SPACINGS.MD};
            `}
            key={store}>
            <span css={"color: #c7cfc9;"}>{i + 1}</span>
            <span
              className={i === 0 ? "sb-store-cell" : undefined}
              css={"font-weight: 700;"}>
              {store}
            </span>
            <span css={"color: #5a6b62;"}>{status}</span>
            <span css={"font-weight: 700;"}>{total}</span>
          </div>
        ))}
      </div>

      <FocusedHelper
        active={active}
        recomputeKey={active}
        renderTooltip={(child: ReactElement) => (
          <SteppedTooltip
            activeDotIndex={1}
            dotCount={5}
            onExit={() => setActive(false)}
            onNext={() => setActive(false)}
            placement={"bottom"}
            step={active ? ROW_STEP : null}>
            {child}
          </SteppedTooltip>
        )}
        resolveTarget={() => {
          const cell = containerRef.current?.querySelector(".sb-store-cell")
          return cell ? nearestGrid(cell) : null
        }}
        ringBorderRadius={10}
        ringPadding={6}
      />
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

export const TargetRef = TargetRefStory.bind({})
// @ts-ignore
TargetRef.args = {}

export const ResolveTarget = ResolveTargetStory.bind({})
// @ts-ignore
ResolveTarget.args = {}
