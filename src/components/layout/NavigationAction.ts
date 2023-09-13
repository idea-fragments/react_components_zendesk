import { ComponentType } from "react"

export type NavigationAction = {
                                 alwaysActive?: boolean,
                                 as?: ComponentType<{ href: string }>,
                                 href?: string,
                                 icon?: any | ComponentType,
                                 label: string,
                                 onClick?: () => void,
                               } & (NavigationLinkProps | NavigationButtonProps)

type NavigationLinkProps = { href: string }
type NavigationButtonProps = { onClick: () => void }
