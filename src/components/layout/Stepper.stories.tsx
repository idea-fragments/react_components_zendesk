import { FlexBox } from "components/layout/FlexBox"
import { Stepper } from "components/layout/Stepper"
import { Text } from "components/text/Text"
import React, { useState } from "react"
import { css } from "styled-components"
import { SPACINGS } from "styles/spacings"
import { useTheme } from "styles/theme/useTheme"
import { FONT_SIZES, FONT_WEIGHTS } from "styles/typography"

export default {
  argTypes: {},
  title: "layouts/Stepper",
}

const HeaderCard = ({
  currentStep,
  stepCount,
}: {
  currentStep: number
  stepCount: number
}) => {
  const theme = useTheme()

  return (
    <div
      css={`
        background: ${theme.styles.colors.white};
        border-radius: 12px;
        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
        padding: ${SPACINGS.MD};
        width: 320px;
      `}>
      <Stepper
        currentStep={currentStep}
        stepCount={stepCount}>
        {({ dots, title }) => (
          <FlexBox
            alignItems={"center"}
            justifyContent={"space-between"}>
            <Text
              _css={css`
                font-size: ${FONT_SIZES.XS};
                font-weight: ${FONT_WEIGHTS.BOLD};
                letter-spacing: 0.08em;
                text-transform: uppercase;
              `}>
              {title}
            </Text>
            {dots}
          </FlexBox>
        )}
      </Stepper>
    </div>
  )
}

const DefaultStory = () => (
  <FlexBox
    _css={`padding: ${SPACINGS.LG};`}
    justifyContent={"center"}>
    <HeaderCard
      currentStep={2}
      stepCount={5}
    />
  </FlexBox>
)

const FirstStepStory = () => (
  <FlexBox
    _css={`padding: ${SPACINGS.LG};`}
    justifyContent={"center"}>
    <HeaderCard
      currentStep={1}
      stepCount={5}
    />
  </FlexBox>
)

const LastStepStory = () => (
  <FlexBox
    _css={`padding: ${SPACINGS.LG};`}
    justifyContent={"center"}>
    <HeaderCard
      currentStep={5}
      stepCount={5}
    />
  </FlexBox>
)

const CustomPaletteStory = () => {
  const theme = useTheme()

  return (
    <FlexBox
      _css={`padding: ${SPACINGS.LG};`}
      justifyContent={"center"}>
      <div
        css={`
          background: ${theme.styles.colors.white};
          border-radius: 12px;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
          padding: ${SPACINGS.MD};
          width: 320px;
        `}>
        <Stepper
          color={theme.styles.colors.green}
          currentStep={3}
          stepCount={5}>
          {({ dots, title }) => (
            <FlexBox
              alignItems={"center"}
              gap={SPACINGS.SM}
              justifyContent={"space-between"}>
              <Text
                _css={css`
                  color: ${theme.styles.colors.green[700]};
                  font-weight: ${FONT_WEIGHTS.BOLD};
                `}>
                {title}
              </Text>
              {dots}
            </FlexBox>
          )}
        </Stepper>
      </div>
    </FlexBox>
  )
}

const OverrideColorsStory = () => {
  const theme = useTheme()

  return (
    <FlexBox
      _css={`padding: ${SPACINGS.LG};`}
      justifyContent={"center"}>
      <div
        css={`
          background: ${theme.styles.colors.white};
          border-radius: 12px;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
          padding: ${SPACINGS.MD};
          width: 320px;
        `}>
        <Stepper
          completedColor={theme.styles.colors.green[500]}
          currentColor={theme.styles.colors.red[600]}
          currentStep={3}
          incompleteColor={theme.styles.colors.grey[200]}
          stepCount={5}>
          {({ dots, title }) => (
            <FlexBox
              alignItems={"center"}
              gap={SPACINGS.SM}
              justifyContent={"space-between"}>
              <Text
                _css={css`
                  font-weight: ${FONT_WEIGHTS.BOLD};
                `}>
                {title}
              </Text>
              {dots}
            </FlexBox>
          )}
        </Stepper>
      </div>
    </FlexBox>
  )
}

const StackedLayoutStory = () => {
  const theme = useTheme()

  return (
    <FlexBox
      _css={`padding: ${SPACINGS.LG};`}
      justifyContent={"center"}>
      <div
        css={`
          background: ${theme.styles.colors.white};
          border-radius: 12px;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
          padding: ${SPACINGS.MD};
          width: 320px;
        `}>
        <Stepper
          currentStep={2}
          stepCount={4}>
          {({ dots, title }) => (
            <FlexBox
              alignItems={"center"}
              gap={SPACINGS.XS}
              withRows>
              {dots}
              <Text
                _css={css`
                  font-size: ${FONT_SIZES.SM};
                  font-weight: ${FONT_WEIGHTS.BOLD};
                `}>
                {title}
              </Text>
            </FlexBox>
          )}
        </Stepper>
      </div>
    </FlexBox>
  )
}

const InteractiveStory = () => {
  const [currentStep, setCurrentStep] = useState(1)
  const stepCount = 5

  return (
    <FlexBox
      _css={`padding: ${SPACINGS.LG};`}
      gap={SPACINGS.MD}
      justifyContent={"center"}
      withRows>
      <HeaderCard
        currentStep={currentStep}
        stepCount={stepCount}
      />
      <FlexBox
        gap={SPACINGS.SM}
        justifyContent={"center"}>
        <button
          disabled={currentStep <= 1}
          onClick={() => setCurrentStep((s) => Math.max(1, s - 1))}>
          Back
        </button>
        <button
          disabled={currentStep >= stepCount}
          onClick={() => setCurrentStep((s) => Math.min(stepCount, s + 1))}>
          Next
        </button>
      </FlexBox>
    </FlexBox>
  )
}

export const Default = DefaultStory.bind({})
// @ts-ignore
Default.args = {}

export const FirstStep = FirstStepStory.bind({})
// @ts-ignore
FirstStep.args = {}

export const LastStep = LastStepStory.bind({})
// @ts-ignore
LastStep.args = {}

export const CustomPalette = CustomPaletteStory.bind({})
// @ts-ignore
CustomPalette.args = {}

export const OverrideColors = OverrideColorsStory.bind({})
// @ts-ignore
OverrideColors.args = {}

export const StackedLayout = StackedLayoutStory.bind({})
// @ts-ignore
StackedLayout.args = {}

export const Interactive = InteractiveStory.bind({})
// @ts-ignore
Interactive.args = {}
