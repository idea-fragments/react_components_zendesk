import { mdiChevronDown, mdiChevronUp }     from "@mdi/js"
import { Button }                           from "components/forms/Button"
import { Checkbox }                         from "components/forms/Checkbox"
import { PaddedFlexBlock }                  from "components/layout/FlexBlock"
import { FlexBox }                          from "components/layout/FlexBox"
import { Col, Grid, Row as GridRow }        from "components/layout/Grid"
import { OverflowMenu }                     from "components/layout/OverflowMenu"
import { ColumnConfig, Item, ItemKey } from "components/tables/Table"
import { Text }                             from "components/text/Text"
import React, { FC }                        from "react"
import styled, { css }                      from "styled-components"
import { COLORS, veryLight }                from "styles/colors"
import { FONT_SIZES, FONT_WEIGHTS }         from "styles/typography"


type Props = {
  checkable?: boolean,
  checked?: boolean,
  checkDisabled?: boolean,
  columnConfigs: Array<ColumnConfig>,
  item: Item,
  onCheck?: (row: ItemKey, checked: boolean) => void,
  onClick?: (row: ItemKey) => void,
}

export const Row: FC<Props> = ({
                                 checkable,
                                 checked,
                                 checkDisabled,
                                 columnConfigs,
                                 item,
                                 onCheck,
                                 onClick,
                               }) => {
  const [isCollapsed, setCollapsedState] = React.useState(true)

  const { key, containerStyles, actions }: Item = item

  const toggleCollapse    = () => { setCollapsedState(!isCollapsed) }
  const handleCheckChange = (isChecked: boolean) => {
    onCheck?.(key, isChecked)
  }

  return (
    <Container css={containerStyles || {}} onClick={() => onClick?.(key)}>
      <PaddedFlexBlock css={`background: white;
        width: 100%;
        border-radius: .3rem;`}>
        {checkable ? (
          <Checkbox
            checked={!checkDisabled && checked}
            disabled={checkDisabled}
            onChange={handleCheckChange} />
        ) : null}

        <FlexBox withRows fluid>
          <Grid>
            {columnConfigs.map((c: ColumnConfig) => {
              const { name, collapsible, important } = c

              const {
                      MEDIUM,
                      REGULAR,
                      BOLD,
                    } = FONT_WEIGHTS

              const titleWeight = important ? BOLD : MEDIUM
              const valueWeight = important ? MEDIUM : REGULAR

              const cssStyles = collapsible && isCollapsed
                                ? css`&& {display: none;}`
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

          {
            columnConfigs.some((c) => c.collapsible)
            ? <ButtonContainer>
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
            : null
          }

        </FlexBox>
        {
          actions
          ? <div>
            <OverflowMenu actions={actions}
                          placement={"bottom-end"} />
          </div>
          : null
        }
      </PaddedFlexBlock>
    </Container>
  )
}

// @ts-ignore
Row.COMPONENT_NAME = "Row"
Row.defaultProps   = {}

const Container = styled(FlexBox).attrs(() => ({
  alignItems: "stretch",
}))`
  background: ${veryLight(COLORS.GREY)};
  height: auto;
  border-radius: .3rem;
  padding: .5rem;
`

const ButtonContainer = styled(FlexBox)`
  justify-content: center;
`

// css={"align-self: flex-start;"}

