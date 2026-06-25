import React, { FC, ReactElement, ReactNode } from "react"
import styled from "styled-components"
import { Tooltip, TooltipProps } from "components/tooltips/Tooltip"

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
}

const CardTooltip = styled(Tooltip)`
  && {
    background: #fff;
    border: none;
    border-radius: 16px;
    box-shadow: 0 14px 40px rgba(0, 0, 0, 0.28);
    padding: 16px 17px;
  }
`

const ExitBtnWrap = styled.div`
  cursor: pointer;
  line-height: 0;
  position: absolute;
  right: 12px;
  top: 11px;
`

const HeaderRow = styled.div`
  align-items: center;
  display: flex;
  gap: 8px;
  margin-bottom: 8px;
`

const StepLabel = styled.div`
  color: #1c6b48;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`

const ActionBadge = styled.div`
  background: #f6efcf;
  border-radius: 20px;
  color: #7a5f12;
  flex-shrink: 0;
  font-size: 11px;
  font-weight: 700;
  padding: 3px 9px;
`

const Title = styled.div`
  color: #1b2620;
  font-size: 15.5px;
  font-weight: 800;
  margin-bottom: 5px;
`

const Body = styled.div`
  color: #5f6d64;
  font-size: 13.5px;
  line-height: 1.52;
`

const ActionHint = styled.div`
  background: #eef6f1;
  border-radius: 10px;
  color: #134e36;
  font-size: 12.5px;
  font-weight: 700;
  margin-top: 13px;
  padding: 9px 11px;
`

const FooterRow = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-top: 14px;
`

const BackBtn = styled.span`
  color: #7c8a80;
  cursor: pointer;
  font-size: 13.5px;
  font-weight: 700;
`

const FooterRight = styled.div`
  align-items: center;
  display: flex;
  gap: 8px;
`

const DotsRow = styled.div`
  align-items: center;
  display: flex;
  gap: 5px;
`

const Dot = styled.span<{ $active: boolean }>`
  background: ${({ $active }) => ($active ? "#134e36" : "#d6ddd7")};
  border-radius: 4px;
  display: inline-block;
  flex-shrink: 0;
  height: 7px;
  width: 7px;
`

const NavButton = styled.div`
  background: #134e36;
  border-radius: 10px;
  color: #fff;
  cursor: pointer;
  font-size: 13.5px;
  font-weight: 700;
  padding: 8px 18px;
`

const ExitBtn: FC<{ onClick?: () => void }> = ({ onClick }) => (
  <ExitBtnWrap onClick={onClick}>
    <svg
      fill="none"
      height={15}
      stroke="#b3bcb4"
      strokeLinecap="round"
      strokeWidth="2.5"
      viewBox="0 0 24 24"
      width={15}>
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
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
      {onBack ? <BackBtn onClick={onBack}>Back</BackBtn> : <span />}
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
          <NavButton onClick={onNext}>{isFinish ? "Finish" : "Next"}</NavButton>
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
      arrow
      content={content}
      isVisible
      maxWidth={`${width}px`}
      placement={placement}
      type={"light"}>
      {children}
    </CardTooltip>
  )
}
