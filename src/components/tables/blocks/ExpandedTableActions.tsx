import { Button } from "components/forms/Button"
import { FlexBox } from "components/layout/FlexBox"
import { TableActionsProps } from "components/tables/blocks/TableActions"
import React, { FC, ReactNode, useMemo } from "react"

export type ExpandedTableActionsProps = Required<
  Pick<TableActionsProps, "actions">
>

export const ExpandedTableActions: FC<ExpandedTableActionsProps> = ({
  actions,
}) => {
  const actionTriggers = useMemo((): ReactNode[] => {
    return actions.map(
      ({ buttonProps, Component, componentProps, label, onClick }) => {
        if (Component)
          return (
            <Component
              key={label}
              {...componentProps}>
              {label}
            </Component>
          )
        return (
          <Button
            key={label}
            onClick={onClick}
            {...buttonProps}>
            {label}
          </Button>
        )
      },
    )
  }, [actions])

  return (
    <FlexBox
      alignItems={"center"}
      fluid
      justifyContent={"flex-end"}>
      {actionTriggers}
    </FlexBox>
  )
}
