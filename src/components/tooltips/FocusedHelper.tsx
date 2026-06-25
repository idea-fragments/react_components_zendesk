import React, {
  FC,
  ReactElement,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from "react"
import styled from "styled-components"

export type FocusedHelperProps = {
  children: ReactElement
  active: boolean
  zIndex?: number
  ringPadding?: number
  ringBorderRadius?: number | string
  renderTooltip?: (child: ReactElement) => ReactNode
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
  children,
  active,
  zIndex = 400,
  ringPadding = 8,
  ringBorderRadius = 8,
  renderTooltip,
}) => {
  const anchorRef = useRef<HTMLDivElement>(null)
  const [rect, setRect] = useState<DOMRect | null>(null)

  const updateRect = () => {
    setRect(anchorRef.current?.getBoundingClientRect() ?? null)
  }

  useEffect(() => {
    if (!active) {
      setRect(null)
      return
    }

    updateRect()
    window.addEventListener("resize", updateRect)
    window.addEventListener("scroll", updateRect, true)

    return () => {
      window.removeEventListener("resize", updateRect)
      window.removeEventListener("scroll", updateRect, true)
    }
  }, [active])

  const borderRadius =
    typeof ringBorderRadius === "number"
      ? `${ringBorderRadius}px`
      : ringBorderRadius

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
