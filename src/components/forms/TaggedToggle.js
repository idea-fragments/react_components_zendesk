// @flow

import { Toggle }  from "components/forms/Toggle"
import { FlexBox } from "components/layout/FlexBox"
import { Chip }    from "components/tags/Chip"
import React       from "react"

type Props = {
    active :boolean,
    onChange :(boolean) => void,
}

export const TaggedToggle = ({ active, onChange } :Props) => {
    const notifyStatusChange = (e :SyntheticInputEvent<HTMLInputElement>) => {
        onChange(e.target.checked)
    }

    return <FlexBox alignItems={"center"}>
        <Chip success={active}>
            {active ? "Enabled" : "Disabled"}
        </Chip>
        <Toggle checked={active}
                onChange={notifyStatusChange} />
    </FlexBox>
}
