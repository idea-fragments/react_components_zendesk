// @flow

import { Button }                     from "components/forms/Button"
import { FlexBlock, PaddedFlexBlock } from "components/layout/FlexBlock"
import { OverflowMenu }               from "components/layout/OverflowMenu"
import type { ColumnConfig, Item }    from "components/tables/Table"
import { Text }                       from "components/text/Text"
import * as React                     from "react"
import styled                         from "styled-components"
import { COLORS, veryLight }          from "styles/colors"
import { SPACINGS }                   from "styles/spacings"
import { FONT_SIZES, FONT_WEIGHTS }   from "styles/typography"
import { Checkbox, Label }            from "@zendeskgarden/react-forms"


type Props = {
    item :Item,
    columnConfigs :Array<ColumnConfig>,
    onClick :(number) => void,
    checkable :boolean,
    checked :boolean,
    onCheck :(number, boolean) => void,
}

export const Row = ({
                        item,
                        columnConfigs,
                        onClick,
                        checkable,
                        checked,
                        onCheck,
                    } :Props) :React.Node => {
    const [isCollapsed, setCollapsedState] = React.useState(true)

    const { key, containerStyles, actions } :Item = item

    const toggleCollapse    = () => { setCollapsedState(!isCollapsed) }
    const handleCheckChange = (e :SyntheticInputEvent<HTMLInputElement>) => {
        onCheck(key, e.target.checked)
    }

    return (
        <Container css={containerStyles || {}} onClick={() => onClick(key)}>
            {checkable ? (
                <Checkbox checked={checked} onChange={handleCheckChange}>
                    <Label hidden>Select Job to Apply</Label>
                </Checkbox>
            ) : null}
            <FlexBlock withRows fluid spacing={SPACINGS.XS}>
                {columnConfigs.map((c :ColumnConfig) => {
                    const { name, collapsible, important } = c
                    const { MEDIUM, REGULAR, BOLD }        = FONT_WEIGHTS

                    const titleWeight = important ? BOLD : MEDIUM
                    const valueWeight = important ? BOLD : REGULAR

                    return (
                        <FlexBlock key={`${key}-${c.name}`}
                                   justify={"space-between"}
                                   hidden={collapsible ? isCollapsed : false}>
                            <Text weight={titleWeight} size={FONT_SIZES.SM}>
                                {name}:
                            </Text>
                            <Text weight={valueWeight} size={FONT_SIZES.SM}>
                                {item[name]}
                            </Text>
                        </FlexBlock>
                    )
                })}

                <ButtonContainer spacing={SPACINGS.SM}>
                    <Button inline icon={
                        isCollapsed ? "arrow-ios-downward-outline"
                                    : "arrow-ios-upward-outline"
                    }
                            onClick={toggleCollapse}>
                        Show {isCollapsed ? "More" : "Less"}
                    </Button>
                </ButtonContainer>
            </FlexBlock>
            {actions ? <div><OverflowMenu actions={actions} /></div> : null}
        </Container>
    )
}

Row.COMPONENT_NAME = "Row"
Row.defaultProps   = {}

const Container = styled(PaddedFlexBlock).attrs(() => ({
    alignAxis: "stretch",
    spacing  : SPACINGS.SM,
}))`
  background: ${veryLight(COLORS.GREY)};
  height: auto;
`

const ButtonContainer = styled(FlexBlock)`
  justify-content: flex-end;
`

// css={"align-self: flex-start;"}

