import { FlexBox, FlexBoxProps } from "components/layout/FlexBox"
import React, { FC, FormEvent, forwardRef, PropsWithChildren, Ref } from "react"
import styled from "styled-components"
import { SPACINGS } from "styles/spacings"
import { ContainerProps } from "styles/types"
import { PromiseFunc } from "utils/function.types"

export type FormProps = PropsWithChildren<{
  onSubmit: PromiseFunc
}> &
  ContainerProps &
  FlexBoxProps

export let Form: FC<FormProps> = forwardRef<HTMLFormElement, FormProps>(
  ({ onSubmit, className, children, ...props }, ref: Ref<HTMLFormElement>) => {
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      onSubmit()
    }

    return (
      <FlexBox
        as={"form"}
        className={className}
        gap={SPACINGS.SM}
        onSubmit={handleSubmit}
        withRows
        ref={ref}
        {...props}>
        <HiddenSubmit />
        {children}
      </FlexBox>
    )
  },
)

const HiddenSubmit = styled.input.attrs({
  type: "submit",
  tabIndex: -1,
})`
  position: absolute;
  left: -9999px;
  width: 1px;
  height: 1px;
`

Form = styled(Form)``
