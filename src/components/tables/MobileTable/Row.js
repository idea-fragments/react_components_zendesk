// @flow

import { Button }                       from "components/forms/Button"
import { FlexBlock, PaddedFlexBlock }   from "components/layout/FlexBlock"
import { Grid, Row as GridRow, Col }    from "components/layout/Grid"
import { OverflowMenu }                 from "components/layout/OverflowMenu"
import type { ColumnConfig, Item }      from "components/tables/Table"
import { Text }                         from "components/text/Text"
import * as React                       from "react"
import styled, { css }                  from "styled-components"
import { COLORS, veryLight }            from "styles/colors"
import { SPACINGS }                     from "styles/spacings"
import { FONT_SIZES, FONT_WEIGHTS }     from "styles/typography"
import { Checkbox, Label }              from "@zendeskgarden/react-forms"
import { mdiChevronDown, mdiChevronUp } from "@mdi/js"


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
            <PaddedFlexBlock css={`background: white; 
                                   width: 100%;
                                   border-radius: .3rem;`}>
                {checkable ? (
                    <Checkbox checked={checked} onChange={handleCheckChange}>
                        <Label hidden>Select</Label>
                    </Checkbox>
                ) : null}

                <FlexBlock withRows fluid spacing={SPACINGS.SM}>
                    <Grid>
                        {columnConfigs.map((c :ColumnConfig) => {
                            const { name, collapsible, important } = c
                            const { MEDIUM, REGULAR, BOLD }        = FONT_WEIGHTS

                            const titleWeight = important ? BOLD : MEDIUM
                            const valueWeight = important ? MEDIUM : REGULAR

                            const cssStyles = collapsible && isCollapsed
                                              ? css`&& { display: none; }`
                                              : ""

                            return (
                                <GridRow key={`${key}-${c.name}`}
                                         css={cssStyles}>
                                    <Col md={5} sm={12}>
                                        <Text
                                            css={`font-weight: ${titleWeight};`}>
                                            {name}:
                                        </Text>
                                    </Col>

                                    <Col md={7} sm={12}>
                                        <Text
                                            css={`font-weight: ${valueWeight};
                                                  font-size: ${FONT_SIZES.XS};`}>
                                            {item[name]}
                                        </Text>
                                    </Col>
                                </GridRow>
                            )
                        })}
                    </Grid>

                    <ButtonContainer spacing={SPACINGS.SM}>
                        <Button fluid
                                icon={
                                    isCollapsed
                                    ? mdiChevronDown
                                    : mdiChevronUp
                                }
                                size={"small"}
                                onClick={toggleCollapse}>
                            Show {isCollapsed ? "More" : "Less"}
                        </Button>
                    </ButtonContainer>
                </FlexBlock>
                {actions ? <div><OverflowMenu actions={actions} /></div> : null}
            </PaddedFlexBlock>
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
  border-radius: .3rem;
  padding: .5rem;
`

const ButtonContainer = styled(FlexBlock)`
  justify-content: center;
`

// css={"align-self: flex-start;"}

