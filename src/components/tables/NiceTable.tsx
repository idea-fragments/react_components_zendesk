import { FlexBox }     from "components/layout/FlexBox"
import { Header }      from "components/tables/blocks/Header"
import { HelpText }    from "components/tables/blocks/HelpText"
import { Title }       from "components/tables/blocks/Title"
import { Filters }     from "components/tables/Filters"
import {
  Body,
  Table
}                      from "components/tables/index"
import { Row }         from "components/tables/Row"
import {
  Item,
  TableProps
}                      from "components/tables/Table"
import React, {
  UIEvent,
  useEffect,
  useRef,
  useState
}                      from "react"
import styled, { css } from "styled-components"
import { isNotEmpty }  from "utils/arrayHelpers"

type Props = TableProps & {
  hasRowActions: boolean,
  onSelectAllToggle?: (b: boolean) => void,
}

export const NiceTable = ({
                            actions,
                            checkable = false,
                            checkedItems,
                            columnConfigs,
                            emptyState,
                            filterState,
                            hasRowActions,
                            helpText,
                            items,
                            maxHeight,
                            title,
                            onFiltersChange,
                            onItemChecked,
                            onItemClick,
                            onItemHoverEnd,
                            onItemHoverStart,
                            onSelectAllToggle,
                          }: Props) => {
  const [verticalScrollbarWidth, setVerticalScrollbarWidth] = useState<number>(0)
  const [headerHeight, setHeaderHeight]                     = useState("0px")

  const bodyRef      = useRef<HTMLDivElement>()
  const headerRef    = useRef<HTMLDivElement>()
  const handleScroll = (e: UIEvent<HTMLDivElement>) => {
    if (!headerRef.current) return
    headerRef.current.scrollLeft = e.target.scrollLeft
  }

  useEffect(() => {
    if (!bodyRef.current || !headerRef.current) return

    const bodyWidth    = bodyRef.current.clientWidth
    const headerWidth  = headerRef.current.clientWidth
    const headerHeight = headerRef.current.clientHeight

    setVerticalScrollbarWidth(headerWidth - bodyWidth)
    setHeaderHeight(`${headerHeight}px`)
  }, [])

  return (
    <FlexBox withRows>
      <FlexBox _css={`margin-bottom: 1rem`}
               justifyContent={"space-between"} withRows>
        {title ? <Title>{title}</Title> : null}
        {helpText ? <HelpText>{helpText}</HelpText> : null}
        <FlexBox _css={`flex: 1`} justifyContent={"flex-end"}>
          {actions}

          {
            onFiltersChange
            ? <Filters columnConfigs={columnConfigs}
                       filterState={filterState!}
                       onFiltersChange={onFiltersChange} />
            : null
          }

        </FlexBox>
      </FlexBox>
      <HorizontalScroll>
        <div css={css`overflow: hidden;`} ref={headerRef}>
          <Table>
            <Header bodyScrollbarWidth={verticalScrollbarWidth}
                    checkable={checkable}
                    checkedItems={checkedItems}
                    columnConfigs={columnConfigs}
                    hasRowActions={hasRowActions}
                    items={items}
                    onSelectAllToggle={onSelectAllToggle} />
          </Table>
        </div>

        <div css={css`
          overflow: auto ${maxHeight ? "scroll" : "auto"};
          max-height: calc(${maxHeight} - ${headerHeight});
        `}
             onScroll={handleScroll}
             ref={bodyRef}>
          <Table>
            <Body>
              {
                isNotEmpty(items)
                ? items.map((item: Item) => (
                  <Row
                    checkable={checkable}
                    checkDisabled={item.checkDisabled}
                    checked={checkedItems?.has(item.key)}
                    columnConfigs={columnConfigs}
                    item={item}
                    key={item.key}
                    onCheck={onItemChecked}
                    onClick={onItemClick}
                    onHoverStart={onItemHoverStart}
                    onHoverEnd={onItemHoverEnd}
                  />
                ))
                : emptyState
              }
            </Body>
          </Table>
        </div>
      </HorizontalScroll>
    </FlexBox>
  )
}

const HorizontalScroll = styled.div`
  overflow-x: auto;
  border: 2px solid ${({ theme }) => theme.styles.table.borderColor};
`

const VerticalScrollPadding = styled.div<{ size: number }>`
  width: ${({ size }) => `${size}px`};
`

NiceTable.COMPONENT_NAME = "NiceTable"
