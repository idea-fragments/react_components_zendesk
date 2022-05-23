import { Toggle }  from "components/forms/Toggle"
import { FlexBox } from "components/layout/FlexBox"
import { Chip }    from "components/tags/Chip"
import React       from "react"

type Props = {
  active: boolean,
  onChange: (checked: boolean) => void,
}

export const TaggedToggle = ({ active, onChange }: Props) => {
  return <FlexBox>
    <Chip success={active}>
      {active ? "Enabled" : "Disabled"}
    </Chip>
    <Toggle checked={active}
            onChange={onChange} />
  </FlexBox>
}
