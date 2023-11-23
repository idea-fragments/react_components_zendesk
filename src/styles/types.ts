import { FlattenSimpleInterpolation } from "styled-components"

export type ColorProps = {
  accent?: boolean
  color?: string
  danger?: boolean
  neutral?: boolean
  primary?: boolean
  // deprecated
  secondary?: boolean
  success?: boolean
  warning?: boolean
}

export type ContainerProps = {
  _css?: CSS
  color?: string
  compact?: boolean
  fluid?: boolean
  className?: any
}

export type CSS<T = any> = FlattenSimpleInterpolation | string | T

export type CSSProp<T = any> = {
  _css?: CSS<T>
  className?: string
}
