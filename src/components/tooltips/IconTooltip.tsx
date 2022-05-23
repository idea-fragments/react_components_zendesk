import { Icon, IconProps }       from "components/Icon"
import { FlexBox }               from "components/layout/FlexBox"
import { Tooltip, TooltipProps } from "components/tooltips/Tooltip"
import { FC, PropsWithChildren } from "react"
import React                     from "react"

type Props =
  Omit<TooltipProps, "content">
  & { icon: string, iconProps?: IconProps }

export let IconTooltip: FC<PropsWithChildren<Props>> = ({
                                                          children,
                                                          icon,
                                                          iconProps,
                                                          ...props
                                                        }) => {
  // @ts-ignore
  return <Tooltip {...props} content={children}>
    <FlexBox inline css={`cursor: help;`}>
      <Icon size={"1.2rem"} {...iconProps} svg={icon} />
    </FlexBox>
  </Tooltip>
}
