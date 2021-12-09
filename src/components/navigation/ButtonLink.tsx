import { Icon }                            from "components/Icon"
import { FlexBox }                         from "components/layout/FlexBox"
import React, { ComponentType }            from "react"
import { Button, Props as ButtonProps }    from "components/forms/Button"
import { SPACINGS }                        from "styles/spacings"
import type { ColorProps, ContainerProps } from "styles/types"
import { DO_NOTHING }                      from "utils/functionHelpers"

type Props = {
  to?: any,
  href?: string,
  external?: boolean,
  LinkComponent?: string | ComponentType<{ className: string, to: any } & any>
} & ButtonProps & ColorProps & ContainerProps

export const ButtonLink = ({
                             LinkComponent,
                             external,
                             flat,
                             icon,
                             iconPosition,
                             children,
                             ...otherProps
                           }: Props) => {
  return (
    <Button {...otherProps}
            flat={flat != null ? flat : !otherProps.inline}
            innerAs={LinkComponent}
            {...external ? { target: "_blank" } : {}}>
      {icon ? (
        <FlexBox gap={SPACINGS.XS}
                 justifyContent={"center"}
                 alignItems={"center"}>
          {iconPosition === "left" &&
           <Icon color={"currentColor"} svg={icon} />}
          {children ? <span>{children}</span> : undefined}
          {iconPosition === "right" &&
           <Icon color={"currentColor"} svg={icon} />}
        </FlexBox>
      ) : (
         <span>{children}</span>
       )}
    </Button>
  )
}

ButtonLink.COMPONENT_NAME = "ButtonLink"
ButtonLink.defaultProps   = {
  primary:       false,
  onClick:       DO_NOTHING,
  LinkComponent: "a",
  external:      false,
  iconPosition:  "left",
}
