import { FlexBox }                               from "components/layout/FlexBox"
import React, { FC, FormEvent, forwardRef, Ref } from "react"
import styled                                    from "styled-components"
import { SPACINGS }                              from "styles/spacings"
import type { ContainerProps }                   from "styles/types"
import type { PromiseFunc }                      from "utils/function.types"

type Props = {
  onSubmit: PromiseFunc,
} & ContainerProps

export let Form: FC<Props> = forwardRef<HTMLFormElement, Props>((
  { onSubmit, className, children, ...props },
  ref: Ref<HTMLFormElement>,
) => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    onSubmit()
  }

  return <FlexBox withRows
                  as={"form"}
                  onSubmit={handleSubmit}
                  gap={SPACINGS.SM}
                  className={className}
                  ref={ref}
                  {...props}>
    <HiddenSubmit />
    {children}
  </FlexBox>
})

const HiddenSubmit = styled.input.attrs({
  type:     "submit",
  tabIndex: -1,
})`
  position: absolute;
  left: -9999px;
  width: 1px;
  height: 1px;
`

Form = styled(Form)``
