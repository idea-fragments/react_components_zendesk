import { useCallback } from "react"

export const NOISE_ASSESSMENTS = {
  excessive: "excessive",
  high: "high",
  low: "low",
  moderate: "moderate",
  minimal: "minimal",
} as const

export const NOISE_LEVELS = {
  [NOISE_ASSESSMENTS.excessive]: { min: 25, max: Infinity },
  [NOISE_ASSESSMENTS.high]: { min: 18, max: 24 },
  [NOISE_ASSESSMENTS.moderate]: { min: 12, max: 17 },
  [NOISE_ASSESSMENTS.low]: { min: 6, max: 11 },
  [NOISE_ASSESSMENTS.minimal]: { min: 0, max: 5 },
} as const

export type NoiseAssessment =
  (typeof NOISE_ASSESSMENTS)[keyof typeof NOISE_ASSESSMENTS]

export type NoiseData = {
  assessment: NoiseAssessment
  noiseLevel: number
}

export const useNoiseDetection = () => {
  const getNoiseAssessment = useCallback((level: number): NoiseAssessment => {
    for (const [assessment, range] of Object.entries(NOISE_LEVELS)) {
      if (level >= range.min && level <= range.max) {
        return assessment as NoiseAssessment
      }
    }
    return NOISE_ASSESSMENTS.minimal
  }, [])

  const analyzeNoise = useCallback(
    async (base64Image: string): Promise<NoiseData | null> => {
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

      // Sample multiple regions and calculate local variance
      // Higher variance in smooth areas indicates more noise
      const regionSize = 32
      const regions: number[] = []

      for (let y = 0; y < sampleHeight - regionSize; y += regionSize) {
        for (let x = 0; x < sampleWidth - regionSize; x += regionSize) {
          // Get region data
          const regionPixels: number[] = []
          for (let ry = 0; ry < regionSize; ry++) {
            for (let rx = 0; rx < regionSize; rx++) {
              const idx = ((y + ry) * sampleWidth + (x + rx)) * 4
              const r = data[idx]
              const g = data[idx + 1]
              const b = data[idx + 2]
              const luminance = 0.299 * r + 0.587 * g + 0.114 * b
              regionPixels.push(luminance)
            }
          }

          // Calculate variance for this region
          const mean =
            regionPixels.reduce((sum, val) => sum + val, 0) /
            regionPixels.length
          const variance =
            regionPixels.reduce(
              (sum, val) => sum + Math.pow(val - mean, 2),
              0,
            ) / regionPixels.length

          // Skip regions with high variance (likely edges/details, not noise)
          if (variance < 500) {
            regions.push(Math.sqrt(variance))
          }
        }
      }

      // Average the standard deviations from smooth regions
      const noiseLevel =
        regions.length > 0
          ? Math.round(
              regions.reduce((sum, val) => sum + val, 0) / regions.length,
            )
          : 0

      const assessment = getNoiseAssessment(noiseLevel)

      return {
        assessment,
        noiseLevel,
      }
    },
    [getNoiseAssessment],
  )

  return {
    analyzeNoise,
  }
}
