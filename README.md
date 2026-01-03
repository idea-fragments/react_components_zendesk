# @idea-fragments/react-components-zendesk

A comprehensive React component library built on Zendesk Garden components, providing a stable interface for building consistent UIs across IdeaFragments projects.

## 📋 Table of Contents

- [About](#about)
- [Installation](#installation)
- [Component Groups](#component-groups)
- [Development](#development)
- [Using This Library](#using-this-library)
- [Maintaining This Library](#maintaining-this-library)
- [Package Patching](#package-patching)
- [Building & Publishing](#building--publishing)
- [Contributing](#contributing)

---

## 🎯 About

This library is built on the V6 version of the [Zendesk Garden React components](https://github.com/zendeskgarden/react-components). Its main purpose is to provide components with stable external interfaces that won't change, regardless of which internal library powers them.

**Key Benefits:**

- **Stable API:** Component props remain consistent even if internal implementations change
- **Customization:** Pre-configured components with IdeaFragments-specific styling and behavior
- **Type Safety:** Full TypeScript support
- **Documentation:** Comprehensive Storybook documentation for all components

**Current Status:** This library uses Zendesk Garden V6. There are plans to upgrade to newer versions at some point in the future.

---

## 📦 Installation

### As NPM Package (Recommended)

```bash
npm install @idea-fragments/react-components-zendesk
```

---

## 🧩 Component Groups

The library is organized into the following component groups:

### 📝 Forms

Form components including inputs, buttons, selectors, and validation.

**Components:**

- `Button` - Primary, secondary, and custom styled buttons
- `Checkbox` - Checkboxes with label support
- `TextField` - Text inputs with validation
- `DatePickerSelector` - Single date picker with dropdown
- `DateRangePickerSelector` - Date range picker with dropdown
- `DateRangeSelectors` - Two separate date pickers for start/end dates
- `Dropdown` - Customizable dropdown component
- And more...

**Import:**

```typescript
import {
  Button,
  TextField,
} from "@idea-fragments/react-components-zendesk/forms"
```

### 📅 Calendars

Date and time selection components.

**Components:**

- `TinyCalendar` - Compact single-date calendar
- `TinyDateRangePicker` - Compact date range calendar
- `MonthPicker` - Month selection component
- `YearPicker` - Year selection component
- `MonthYearPicker` - Combined month/year picker

**Import:**

```typescript
import { TinyCalendar } from "@idea-fragments/react-components-zendesk/calendars"
```

### 📊 Tables

Desktop and mobile table components with sorting, pagination, and selection.

**Components:**

- `DesktopTableV2` - Full-featured desktop table
- `MobileTableV2` - Mobile-optimized table
- `Table` - Responsive table that switches between desktop/mobile

**Import:**

```typescript
import { Table } from "@idea-fragments/react-components-zendesk/tables"
```

### 🎨 Layouts

Layout and navigation components.

**Components:**

- `FlexBox` - Flexible layout container
- `Sidebar` / `SidebarV2` - Navigation sidebars
- `IconAppBar` - Top navigation bar
- `Breadcrumbs` - Navigation breadcrumbs
- `NavigationAction` - Navigation links and buttons
- Responsive wrappers: `PhonesOnly`, `TabletsOnly`, `ComputersOnly`

**Import:**

```typescript
import {
  FlexBox,
  Sidebar,
} from "@idea-fragments/react-components-zendesk/layouts"
```

### 🔄 Loaders

Loading indicators and spinners.

**Components:**

- `TranslucentLoader` - Overlay loader
- `Spinner` - Simple spinner

**Import:**

```typescript
import { TranslucentLoader } from "@idea-fragments/react-components-zendesk/loaders"
```

### 🎨 Styles

Theme system, typography, and responsive utilities.

**Exports:**

- `useTheme()` - Access theme configuration
- `SPACINGS` - Consistent spacing constants
- `FONT_SIZES` / `FONT_WEIGHTS` - Typography constants
- `mediaQueries()` - Responsive breakpoint helpers
- `useDeviceSizeWatcher()` - Device size detection hook

**Import:**

```typescript
import {
  useTheme,
  SPACINGS,
} from "@idea-fragments/react-components-zendesk/styles"
```

### 💬 Tooltips

Tooltip components for contextual information.

**Import:**

```typescript
import { Tooltip } from "@idea-fragments/react-components-zendesk/tooltips"
```

### 🔧 Utils

Utility functions and helpers.

**Import:**

```typescript
import { formatDate } from "@idea-fragments/react-components-zendesk/utils"
```

### 🎨 Icons

Icon component wrapper around MDI icons.

**Import:**

```typescript
import { Icon } from "@idea-fragments/react-components-zendesk/icon"
```

### 🚨 Alerts

Alert and notification components.

**Import:**

```typescript
import { Alert } from "@idea-fragments/react-components-zendesk/alert"
```

---

## 🛠️ Development

### Prerequisites

- Node.js 16+ and npm
- React 18+
- styled-components 5.3+

### Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/idea-fragments/react_components_zendesk.git
   cd react_components_zendesk
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start Storybook:
   ```bash
   npm run storybook
   ```

### Project Structure

```
react_components_zendesk/
├── src/
│   ├── components/         # Component implementations
│   │   ├── calendars/     # Date/time components
│   │   ├── forms/         # Form components
│   │   ├── layout/        # Layout components
│   │   ├── tables/        # Table components
│   │   └── ...
│   ├── entries/           # Entry points for each module
│   │   ├── forms.ts
│   │   ├── layouts.ts
│   │   └── ...
│   ├── styles/            # Theme and styling utilities
│   ├── hooks/             # Custom React hooks
│   └── utils/             # Utility functions
├── dist/                  # Built output (generated)
├── patches/               # Package patches (patch-package)
├── rollup.config.js       # Build configuration
└── package.json
```

### Development Guidelines

For detailed development guidelines, see [CLAUDE.md](./CLAUDE.md), which includes:

- Component patterns and best practices
- Responsive design with device size detection
- Styling conventions (FlexBox, spacing, theme usage)
- Alphabetical ordering requirements
- TypeScript patterns

---

## 📚 Using This Library

### Storybook Documentation

View all components and their usage examples:

```bash
npm run storybook
```

This opens an interactive documentation site at `http://localhost:6006` with:

- Live component examples
- Props documentation
- Usage patterns
- Interactive controls

### Basic Usage Example

```typescript
import React, { useState } from "react"
import { Button } from "@idea-fragments/react-components-zendesk/forms"
import { FlexBox } from "@idea-fragments/react-components-zendesk/layouts"
import {
  useTheme,
  SPACINGS,
} from "@idea-fragments/react-components-zendesk/styles"

function MyComponent() {
  const theme = useTheme()
  const [count, setCount] = useState(0)

  return (
    <FlexBox
      gap={SPACINGS.MD}
      withRows>
      <h1>Count: {count}</h1>
      <Button
        onClick={() => setCount(count + 1)}
        primary>
        Increment
      </Button>
    </FlexBox>
  )
}
```

### Responsive Design

Use device size hooks for conditional rendering:

```typescript
import { useDeviceSizeWatcher } from "@idea-fragments/react-components-zendesk/styles"
import {
  DesktopTableV2,
  MobileTableV2,
} from "@idea-fragments/react-components-zendesk/tables"

function ResponsiveTable(props) {
  const { isSmallComputerOrLarger } = useDeviceSizeWatcher()

  return isSmallComputerOrLarger ? (
    <DesktopTableV2 {...props} />
  ) : (
    <MobileTableV2 {...props} />
  )
}
```

Or use media queries in styled components:

```typescript
import styled, { css } from "styled-components"
import { mediaQueries } from "@idea-fragments/react-components-zendesk/styles"

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  ${mediaQueries().forTablets(css`
    grid-template-columns: 1fr 1fr;
  `)}

  ${mediaQueries().forPhones(css`
    grid-template-columns: 1fr;
  `)}
`
```

### Theme Customization

The library uses a theme system. Access theme values with `useTheme()`:

```typescript
import { useTheme } from "@idea-fragments/react-components-zendesk/styles"
import styled from "styled-components"

const StyledCard = styled.div`
  background: ${({ theme }) => theme.styles.colors.white};
  border: 1px solid ${({ theme }) => theme.styles.colors.grey["300"]};
  border-radius: 8px;
  padding: ${({ theme }) => theme.styles.spacing.md};
`
```

---

## 🔧 Maintaining This Library

### Adding New Components

1. Create the component in the appropriate directory under `src/components/`
2. Create a `.stories.tsx` file to document the component in Storybook
3. Export the component from the appropriate entry file in `src/entries/`
4. Follow the guidelines in [CLAUDE.md](./CLAUDE.md)
5. Test in Storybook and build

### Modifying Existing Components

1. Make changes to the component file
2. Update the corresponding `.stories.tsx` file if props changed
3. Test in Storybook
4. Rebuild the library
5. Version bump and publish

### Code Quality

The project uses pre-commit hooks to ensure code quality:

```bash
# Format code
npm run format

# Lint code
npm run lint
```

Pre-commit hooks automatically run:

- Prettier formatting
- ESLint linting

### Testing Changes

1. Start Storybook to view components:

   ```bash
   npm run storybook
   ```

2. Build the library:

   ```bash
   npm run rollup
   ```

3. Test in a consuming project:
   ```bash
   # In the consuming project
   npm link ../path/to/react_components_zendesk
   ```

---

## 🩹 Package Patching

This library uses [patch-package](https://github.com/ds300/patch-package) to fix issues in third-party dependencies without waiting for upstream fixes.

### Current Patches

#### `react-list@0.8.18`

**Issue:** React 18 Strict Mode compatibility issue causing infinite scroll calendars to only render 2 months.

**Fix:** Set `this.scrollParent = null` in `componentWillUnmount` to ensure proper cleanup when components are unmounted and remounted in Strict Mode.

**Location:** `patches/react-list+0.8.18.patch`

### How Patches Work

1. **Automatic Application:** Patches are automatically applied after `npm install` via the `postinstall` script
2. **Version Control:** Patch files in `patches/` directory are committed to the repository
3. **Persistence:** All developers and CI/CD environments get the same patches

### Creating a New Patch

If you need to patch another package:

1. Make your changes directly in `node_modules/package-name/`
2. Create the patch file:
   ```bash
   npx patch-package package-name
   ```
3. Commit the generated patch file in `patches/`
4. Document the patch in this README

### Updating an Existing Patch

1. Modify the file in `node_modules/package-name/`
2. Regenerate the patch:
   ```bash
   npx patch-package package-name
   ```
3. The patch file in `patches/` will be updated
4. Commit the changes

### Testing Patches

Test that patches apply correctly:

```bash
# Remove node_modules
rm -rf node_modules

# Reinstall (patches apply automatically)
npm install

# Verify patches were applied
# Should see: "patch-package: Applied react-list+0.8.18.patch"
```

### Removing a Patch

If a package is updated and the patch is no longer needed:

1. Delete the patch file from `patches/`
2. Remove the package from `node_modules`
3. Run `npm install`

### Submitting Patches Upstream

Consider submitting patches to the original package:

```bash
# Create an issue draft
npx patch-package package-name --create-issue
```

This helps the community and may eliminate the need for the patch in future versions.

---

## 🏗️ Building & Publishing

### Building the Library

The library uses Rollup for bundling. Entry points are defined in `rollup.config.js`.

Build specific modules:

```bash
npm run rollup
```

This will prompt you to select which modules to build, or you can modify `rollup.config.js` directly:

```javascript
modules = [
  "forms",
  "layouts",
  "tables",
  "styles",
  // ... etc
]
```

Build output goes to the `dist/` directory:

```
dist/
├── forms.js           # Bundled module
├── forms.js.map       # Source map
└── types/
    └── forms.d.ts     # TypeScript definitions
```

### Clean Build

Remove previous build artifacts:

```bash
npm run cleanup
```

### Publishing to NPM

1. Ensure all changes are committed
2. Update version in `package.json`
3. Build the library:
   ```bash
   npm run cleanup
   npm run rollup
   ```
4. Publish:
   ```bash
   npm publish
   ```

### Versioning

Follow [Semantic Versioning](https://semver.org/):

- **MAJOR:** Breaking changes to component APIs
- **MINOR:** New components or features (backwards compatible)
- **PATCH:** Bug fixes and minor improvements

---

## 🤝 Contributing

### Guidelines

1. **Follow the style guide** in [CLAUDE.md](./CLAUDE.md)
2. **Create Storybook stories** for all new components
3. **Write TypeScript** with proper type definitions
4. **Test thoroughly** in Storybook and consuming projects
5. **Document changes** in commit messages

### Alphabetical Ordering

This project enforces alphabetical ordering for:

- Import statements (within groups)
- Named imports within destructures
- Type/interface properties
- Function parameters
- Object keys
- JSX props
- React hooks declarations
- Styled component definitions

### Pull Request Process

1. Create a feature branch
2. Make your changes
3. Test in Storybook
4. Build the library
5. Submit PR with clear description
6. Wait for review

---

## 📝 Scripts Reference

```bash
# Development
npm run storybook          # Start Storybook dev server
npm start                  # Start React dev server (legacy)

# Building
npm run rollup             # Build library modules
npm run cleanup            # Remove dist/ directory
npm run build              # Build React app (legacy)

# Code Quality
npm run format             # Format code with Prettier
npm run lint               # Lint code with ESLint

# Testing
npm test                   # Run tests (if configured)

# Storybook
npm run build-storybook    # Build static Storybook site
```

---

## 🔗 Links

- [Zendesk Garden Component Library](https://github.com/zendeskgarden/react-components)
- [Zendesk Garden V6 Documentation](https://606f9e155f932060ab2899e8--zendeskgarden.netlify.app/)
- [patch-package Documentation](https://github.com/ds300/patch-package)
- [IdeaFragments GitHub](https://github.com/idea-fragments)

---

## ⚠️ Important Notes

- **Not for public use:** This library is primarily for IdeaFragments projects. Use at your own risk.
- **React 18 required:** This library requires React 18+ for Strict Mode compatibility
- **Peer dependencies:** Ensure styled-components, React, and MDI icons are installed in your project
- **Windows/WSL:** If using WSL, you may need to use a Windows Node interpreter for installation (though this may no longer be an issue)

---

## 📄 License

MIT

---

## 👥 Author

IdeaFragments

---

**Questions or Issues?** Open an issue on [GitHub](https://github.com/idea-fragments/react_components_zendesk/issues)
