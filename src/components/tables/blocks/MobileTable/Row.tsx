import { mdiChevronDown, mdiChevronUp } from "@mdi/js"
import { Button } from "components/forms/Button"
import { Checkbox } from "components/forms/Checkbox"
import { FlexBox } from "components/layout/FlexBox"
import { Col, Grid, Row as GridRow } from "components/layout/Grid"
import { OverflowMenu } from "components/layout/OverflowMenu"
import { ColumnConfig, Item, ItemKey } from "components/tables/Table"
import { Text } from "components/text/Text"
import React, { FC, ReactNode, useState } from "react"
import styled, { css } from "styled-components"
import { COLORS, veryLight } from "styles/colors"
import { SPACINGS } from "styles/spacings"
import { FONT_SIZES, FONT_WEIGHTS } from "styles/typography"
import { isNotEmpty } from "utils/arrayHelpers"

type Props = {
  checkable?: boolean
  checked?: boolean
  checkDisabled?: boolean
  columnConfigs: Array<ColumnConfig>
  item: Item
  listviewMode?: boolean
  listviewNode?: ReactNode
  onCheck?: (row: ItemKey, checked: boolean) => void
  onClick?: (row: ItemKey) => void
}

export const Row: FC<Props> = ({
  checkable,
  checked,
  checkDisabled,
  columnConfigs,
  item,
  listviewMode,
  listviewNode,
  onCheck,
  onClick,
}) => {
  const [isCollapsed, setCollapsedState] = useState(true)

  const { key, containerStyles, actions }: Item = item

  const createGridRow = ({ name, important }: ColumnConfig) => {
    return (
      <ColumnRow
        collapsible={!important}
        isCollapsed={isCollapsed}
        key={`${key}-${name}`}>
        <Col
          md={5}
          sm={12}>
          <Text
            _css={css`
              font-weight: ${FONT_WEIGHTS.BOLD};
              font-size: ${FONT_SIZES.XS};
            `}>
            {name}:
          </Text>
        </Col>

        <Col
          md={7}
          sm={12}>
          <Text
            _css={css`
              font-weight: ${FONT_WEIGHTS.REGULAR};
              font-size: ${FONT_SIZES.SM};
            `}>
            {item[name]}
          </Text>
        </Col>
      </ColumnRow>
    )
  }

  const [importantColumns, collapsibleColumns] = columnConfigs.reduce(
    (acc, column) => {
      column.important ? acc[0].push(column) : acc[1].push(column)
      return acc
    },
    [[] as ColumnConfig[], [] as ColumnConfig[]],
  )

  const handleCheckChange = (isChecked: boolean) => {
    onCheck?.(key, isChecked)
  }

  const toggleCollapse = () => {
    setCollapsedState(!isCollapsed)
  }

  return (
    <Container
      _css={containerStyles || ""}
      onClick={() => onClick?.(key)}
      withRows>
      <FlexBox fluid>
        {checkable ? (
          <Checkbox
            checked={!checkDisabled && checked}
            disabled={checkDisabled}
            onChange={handleCheckChange}
          />
        ) : null}

        <FlexBox
          withRows
          fluid>
          {listviewMode ? (
            listviewNode
          ) : (
            <Grid>
              {importantColumns.map(createGridRow)}

              {!isCollapsed ? (
                <FlexBox
                  _css={css`
                    margin: 0.5em 0;
                    background: ${COLORS.LIGHT_GREY};
                    height: 2px;
                    width: 20px;
                  `}
                />
              ) : null}

              {collapsibleColumns.map(createGridRow)}
            </Grid>
          )}
        </FlexBox>
        {actions ? (
          <div>
            <OverflowMenu
              actions={actions}
              placement={"bottom-end"}
            />
          </div>
        ) : null}
      </FlexBox>
      {isNotEmpty(collapsibleColumns) && !listviewMode ? (
        <Button
          _css={css`
            align-self: flex-end;
            margin-bottom: ${SPACINGS.XS};
          `}
          fluid
          icon={isCollapsed ? mdiChevronDown : mdiChevronUp}
          primary={false}
          size={"small"}
          onClick={toggleCollapse}>
          Show {isCollapsed ? "More" : "Less"}
        </Button>
      ) : null}
    </Container>
  )
}

// @ts-ignore
Row.COMPONENT_NAME = "Row"
Row.defaultProps = {}

const Container = styled(FlexBox).attrs(() => ({
  alignItems: "stretch",
}))`
  background: ${COLORS.WHITE};
  border-bottom: 1px solid ${veryLight(COLORS.GREY)};
  padding: ${SPACINGS.SM};
`

const ColumnRow = styled(GridRow)<{
  collapsible: boolean
  isCollapsed: boolean
}>`
  display: ${({ collapsible, isCollapsed }) =>
    collapsible && isCollapsed ? "none" : "flex"};
  padding: 0.1em;
  border-radius: 10px;
`
