import {
  Button,
  Props as ButtonProps
}                     from "components/forms/Button"
import React, {
  ComponentType,
  ForwardedRef,
  forwardRef
}                     from "react"
import {
  ColorProps,
  ContainerProps
}                     from "styles/types"
import { DO_NOTHING } from "utils/functionHelpers"

/* important that the onClick function from NextJS Link components make their way
 to the button component. Otherwise, NextJS links will not work properly,
 causing the link to be navigated without using the NextJS routing system*/

type Props = {
               to?: any,
               href?: string,
               external?: boolean,
               LinkComponent?: string | ComponentType<{ className: string, to: any } & any>
               onClick?: ButtonProps["onClick"],
             } & Omit<ButtonProps, "onClick"> & ColorProps & ContainerProps

export const ButtonLink = forwardRef<any, Props>((
  {
    LinkComponent,
    external,
    flat,
    ...otherProps
  }: Props,
  ref: ForwardedRef<any>
) => {
  return (
    <Button
      ref={ref}
      {...otherProps}
      flat={flat != null ? flat : !otherProps.inline}
      // @ts-ignore
      innerAs={LinkComponent}
      {...external ? { target: "_blank" } : {}} />
  )
})

ButtonLink.defaultProps = {
  primary:       false,
  onClick:       DO_NOTHING,
  LinkComponent: "a",
  external:      false,
  iconPosition:  "left",
}
