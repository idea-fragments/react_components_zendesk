import { useCallback } from "react"

export const EXPOSURE_ASSESSMENTS = {
  overexposed: "overexposed",
  slightly_overexposed: "slightly_overexposed",
  underexposed: "underexposed",
  slightly_underexposed: "slightly_underexposed",
  well_exposed: "well_exposed",
} as const

export type ExposureAssessment =
  (typeof EXPOSURE_ASSESSMENTS)[keyof typeof EXPOSURE_ASSESSMENTS]

export type ExposureData = {
  assessment: ExposureAssessment
  clippedHighlightsPercentage: number
  clippedShadowsPercentage: number
  meanBrightness: number
}

export const useExposureAnalysis = () => {
  const getExposureAssessment = useCallback(
    (
      clippedHighlights: number,
      clippedShadows: number,
      meanBrightness: number,
    ): ExposureAssessment => {
      // Overexposed if too many bright pixels or very high mean brightness
      if (clippedHighlights > 15 || meanBrightness > 220) {
        return EXPOSURE_ASSESSMENTS.overexposed
      }
      if (clippedHighlights > 5 || meanBrightness > 200) {
        return EXPOSURE_ASSESSMENTS.slightly_overexposed
      }

      // Underexposed if too many dark pixels or very low mean brightness
      if (clippedShadows > 15 || meanBrightness < 50) {
        return EXPOSURE_ASSESSMENTS.underexposed
      }
      if (clippedShadows > 5 || meanBrightness < 80) {
        return EXPOSURE_ASSESSMENTS.slightly_underexposed
      }

      return EXPOSURE_ASSESSMENTS.well_exposed
    },
    [],
  )

  const analyzeExposure = useCallback(
    async (base64Image: string): Promise<ExposureData | null> => {
      // Create an image element to load the base64 data
      const img = new Image()
      img.src = base64Image

      await new Promise((resolve, reject) => {
        img.onload = resolve
        img.onerror = reject
      })

      // Create a canvas to get image data
      const canvas = document.createElement("canvas")
      const sampleWidth = Math.min(640, img.width)
      const sampleHeight = Math.min(480, img.height)

      canvas.width = sampleWidth
      canvas.height = sampleHeight

      const context = canvas.getContext("2d")
      if (!context) return null

      context.drawImage(img, 0, 0, sampleWidth, sampleHeight)
      const imageData = context.getImageData(0, 0, sampleWidth, sampleHeight)
      const data = imageData.data

      // Analyze histogram
      const pixelCount = data.length / 4
      let clippedHighlights = 0
      let clippedShadows = 0
      let totalBrightness = 0

      const highlightThreshold = 250
      const shadowThreshold = 10

      for (let i = 0; i < data.length; i += 4) {
        const r = data[i]
        const g = data[i + 1]
        const b = data[i + 2]
        const luminance = 0.299 * r + 0.587 * g + 0.114 * b

        totalBrightness += luminance

        if (luminance >= highlightThreshold) {
          clippedHighlights++
        }
        if (luminance <= shadowThreshold) {
          clippedShadows++
        }
      }

      const meanBrightness = Math.round(totalBrightness / pixelCount)
      const clippedHighlightsPercentage = Math.round(
        (clippedHighlights / pixelCount) * 100,
      )
      const clippedShadowsPercentage = Math.round(
        (clippedShadows / pixelCount) * 100,
      )

      const assessment = getExposureAssessment(
        clippedHighlightsPercentage,
        clippedShadowsPercentage,
        meanBrightness,
      )

      return {
        assessment,
        clippedHighlightsPercentage,
        clippedShadowsPercentage,
        meanBrightness,
      }
    },
    [getExposureAssessment],
  )

  return {
    analyzeExposure,
  }
}
