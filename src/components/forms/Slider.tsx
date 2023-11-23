import { Field, Label, Range as ZRange } from "@zendeskgarden/react-forms"
import { buttonLikeHoverable } from "components/forms/buttonMixins"
import { FormFieldProps } from "components/forms/formField.types"
import { Hint } from "components/forms/Hint"
import { Message } from "components/forms/Message"
import { VALIDATION_STATES } from "components/forms/validationStates"
import { FlexBox } from "components/layout/FlexBox"
import { StyledProps } from "components/StyledProps.type"
import throttle from "lodash/throttle"
import React, {
  ChangeEvent,
  FC,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react"
import styled, { css } from "styled-components"
import { COLORS } from "styles/colors"
import { ColorProps, ContainerProps } from "styles/types"
import { FONT_SIZES } from "styles/typography"

export type SliderProps = FormFieldProps &
  ColorProps & {
    min?: number
    max?: number
    onChange: (n: number, e: ChangeEvent<HTMLInputElement>) => void
    step?: number
    throttleMilliseconds?: number
    value: number
  }

export let Slider: FC<SliderProps> = ({
  color,
  disabled,
  fluid,
  hint,
  label,
  max = 100,
  message,
  min = 0,
  onChange,
  step = 1,
  throttleMilliseconds = 50,
  validation = { validation: VALIDATION_STATES.NONE },
  value: valueProp,
}) => {
  const [value, setValue] = useState(valueProp ?? min)
  const throttledOnChange = useMemo(
    () => throttle(onChange, throttleMilliseconds),
    [onChange, throttleMilliseconds],
  )

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setValue(Number(e.target.value))
      throttledOnChange(Number(e.target.value), e)
    },
    [throttledOnChange],
  )

  const syncValueFromParent = useCallback(() => {
    setValue(valueProp)
  }, [valueProp])

  useEffect(() => {
    syncValueFromParent()
  }, [syncValueFromParent])

  return (
    <Container
      fluid={fluid}
      gap={null}
      withRows>
      <Field>
        <Label hidden={!label}>{label ?? ""}</Label>
        {hint ? (
          <Hint
            _css={css`
              &&& {
                font-size: ${FONT_SIZES.XS};
              }
            `}>
            {hint}
          </Hint>
        ) : null}

        <Range
          color={color}
          disabled={disabled}
          max={max}
          min={min}
          onChange={handleChange}
          step={step}
          value={value}
          valuePercent={((value - min) / (max - min)) * 100}
        />

        {message ? (
          <Message
            css={`
              &&& {
                font-size: ${FONT_SIZES.XS};
              }
            `}
            validation={validation?.validation}>
            {message}
          </Message>
        ) : null}
      </Field>
    </Container>
  )
}

const baseTrackStyles = css<{ color: string; valuePercent: number }>`
  background: ${({ color, valuePercent }) =>
    `linear-gradient(to right, ${color} ${valuePercent}%, ${COLORS.LIGHT_GREY} ${valuePercent}%)`};
  border-radius: 0.5rem;
  height: 0.45rem;
`

const disabledThumbStyles = css<{ disabled?: boolean }>`
  ${({ disabled }) =>
    disabled ? `background-color: ${COLORS.LIGHT_GREY}` : ""};
`

const baseThumbStyles = css`
  -webkit-appearance: none;
  appearance: none;
  border-radius: 1.4rem;
  //margin-top: -.5rem; /* chrome only - centers thumb on the track */
  border: 0.2rem solid ${({ color }) => color};
  height: 1.4rem;
  width: 1.4rem;
  outline: none;
  ${buttonLikeHoverable};
  ${disabledThumbStyles};
`

Slider = styled(Slider)`
  && {
    font-size: inherit;
  }
`

const Range = styled(ZRange).attrs(
  ({ color, theme }: StyledProps<{ color?: string }>) => ({
    color: color ?? theme.styles.colorPrimary,
    primary: true,
  }),
)`
  && {
    &::-webkit-slider-runnable-track {
      ${baseTrackStyles};
    }

    &::-moz-range-track {
      ${baseTrackStyles}
    }

    &::-webkit-slider-thumb {
      ${baseThumbStyles};
      //box-shadow: -80px 0 0 80px #43e5f7;
    }

    &::-ms-fill-lower {
      background: #777;
      border-radius: 10px;
    }

    &::-ms-fill-upper {
      background: #ddd;
      border-radius: 10px;
    }
  }
`

const Container = styled(FlexBox)`
  ${({ fluid }: ContainerProps) => (fluid ? "width: 100%;" : "")}
  && * {
    font-size: inherit;
  }
`
