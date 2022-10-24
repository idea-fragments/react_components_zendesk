import { ComponentType } from "react"

export type NavigationAction = {
                                 as?: ComponentType<{ href: string }>,
                                 href?: string,
                                 icon?: any | ComponentType,
                                 label: string,
                                 onClick?: () => any,
                               } & (NavigationLinkProps | NavigationButtonProps)

type NavigationLinkProps = { href: string }
type NavigationButtonProps = { onClick: () => any }
