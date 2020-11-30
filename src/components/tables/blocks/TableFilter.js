// @flow

import { mdiCheck }               from "@mdi/js"
import { Button, BUTTON_SIZES }   from "components/forms/Button"
import { Selector }               from "components/forms/selectors/Selector"
import { TextField }              from "components/forms/textfields/TextField"
import { FlexBox }                from "components/layout/FlexBox"
import type { ItemFilterOptions } from "components/tables/Table"
import React, { useState }        from "react"
import { FONT_WEIGHTS }           from "styles/typography"
import { Logger }                 from "utils/logging/Logger"

const logger = new Logger("TableFilter")

type Props = ItemFilterOptions & {
    initialValue? :?string,
    onChange :(name :string, value :any) => void,
}

export const TableFilter = ({
                                initialValue,
                                name,
                                options,
                                type,
                                onChange,
                            } :Props) => {
    const [value, setValue] = useState<?string>(initialValue)

    const onTextChange = (e :SyntheticInputEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    logger.writeInfo("render", name, value)

    const filter = type === "select"
                   ? <Selector clearable
                               css={`font-weight: ${FONT_WEIGHTS.REGULAR};`}
                               keyField={"value"}
                               options={options}
                               selectedKey={value}
                               small
                               valueField={"label"}
                               onChange={setValue} />
                   : <TextField small
                                value={value}
                                onChange={onTextChange} />

    return <FlexBox withRows>
        {filter}
        <Button compact
                css={`align-self: flex-end;`}
                icon={mdiCheck}
                iconSize={"1rem"}
                size={BUTTON_SIZES.SMALL}
                onClick={() => onChange(name, value)} />
    </FlexBox>
}
