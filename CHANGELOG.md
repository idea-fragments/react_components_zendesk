# Changelog

## [0.1.89] - 2026-08-18

### Added

- `Stepper` layout component (render prop) — provides a `title` ("Step X of Y") and a `dots` node so callers control placement. Accepts a `color` palette (defaults to `theme.styles.colors.primary`, using `[300]` for completed and `[600]` for current) plus `completedColor` / `currentColor` / `incompleteColor` overrides.
- `MODAL_SIZES` const (`SM`/`LG`/`XL`/`FULL_SCREEN`) + `ModalContent.size` — the modal now owns its width via `theme.styles.modal.sizes`. `FULL_SCREEN` pins to the viewport with a `SPACINGS.SM` margin on all sides. `theme.styles.modal.zIndex` (default `400`) applied to the modal container and backdrop.
- `theme.styles.section.footer` with a `SectionPartPadding` shape (`paddingX`/`paddingY` required, optional `mobile: { paddingX, paddingY }`) — shared by `body`, `header`, and `footer`. Mobile overrides kick in through a `forPhones` media query. A shared `sectionPartPadding({ part, paddingSize })` helper drives the padding for all three Section parts.
- `theme.styles.buttons.borderWidth` (required) — applied via `border-width` in `Button`.
- Optional `label` on `SteppedTooltipStep` — overrides Stepper's auto-generated title.
- `CommonTextProps.allCaps` on `Text`.

### Changed

- `SteppedTooltip` renders its progress dots via `Stepper`.
- `Modal` renders its own close button (mdiClose, X_SMALL flat) instead of Zendesk's `<Close>`. The close button color follows the modal's `danger`/`success`/`warning` variant.
- `SectionFooter` now reads `theme.styles.section.footer` (previously read `section.header` by mistake).
- `theme.styles.table.filterButtonIcon` widened from `string` to `ReactNode`.

### Removed

- `ModalContent.isLarge` — replaced by `size: MODAL_SIZES.LG` (or another size). Zendesk's `isLarge` prop is no longer forwarded.
- `theme.styles.section.body.padding` / `section.header.padding` — replaced by `paddingX` + `paddingY` on each section part.

## [0.1.87] - 2026-07-06

### Fixed

- `useDeviceSizeWatcher` no longer touches `window` during render, so it no longer throws `ReferenceError: window is not defined` on the server. The media query lists are built only when `window` exists; during SSR the hook returns all-`false` measurements (matching the first client render, since the real size is set in a client-only effect). This unblocks server-side rendering for any page or component that uses the hook.

## [0.1.86] - 2026-06-26

### Added

- `detached` prop on `SteppedTooltip` (default `false`) — renders the card on its own (no Tippy/anchor, no portal) so the consumer can position it directly, e.g. pin it to a fixed, horizontally-centered spot. `children`/`placement` are ignored in this mode.
- Themeable dropdown corners — `Dropdown` and its menu now read `borderRadius` from a new `styles.dropdowns` theme token (`dropdowns.borderRadius` and `dropdowns.menu.borderRadius`, default `4px`).

## [0.1.85] - 2026-06-26

### Added

- `arrow` prop on `SteppedTooltip` (default `true`) — set `arrow={false}` to drop the pointer arrow, e.g. for tooltips pinned to a fixed screen position rather than a specific element.

## [0.1.84] - 2026-06-26

### Added

- `FocusedHelper` target mode — spotlight an element the helper does **not** wrap, via `resolveTarget` (a resolver callback) or `targetRef`. In this mode it renders no wrapper (zero layout impact), so it can spotlight grid/full-width elements — e.g. a table row resolved from an inner cell — that wrap mode's `inline-flex` anchor would otherwise collapse. The tooltip anchors to the resolved element through the same `renderTooltip` seam via a synthesized virtual anchor.
- `recomputeKey` prop on `FocusedHelper` — bump it to force a re-resolve + re-measure (e.g. when the active step or underlying data changes).

### Changed

- `FocusedHelper` now keeps the spotlight in sync with a `ResizeObserver` on the measured element, plus a `requestAnimationFrame` retry in target mode for late-mounting targets, in addition to window scroll/resize. `children` is now optional (ignored in target mode). Wrap-mode behavior and the `renderTooltip(child)` contract are unchanged.

## [0.1.83] - 2026-06-25

### Added

- `SteppedTooltip` component — onboarding walkthrough tooltip built on `Tooltip`. Accepts a `step` prop (label, title, body, action hint, action badge) and renders a styled card using the existing tooltip's arrow and positioning. Supports Back/Next/Finish navigation and step-progress dots.
- `isVisible` prop on `Tooltip` — allows programmatic control of tooltip visibility independent of hover/focus state.
