# Changelog

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
