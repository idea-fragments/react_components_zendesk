import { ComponentType, PropsWithChildren } from "react"

export type NavigationAction = {
  alwaysActive?: boolean
  Component: ComponentType<PropsWithChildren<{ href: string }>>
  href?: string
  icon?: any | ComponentType
  label: string
  onClick?: () => void
} & (NavigationLinkProps | NavigationButtonProps)

type NavigationLinkProps = { href: string }
type NavigationButtonProps = { onClick: () => void }
