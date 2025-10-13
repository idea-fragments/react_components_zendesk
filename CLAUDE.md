# Development Guidelines for @idea-fragments/react-components-zendesk

This document outlines guidelines and best practices when working with the `@idea-fragments/react-components-zendesk` component library.

## Table of Contents

1. [Library Components](#library-components)
2. [Responsive Design & Device Sizes](#responsive-design--device-sizes)
3. [Styling & Layout](#styling--layout)
4. [Form Components](#form-components)
5. [Theme System](#theme-system)
6. [Common Patterns](#common-patterns)
7. [Alphabetical Ordering Requirements](#alphabetical-ordering-requirements)

---

## Library Components

### Always Prefer Library Components

**NEVER** create custom implementations when library components exist.

```typescript
// ❌ BAD: Custom implementation
;<div onClick={() => setOpen(!open)}>
  <CustomMenu />
</div>

// ✅ GOOD: Use library component
import { Dropdown } from "components/forms/selectors/Dropdown"
```

### Component Import Sources

**ALWAYS** import from the local library (`src/components/...`), **NEVER** from `@zendeskgarden` directly.

```typescript
// ❌ BAD: Direct zendesk import
import { Dropdown } from "@zendeskgarden/react-dropdowns"

// ✅ GOOD: Local library import
import { Dropdown } from "components/forms/selectors/Dropdown"
```

---

## Responsive Design & Device Sizes

### Device Size Detection

The library provides two methods for handling responsive design:

#### 1. JavaScript/React Logic: `useDeviceSizeWatcher` Hook

Use for **conditional rendering** and **component logic**.

```typescript
import { useDeviceSizeWatcher } from "hooks/useDeviceSizeWatcher"

const MyComponent = () => {
  const { isSmallComputerOrLarger } = useDeviceSizeWatcher()

  return isSmallComputerOrLarger ? (
    <DesktopTableV2 {...props} />
  ) : (
    <MobileTable {...props} />
  )
}
```

**Available device size hooks:**

```typescript
const {
  isPhone, // Phone only
  isTablet, // Tablet only
  isLargeTablet, // Large tablet only
  isSmallComputer, // Small computer only
  isLargeComputer, // Large computer only
  isSmallComputerOrLarger, // Small computer and up
  isLargeTabletOrLarger, // Large tablet and up
  isLargeTabletOrSmaller, // Large tablet and down
} = useDeviceSizeWatcher()
```

**Device Breakpoints (with wideLayout: true):**

- Phone: ≤ 560px
- Tablet: 561px - 840px
- Large Tablet: 841px - 991px
- Small Computer: 992px - 1350px
- Large Computer: ≥ 1351px

#### 2. CSS Styles: `mediaQueries()` Helper

Use for **styling** within styled-components.

```typescript
import { mediaQueries } from "styles/mediaQueries"
import styled, { css } from "styled-components"

const StyledComponent = styled.div`
  grid-template-columns: 5fr 7fr;

  ${mediaQueries().forTablets(css`
    grid-template-columns: 1fr 2fr;
  `)}

  ${mediaQueries().forPhones(css`
    grid-template-columns: 1fr;
  `)}
`
```

**Available media query helpers:**

```typescript
const {
  forPhones, // max-width: 560px
  forTablets, // max-width: 840px
  forTabletsAndUp, // min-width: 561px
  forLargeTabletsAndUp, // min-width: 841px
  forSmallComputersAndUp, // min-width: 992px
  forLargeComputers, // min-width: 1351px
} = mediaQueries()
```

#### 3. Conditional Component Wrappers

The library provides wrapper components for simple conditional rendering:

```typescript
import { ComputersOnly } from "components/layout/ComputersOnly"
import { PhonesOnly } from "components/layout/PhonesOnly"
import { TabletsOnly } from "components/layout/TabletsOnly"
import { PhonesAndTabletsOnly } from "components/layout/PhonesAndTabletsOnly"

// Only renders on computers
<ComputersOnly>
  <DesktopOnlyContent />
</ComputersOnly>

// Only renders on phones
<PhonesOnly>
  <MobileOnlyContent />
</PhonesOnly>
```

### ⚠️ NEVER Use Raw Media Queries

```typescript
// ❌ BAD: Raw media query
const StyledComponent = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`

// ✅ GOOD: Use mediaQueries() helper
const StyledComponent = styled.div`
  ${mediaQueries().forTablets(css`
    display: none;
  `)}
`
```

---

## Styling & Layout

### Use FlexBox Gap, NOT Margins

**ALWAYS** use the `gap` CSS property for spacing between flex children. **NEVER** use margins on child elements.

```typescript
// ❌ BAD: Using margins on children
<FlexBox>
  <Child _css={css`margin-right: 1rem;`} />
  <Child _css={css`margin-right: 1rem;`} />
</FlexBox>

// ✅ GOOD: Using gap on parent
<FlexBox gap={SPACINGS.SM}>
  <Child />
  <Child />
</FlexBox>
```

### SPACINGS Constants

**ALWAYS** use SPACINGS constants for consistent spacing.

```typescript
import { SPACINGS } from "styles/spacings"

// Available spacing values:
SPACINGS.XS  // 0.5rem
SPACINGS.SM  // 1rem
SPACINGS.MD  // 1.5rem
SPACINGS.LG  // 2rem
SPACINGS.XL  // 3rem

// Usage
<FlexBox gap={SPACINGS.SM}>
  <Child />
</FlexBox>
```

### Layout with CSS Grid vs FlexBox

- **CSS Grid**: Use for structured, two-dimensional layouts (rows AND columns)
- **FlexBox**: Use for one-dimensional layouts (single row or column)

```typescript
// CSS Grid for structured layouts
const FieldRow = styled.div`
  display: grid;
  grid-template-columns: 5fr 7fr;
  gap: ${SPACINGS.XS};
`

// FlexBox for simple linear layouts
<FlexBox gap={SPACINGS.SM} withRows>
  <Child />
  <Child />
</FlexBox>
```

---

## Form Components

### Dropdown Component with Custom Content

Use `useRawOptions` for custom dropdown content. Follow the `DatePickerSelector` pattern.

```typescript
import { Dropdown } from "components/forms/selectors/Dropdown"
import Downshift from "downshift"

const MyComponent = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Dropdown
      isOpen={isOpen}
      onStateChange={(changes: StateChange) => {
        // Prevent closing on blur events
        if (
          changes.isOpen == null ||
          changes.type === Downshift.stateChangeTypes.blurInput ||
          changes.type === Downshift.stateChangeTypes.blurButton
        ) {
          return
        }
        setIsOpen(changes.isOpen)
      }}
      useRawOptions
      options={[
        <CustomContent
          key="custom-content"
          onClose={() => setIsOpen(false)}
        />,
      ]}
      menuCSS={`min-width: 300px; padding: 1rem;`}
      placement="bottom-end"
      trigger={
        <Button onClick={() => setIsOpen(!isOpen)}>Open Dropdown</Button>
      }
    />
  )
}
```

**Key Points:**

- Use `useRawOptions={true}` for custom content
- Handle state changes via `onStateChange` with Downshift state change types
- Filter out `blurInput` and `blurButton` events to prevent unwanted closes
- Pass custom content as array to `options` prop
- See `src/components/forms/selectors/DatePickerSelector.tsx` as reference

---

## Theme System

### Accessing the Theme

**ALWAYS** import `useTheme` from the library's custom hook, **NEVER** from `styled-components`.

```typescript
// ❌ BAD: Importing from styled-components
import { useTheme } from "styled-components"

// ✅ GOOD: Import from library
import { useTheme } from "styles/theme/useTheme"

const MyComponent = () => {
  const theme = useTheme()
  const filterIcon = theme.styles.table.filterButtonIcon || defaultIcon
  // ...
}
```

### Use Theme Colors

**ALWAYS** use theme colors, **NEVER** hardcode color values.

```typescript
// ❌ BAD: Hardcoded colors
const StyledComponent = styled.div`
  background: #ffffff;
  color: #333333;
`

// ✅ GOOD: Theme colors
const StyledComponent = styled.div`
  background: ${({ theme }) => theme.styles.colors.white};
  color: ${({ theme }) => theme.styles.colors.grey["700"]};
`
```

**Common Theme Colors:**

```typescript
theme.styles.colors.white
theme.styles.colors.grey["100"] // to grey["900"]
theme.styles.colors.blue["600"]
theme.styles.colors.primary
theme.styles.table.borderColor
theme.styles.table.borderSize
```

### Typography

Use typography constants for consistent text styling.

```typescript
import { FONT_SIZES, FONT_WEIGHTS } from "styles/typography"

;<Text
  _css={css`
    font-weight: ${FONT_WEIGHTS.BOLD};
    font-size: ${FONT_SIZES.SM};
  `}>
  Content
</Text>
```

**Available Constants:**

```typescript
// Font Weights
FONT_WEIGHTS.REGULAR
FONT_WEIGHTS.MEDIUM
FONT_WEIGHTS.BOLD

// Font Sizes
FONT_SIZES.XS
FONT_SIZES.SM
FONT_SIZES.MD
FONT_SIZES.LG
FONT_SIZES.XL
```

---

## Common Patterns

### Component Structure

Components should follow this import order. **Within each group, imports must be alphabetically ordered:**

```typescript
// 1. External libraries (alphabetical)
import React, { FC, useState } from "react"
import styled, { css } from "styled-components"

// 2. Library components (alphabetical)
import { Button } from "components/forms/Button"
import { Checkbox } from "components/forms/Checkbox"
import { FlexBox } from "components/layout/FlexBox"
import { OverflowMenu } from "components/layout/OverflowMenu"

// 3. Types (alphabetical)
import { ColumnConfig, Item, ItemKey } from "components/tables/Table"

// 4. Hooks (alphabetical)
import { useDeviceSizeWatcher } from "hooks/useDeviceSizeWatcher"
import { useTheme } from "styles/theme/useTheme"

// 5. Styles (alphabetical)
import { FONT_SIZES, FONT_WEIGHTS } from "styles/typography"
import { mediaQueries } from "styles/mediaQueries"
import { SPACINGS } from "styles/spacings"

// 6. Utils (alphabetical)
import { isNotEmpty } from "utils/arrayHelpers"
```

### TypeScript Patterns

When adding custom properties to FC components, use `@ts-ignore`:

```typescript
export const Row: FC<Props> = ({ ...props }) => {
  // Component implementation
}

// @ts-ignore
Row.COMPONENT_NAME = "Row"
```

### Conditional Rendering

Use semantic boolean checks:

```typescript
// ✅ GOOD: Explicit checks
{
  isNotEmpty(items) ? <ItemList /> : <EmptyState />
}
{
  actions ? <OverflowMenu actions={actions} /> : null
}

// ❌ BAD: Implicit truthy checks without helper
{
  items.length ? <ItemList /> : <EmptyState />
}
```

---

## Alphabetical Ordering Requirements

**CRITICAL**: Always order the following elements alphabetically throughout your code. This is a mandatory requirement across all code in this library.

### Code Elements

#### Import Statements

**Within each import group**, order alphabetically:

```typescript
// ✅ GOOD: Alphabetically ordered within groups
import { Button } from "components/forms/Button"
import { Checkbox } from "components/forms/Checkbox"
import { FlexBox } from "components/layout/FlexBox"

// ❌ BAD: Not alphabetically ordered
import { FlexBox } from "components/layout/FlexBox"
import { Button } from "components/forms/Button"
import { Checkbox } from "components/forms/Checkbox"
```

#### Named Imports

Order alphabetically within the destructure:

```typescript
// ✅ GOOD
import { ColumnConfig, Item, ItemKey } from "components/tables/Table"

// ❌ BAD
import { Item, ItemKey, ColumnConfig } from "components/tables/Table"
```

#### Props and Function Parameters

Order alphabetically in:

- TypeScript type/interface definitions
- Function signatures
- Destructured parameters

```typescript
// ✅ GOOD: Props alphabetically ordered
type Props = {
  checkable?: boolean
  checked?: boolean
  columnConfigs: Array<ColumnConfig>
  item: Item
  onCheck?: (row: ItemKey, checked: boolean) => void
  onClick?: (row: ItemKey) => void
}

export const Row: FC<Props> = ({
  checkable,
  checked,
  columnConfigs,
  item,
  onCheck,
  onClick,
}) => {
  // Implementation
}

// ❌ BAD: Not alphabetically ordered
type Props = {
  item: Item
  checkable?: boolean
  onClick?: (row: ItemKey) => void
  checked?: boolean
  onCheck?: (row: ItemKey, checked: boolean) => void
  columnConfigs: Array<ColumnConfig>
}
```

#### Object Literals

Order keys alphabetically:

```typescript
// ✅ GOOD
const config = {
  alignItems: "center",
  fluid: true,
  gap: SPACINGS.SM,
  withRows: true,
}

// ❌ BAD
const config = {
  withRows: true,
  gap: SPACINGS.SM,
  alignItems: "center",
  fluid: true,
}
```

#### JSX Props

Order props alphabetically when passing to components. **String literal values must be wrapped in curly braces.**

```typescript
// ✅ GOOD
<FlexBox
  alignItems="center"
  fluid
  gap={SPACINGS.SM}
  withRows
>
  <Child />
</FlexBox>

<Dropdown
  placement={"bottom-end"}
  trigger={<Button>Open</Button>}
/>

// ❌ BAD
<FlexBox
  withRows
  gap={SPACINGS.SM}
  fluid
  alignItems="center"
>
  <Child />
</FlexBox>

<Dropdown
  placement="bottom-end"
  trigger={<Button>Open</Button>}
/>
```

#### React Hooks Declarations

Order hook declarations alphabetically:

```typescript
// ✅ GOOD
const [checkedItems, setCheckedItems] = useState<Set<ItemKey>>(new Set())
const [isCollapsed, setCollapsedState] = useState(true)
const [isOpen, setIsOpen] = useState(false)

// ❌ BAD
const [isOpen, setIsOpen] = useState(false)
const [checkedItems, setCheckedItems] = useState<Set<ItemKey>>(new Set())
const [isCollapsed, setCollapsedState] = useState(true)
```

#### Styled Component Definitions

Order styled component definitions alphabetically:

```typescript
// ✅ GOOD
const Container = styled(FlexBox)``
const FieldLabel = styled.div``
const FieldRow = styled.div``
const FieldValue = styled.div``
const HeaderDivider = styled.div``
const HeaderTitle = styled(FlexBox)``

// ❌ BAD
const Container = styled(FlexBox)``
const HeaderTitle = styled(FlexBox)``
const HeaderDivider = styled.div``
const FieldRow = styled.div``
const FieldLabel = styled.div``
const FieldValue = styled.div``
```

#### CSS Properties Within Styled Components

When practical, order CSS properties alphabetically:

```typescript
// ✅ GOOD
const StyledComponent = styled.div`
  background: ${({ theme }) => theme.styles.colors.white};
  border-radius: 10px;
  display: grid;
  gap: ${SPACINGS.XS};
  padding: 0.1em;
`

// ❌ BAD
const StyledComponent = styled.div`
  padding: 0.1em;
  background: ${({ theme }) => theme.styles.colors.white};
  gap: ${SPACINGS.XS};
  display: grid;
  border-radius: 10px;
`
```

### Exceptions to Alphabetical Ordering

1. **React import must always be first** in external libraries group
2. **Logical grouping in JSX** - Don't sacrifice readability for alphabetical ordering in complex JSX structures
3. **CSS cascade dependencies** - Some CSS properties must be in specific order (e.g., `position` before `top/left`)

### Before Finishing Any Task

**MANDATORY FINAL STEP**: Before submitting any work, review and reorder the following alphabetically:

- [ ] Import statements (within groups)
- [ ] Named imports (within destructures)
- [ ] Type/interface properties
- [ ] Function parameters
- [ ] Object keys
- [ ] JSX props
- [ ] React hooks declarations
- [ ] Styled component definitions

This is **not optional** - alphabetical ordering must be the last step before completing any task.

---

## Summary Checklist

When working with this library, remember:

- [ ] Use library components, not custom implementations
- [ ] Import from `src/components/...`, not `@zendeskgarden`
- [ ] Use `useDeviceSizeWatcher()` for conditional rendering
- [ ] Use `mediaQueries()` for responsive CSS
- [ ] Never write raw `@media` queries
- [ ] Use FlexBox `gap`, not margins on children
- [ ] Use `SPACINGS` constants for spacing values
- [ ] Use theme colors, not hardcoded values
- [ ] Use `FONT_SIZES` and `FONT_WEIGHTS` constants
- [ ] Follow the `DatePickerSelector` pattern for custom dropdown content
- [ ] Use `@ts-ignore` for custom component properties
- [ ] Import in the correct order (external → library → types → hooks → styles → utils)
- [ ] **MANDATORY: Order everything alphabetically** (imports, props, object keys, JSX props, hooks, styled components)
