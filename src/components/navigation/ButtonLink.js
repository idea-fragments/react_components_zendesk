// @flow


import React                               from "react"
import { Button }                          from "components/forms/Button"
import type { Path }                       from "router/Route.type"
import { useRouter }                       from "router/Router"
import type { ColorProps, ContainerProps } from "styles/types"


type Props = {
    to :Path,
    children :string,
} & ColorProps & ContainerProps

export const ButtonLink = ({ to, children, ...otherProps } :Props) => {
    const router = useRouter()

    return (
        <Button {...otherProps}
                flat
                // as={MyLink}
                onClick={() => router.navigateTo(to)}
                to={to}>
            {children}
        </Button>
    )
}

ButtonLink.COMPONENT_NAME = "ButtonLink"
ButtonLink.defaultProps   = {
    primary: false,
}
