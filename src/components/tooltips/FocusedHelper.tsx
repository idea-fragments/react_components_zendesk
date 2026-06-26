import React, {
  CSSProperties,
  FC,
  ReactElement,
  ReactNode,
  RefObject,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react"
import styled from "styled-components"

export type FocusedHelperProps = {
  active: boolean

  // ── Wrap mode (default) ────────────────────────────────────────────────────
  // Wrap this element and measure it. Best for buttons / inline triggers.
  children?: ReactElement

  // ── Target mode ────────────────────────────────────────────────────────────
  // Spotlight an element this helper does NOT wrap. Passing either prop switches
  // modes; `children` is then ignored (the consumer renders its own content).
  // `resolveTarget` is the general seam — querySelector + climb logic lives in
  // the consumer; `targetRef` is sugar for the "I already have a ref" case.
  resolveTarget?: () => Element | null
  targetRef?: RefObject<Element>

  // Tooltip seam (both modes): receives the anchor element to wrap & return. In
  // target mode the anchor is a synthesized virtual element over the target.
  renderTooltip?: (anchor: ReactElement) => ReactNode

  // Ring appearance
  zIndex?: number
  ringPadding?: number
  ringBorderRadius?: number | string

  // Bump to force a re-resolve + re-measure (e.g. the active step / data changed).
  recomputeKey?: unknown
}

const PaddedAnchor = styled.div<{ $padding: number; $active: boolean }>`
  display: inline-flex;
  ${({ $padding, $active }) =>
    $active
      ? `
    margin: -${$padding}px;
    padding: ${$padding}px;
  `
      : ""}
`

const Ring = styled.div<{
  $top: number
  $left: number
  $width: number
  $height: number
  $borderRadius: string
  $zIndex: number
}>`
  border-radius: ${({ $borderRadius }) => $borderRadius};
  box-shadow: 0 0 0 9999px
    ${({ theme }) => theme.styles.modal.backdrop.background};
  height: ${({ $height }) => $height}px;
  left: ${({ $left }) => $left}px;
  pointer-events: none;
  position: fixed;
  top: ${({ $top }) => $top}px;
  width: ${({ $width }) => $width}px;
  z-index: ${({ $zIndex }) => $zIndex};
`

export const FocusedHelper: FC<FocusedHelperProps> = ({
  active,
  children,
  resolveTarget,
  targetRef,
  renderTooltip,
  zIndex = 400,
  ringPadding = 8,
  ringBorderRadius = 8,
  recomputeKey,
}) => {
  const targetMode = Boolean(resolveTarget || targetRef)
  const anchorRef = useRef<HTMLDivElement>(null)
  const [rect, setRect] = useState<DOMRect | null>(null)

  // Hold the latest resolver in a ref so the sync effect doesn't resubscribe on
  // every render (consumers typically pass an inline closure).
  const resolveRef = useRef(resolveTarget)
  resolveRef.current = resolveTarget

  const getTarget = useCallback((): Element | null => {
    if (resolveRef.current) return resolveRef.current()
    if (targetRef) return targetRef.current
    return anchorRef.current
  }, [targetRef])

  useEffect(() => {
    if (!active) {
      setRect(null)
      return
    }

    let raf = 0
    let observer: ResizeObserver | null = null

    const update = (): Element | null => {
      const el = getTarget()
      setRect(el ? el.getBoundingClientRect() : null)
      return el
    }

    const start = () => {
      const el = update()
      if (el) {
        observer = new ResizeObserver(() => update())
        observer.observe(el)
      } else if (targetMode) {
        // The target may mount a frame late (e.g. a data swap) — keep trying.
        raf = requestAnimationFrame(start)
      }
    }

    start()
    window.addEventListener("resize", update)
    window.addEventListener("scroll", update, true)

    return () => {
      cancelAnimationFrame(raf)
      observer?.disconnect()
      window.removeEventListener("resize", update)
      window.removeEventListener("scroll", update, true)
    }
  }, [active, targetMode, recomputeKey, getTarget])

  const borderRadius =
    typeof ringBorderRadius === "number"
      ? `${ringBorderRadius}px`
      : ringBorderRadius

  // ── Wrap mode ───────────────────────────────────────────────────────────────
  // The padding lives on PaddedAnchor, so the measured rect already includes it.
  if (!targetMode) {
    const anchor = (
      <PaddedAnchor
        ref={anchorRef}
        $active={active}
        $padding={ringPadding}>
        {children}
      </PaddedAnchor>
    ) as ReactElement

    const rendered = renderTooltip ? renderTooltip(anchor) : anchor

    return (
      <>
        {rendered}
        {active && rect ? (
          <Ring
            $borderRadius={borderRadius}
            $height={rect.height}
            $left={rect.left}
            $top={rect.top}
            $width={rect.width}
            $zIndex={zIndex}
          />
        ) : null}
      </>
    )
  }

  // ── Target mode ─────────────────────────────────────────────────────────────
  // No wrapper is rendered (zero layout impact). The bare element is measured, so
  // padding is applied here to both the ring and the virtual tooltip anchor.
  if (!active || !rect) return null

  const padded = {
    height: rect.height + ringPadding * 2,
    left: rect.left - ringPadding,
    top: rect.top - ringPadding,
    width: rect.width + ringPadding * 2,
  }

  const virtualAnchorStyle: CSSProperties = {
    height: padded.height,
    left: padded.left,
    pointerEvents: "none",
    position: "fixed",
    top: padded.top,
    width: padded.width,
  }

  const virtualAnchor = (<div style={virtualAnchorStyle} />) as ReactElement

  return (
    <>
      <Ring
        $borderRadius={borderRadius}
        $height={padded.height}
        $left={padded.left}
        $top={padded.top}
        $width={padded.width}
        $zIndex={zIndex}
      />
      {renderTooltip ? renderTooltip(virtualAnchor) : null}
    </>
  )
}
