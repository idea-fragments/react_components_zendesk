import { Icon, IconProps } from "components/Icon"
import { FlexBox } from "components/layout/FlexBox"
import { Tooltip, TooltipProps } from "components/tooltips/Tooltip"
import { FC } from "react"
import React from "react"

type Props =
  Omit<TooltipProps, "trigger">
  & { icon: string, iconProps?: IconProps }

export let IconTooltip: FC<Props> = ({
                                       children,
                                       icon,
                                       iconProps,
                                       ...props
                                     }) => {
  return <Tooltip {...props}
                  trigger={
                    <FlexBox css={`cursor: help;`}>
                      <Icon size={"1.2rem"} {...iconProps} svg={icon} />
                    </FlexBox>
                  }>
    {children}
  </Tooltip>
}
