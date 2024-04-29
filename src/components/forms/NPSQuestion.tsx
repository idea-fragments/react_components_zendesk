import { Button } from "components/forms/Button"
import { FlexBox } from "components/layout/FlexBox"
import { Label } from "components/text/Label"
import { Nullable } from "global"
import { FC, ReactNode } from "react"
import { arrayOfSizeN } from "utils/arrayHelpers"

export type NPSScore = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10

export type NPSQuestionProps = {
  label: ReactNode
  onChange: (n: NPSScore) => void
  value: Nullable<NPSScore>
}

export const NPSQuestion: FC<NPSQuestionProps> = ({
  label,
  onChange,
  value,
}) => {
  const select = (n: NPSScore) => () => {
    onChange(n)
  }

  return (
    <FlexBox withRows>
      <Label>{label}</Label>

      <FlexBox wrapped>
        {arrayOfSizeN(10).map((_, index) => {
          const score = (index + 1) as NPSScore

          return (
            <Button
              onClick={select(score)}
              primary={value === score}>
              {score}
            </Button>
          )
        })}
      </FlexBox>
    </FlexBox>
  )
}
