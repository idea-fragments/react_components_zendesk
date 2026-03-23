import React, { FC } from "react"
import { useTheme } from "styles/theme/useTheme"

export default {
  title: "Theme/Colors",
}

// ─── Helpers ────────────────────────────────────────────────────────────────

const hexToRgb = (hex: string): [number, number, number] => {
  const cleaned = hex.replace("#", "")
  const full =
    cleaned.length === 3
      ? cleaned
          .split("")
          .map((c) => c + c)
          .join("")
      : cleaned
  const int = parseInt(full, 16)
  return [(int >> 16) & 255, (int >> 8) & 255, int & 255]
}

const textColorFor = (hex: string): string => {
  const [r, g, b] = hexToRgb(hex)
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255
  return luminance > 0.55 ? "#2f3941" : "#ffffff"
}

const isFullSpectrum = (value: unknown): value is Record<string, string> =>
  typeof value === "object" && value !== null && "100" in value

const isPartialSpectrum = (value: unknown): value is Record<string, string> =>
  typeof value === "object" && value !== null && "M400" in value

// ─── Components ──────────────────────────────────────────────────────────────

type SwatchProps = {
  hex: string
  label: string
}

const Swatch: FC<SwatchProps> = ({ hex, label }) => (
  <div style={{ display: "flex", flexDirection: "column", minWidth: "72px" }}>
    <div
      style={{
        background: hex,
        border: "1px solid rgba(0,0,0,0.08)",
        borderRadius: "6px 6px 0 0",
        color: textColorFor(hex),
        fontSize: "11px",
        fontWeight: 600,
        height: "52px",
        padding: "6px",
      }}>
      {label}
    </div>
    <div
      style={{
        background: "#f8f9f9",
        border: "1px solid rgba(0,0,0,0.08)",
        borderRadius: "0 0 6px 6px",
        borderTop: "none",
        color: "#49545c",
        fontFamily: "monospace",
        fontSize: "10px",
        padding: "4px 6px",
      }}>
      {hex}
    </div>
  </div>
)

type ColorRowProps = {
  colors: Record<string, string>
  name: string
}

const ColorRow: FC<ColorRowProps> = ({ colors, name }) => (
  <div style={{ marginBottom: "28px" }}>
    <div
      style={{
        color: "#49545c",
        fontSize: "12px",
        fontWeight: 600,
        marginBottom: "8px",
        textTransform: "capitalize",
      }}>
      {name}
    </div>
    <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
      {Object.entries(colors).map(([shade, hex]) => (
        <Swatch
          hex={hex}
          key={shade}
          label={String(shade)}
        />
      ))}
    </div>
  </div>
)

type SectionProps = {
  children: React.ReactNode
  title: string
}

const Section: FC<SectionProps> = ({ children, title }) => (
  <div style={{ marginBottom: "48px" }}>
    <h2
      style={{
        borderBottom: "2px solid #e9ebed",
        color: "#2f3941",
        fontSize: "14px",
        fontWeight: 700,
        letterSpacing: "0.05em",
        marginBottom: "24px",
        paddingBottom: "8px",
        textTransform: "uppercase",
      }}>
      {title}
    </h2>
    {children}
  </div>
)

// ─── Story ───────────────────────────────────────────────────────────────────

const ColorsStory = () => {
  const { styles } = useTheme()
  const { colors } = styles

  const fullSpectrum: Array<[string, Record<string, string>]> = []
  const partialSpectrum: Array<[string, Record<string, string>]> = []

  for (const [key, value] of Object.entries(colors)) {
    if (key === "black" || key === "white" || key === "product") continue
    if (isFullSpectrum(value)) fullSpectrum.push([key, value])
    else if (isPartialSpectrum(value)) partialSpectrum.push([key, value])
  }

  return (
    <div style={{ fontFamily: "inherit", maxWidth: "960px", padding: "2rem" }}>
      <h1
        style={{
          color: "#2f3941",
          fontSize: "20px",
          fontWeight: 700,
          marginBottom: "2rem",
        }}>
        Color Palette
      </h1>

      <Section title={"Neutrals"}>
        <ColorRow
          colors={{ black: colors.black, white: colors.white }}
          name={"black & white"}
        />
        <ColorRow
          colors={colors.grey as unknown as Record<string, string>}
          name={"grey"}
        />
      </Section>

      <Section title={"Full Spectrum"}>
        {fullSpectrum.map(([name, swatches]) => (
          <ColorRow
            colors={swatches}
            key={name}
            name={name}
          />
        ))}
      </Section>

      <Section title={"Partial Spectrum"}>
        {partialSpectrum.map(([name, swatches]) => (
          <ColorRow
            colors={swatches}
            key={name}
            name={name}
          />
        ))}
      </Section>

      <Section title={"Product"}>
        <ColorRow
          colors={colors.product as Record<string, string>}
          name={"zendesk products"}
        />
      </Section>
    </div>
  )
}

export const AllColors = ColorsStory.bind({})
