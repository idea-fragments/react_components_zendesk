import { Validation } from "components/forms/Validation.type"
import { ChangeEvent, InputHTMLAttributes, ReactNode } from "react"
import { ContainerProps } from "styles/types"

export type FormFieldProps = {
  disabled?: boolean
  emptyState?: ReactNode
  hint?: ReactNode
  label?: ReactNode
  message?: ReactNode
  required?: boolean
  validation?: Validation | undefined
} & ContainerProps

export type TextFieldProps<V = string> = Pick<
  InputHTMLAttributes<HTMLInputElement>,
  "autoComplete" | "inputMode" | "placeholder" | "step" | "type"
> & {
  faux?: boolean
  onChange: (value: V, event: ChangeEvent<HTMLInputElement>) => void
  small?: boolean
  symbolProp?: string
  value?: V
} & FormFieldProps
