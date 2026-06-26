import { mdiClose } from "@mdi/js"
import { Button, BUTTON_SIZES } from "components/forms/Button"
import { Tooltip, TooltipProps } from "components/tooltips/Tooltip"
import React, { FC, ReactElement, ReactNode } from "react"
import styled from "styled-components"
import { SPACINGS } from "styles/spacings"
import { FONT_SIZES, FONT_WEIGHTS } from "styles/typography"

export type SteppedTooltipStep = {
  label?: string
  isAction?: boolean
  title: ReactNode
  body: ReactNode
  actionHint?: ReactNode
}

export type SteppedTooltipProps = {
  children: ReactElement
  step?: SteppedTooltipStep | null
  placement?: TooltipProps["placement"]
  width?: number
  dotCount?: number
  activeDotIndex?: number
  onBack?: () => void
  onNext?: () => void
  isFinish?: boolean
  onExit?: () => void
  offset?: number
  arrow?: boolean
}

const CardTooltip = styled(Tooltip)`
  && {
    background: ${({ theme }) => theme.styles.colors.white};
    border: none;
    border-radius: 16px;
    box-shadow: 0 14px 40px rgba(0, 0, 0, 0.28);
    padding: ${SPACINGS.SM};
  }
`

const ExitBtnWrap = styled.div`
  position: absolute;
  right: ${SPACINGS.SM};
  top: ${SPACINGS.SM};
`

const HeaderRow = styled.div`
  align-items: center;
  display: flex;
  gap: ${SPACINGS.XS};
  margin-bottom: ${SPACINGS.XS};
`

const StepLabel = styled.div`
  color: ${({ theme }) => theme.styles.colors.primary[700]};
  font-size: ${FONT_SIZES.XXS};
  font-weight: ${FONT_WEIGHTS.BOLD};
  letter-spacing: 0.08em;
  text-transform: uppercase;
`

const ActionBadge = styled.div`
  background: ${({ theme }) => theme.styles.colors.amber[100]};
  border-radius: 20px;
  color: ${({ theme }) => theme.styles.colors.amber[800]};
  flex-shrink: 0;
  font-size: ${FONT_SIZES.XXS};
  font-weight: ${FONT_WEIGHTS.BOLD};
  padding: ${SPACINGS.XXS} ${SPACINGS.XS};
`

const Title = styled.div`
  color: ${({ theme }) => theme.styles.textColorDark};
  font-size: ${FONT_SIZES.SM};
  font-weight: ${FONT_WEIGHTS.BLACK};
  margin-bottom: ${SPACINGS.XXS};
`

const Body = styled.div`
  color: ${({ theme }) => theme.styles.textColorPrimary};
  font-size: ${FONT_SIZES.SM};
  line-height: 1.52;
`

const ActionHint = styled.div`
  background: ${({ theme }) => theme.styles.colors.primary[100]};
  border-radius: 10px;
  color: ${({ theme }) => theme.styles.colors.primary[800]};
  font-size: ${FONT_SIZES.XS};
  font-weight: ${FONT_WEIGHTS.BOLD};
  margin-top: ${SPACINGS.SM};
  padding: ${SPACINGS.XS};
`

const FooterRow = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-top: ${SPACINGS.SM};
`

const FooterRight = styled.div`
  align-items: center;
  display: flex;
  gap: ${SPACINGS.SM};
`

const DotsRow = styled.div`
  align-items: center;
  display: flex;
  gap: ${SPACINGS.XXS};
`

const Dot = styled.span<{ $active: boolean }>`
  background: ${({ $active, theme }) =>
    $active ? theme.styles.colorPrimary : theme.styles.colors.grey[300]};
  border-radius: 4px;
  display: inline-block;
  flex-shrink: 0;
  height: 7px;
  width: 7px;
`

const ExitBtn: FC<{ onClick?: () => void }> = ({ onClick }) => (
  <ExitBtnWrap>
    <Button
      compact
      flat
      icon={mdiClose}
      iconSize={FONT_SIZES.SM}
      onClick={onClick!}
      size={BUTTON_SIZES.X_SMALL}
    />
  </ExitBtnWrap>
)

type CardFooterProps = {
  dotCount: number
  activeDotIndex: number
  isAction?: boolean
  isFinish?: boolean
  onBack?: () => void
  onNext?: () => void
}

const CardFooter: FC<CardFooterProps> = ({
  dotCount,
  activeDotIndex,
  isAction,
  isFinish,
  onBack,
  onNext,
}) => {
  const showNext = Boolean(onNext) && !isAction
  if (!onBack && dotCount === 0 && !showNext) return null

  return (
    <FooterRow>
      {onBack ? (
        <Button
          inline
          onClick={onBack!}
          size={BUTTON_SIZES.SMALL}>
          Back
        </Button>
      ) : (
        <span />
      )}
      <FooterRight>
        {dotCount > 0 ? (
          <DotsRow>
            {Array.from({ length: dotCount }, (_, i) => (
              <Dot
                key={i}
                $active={i === activeDotIndex}
              />
            ))}
          </DotsRow>
        ) : null}
        {showNext ? (
          <Button
            onClick={onNext!}
            size={BUTTON_SIZES.SMALL}>
            {isFinish ? "Finish" : "Next"}
          </Button>
        ) : null}
      </FooterRight>
    </FooterRow>
  )
}

export const SteppedTooltip: FC<SteppedTooltipProps> = ({
  children,
  step,
  placement = "bottom",
  width = 290,
  dotCount = 0,
  activeDotIndex = 0,
  onBack,
  onNext,
  isFinish,
  onExit,
  offset,
  arrow = true,
}) => {
  if (!step) return children

  const content = (
    <>
      {onExit ? <ExitBtn onClick={onExit} /> : null}
      {step.label || step.isAction ? (
        <HeaderRow>
          {step.label ? <StepLabel>{step.label}</StepLabel> : null}
          {step.isAction ? <ActionBadge>Action</ActionBadge> : null}
        </HeaderRow>
      ) : null}
      <Title>{step.title}</Title>
      <Body>{step.body}</Body>
      {step.actionHint ? <ActionHint>{step.actionHint}</ActionHint> : null}
      <CardFooter
        activeDotIndex={activeDotIndex}
        dotCount={dotCount}
        isAction={step.isAction}
        isFinish={isFinish}
        onBack={onBack}
        onNext={onNext}
      />
    </>
  )

  return (
    <CardTooltip
      arrow={arrow}
      content={content}
      isVisible
      maxWidth={`${width}px`}
      placement={placement}
      popperModifiers={
        offset != null ? { offset: { offset: `0, ${offset}` } } : undefined
      }
      type={"light"}>
      {children}
    </CardTooltip>
  )
}
