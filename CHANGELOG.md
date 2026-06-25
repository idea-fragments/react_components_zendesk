# Changelog

## [0.1.83] - 2026-06-25

### Added

- `SteppedTooltip` component — onboarding walkthrough tooltip built on `Tooltip`. Accepts a `step` prop (label, title, body, action hint, action badge) and renders a styled card using the existing tooltip's arrow and positioning. Supports Back/Next/Finish navigation and step-progress dots.
- `isVisible` prop on `Tooltip` — allows programmatic control of tooltip visibility independent of hover/focus state.
