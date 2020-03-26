// @flow


import { Icon }                            from "components/Icon"
import { FlexBlock }                       from "components/layout/FlexBlock"
import React, { type ComponentType }       from "react"
import { Button, Props as ButtonProps }    from "components/forms/Button"
import { SPACINGS }                        from "styles/spacings"
import type { ColorProps, ContainerProps } from "styles/types"
import { DO_NOTHING }                      from "utils/functionHelpers"

type Props = {
    to :any,
    external :boolean,
    LinkComponent :ComponentType<{ className :string, to :any } & *>
} & ButtonProps & ColorProps & ContainerProps

export const ButtonLink = ({
                               LinkComponent,
                               external,
                               icon,
                               iconPosition,
                               children,
                               ...otherProps
                           } :Props) => {
    return (
        <Button {...otherProps}
                flat={otherProps.inline !== true}
                innerAs={LinkComponent}
                {...external ? { target: "_blank" } : {}}>
            {icon ? (
                <FlexBlock spacing={SPACINGS.XS}
                           justify={"center"}
                           alignItems={"center"}>
                    {iconPosition === "left" &&
                     <Icon color={"currentColor"} svg={icon} />}
                    {children ? <span>{children}</span> : undefined}
                    {iconPosition === "right" &&
                     <Icon color={"currentColor"} svg={icon} />}
                </FlexBlock>
            ) : (
                 <span>{children}</span>
             )}
        </Button>
    )
}

ButtonLink.COMPONENT_NAME = "ButtonLink"
ButtonLink.defaultProps   = {
    primary      : false,
    onClick      : DO_NOTHING,
    LinkComponent: "a",
    external     : false,
    iconPosition : "left",
}
