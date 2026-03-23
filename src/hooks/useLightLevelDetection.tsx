import { useCallback } from "react"

export const CAMERA_LIGHT_LEVEL_ASSESSMENTS = {
  bright: "bright",
  dark: "dark",
  low_light: "low_light",
  normal: "normal",
  very_bright: "very_bright",
} as const

export const CAMERA_LIGHT_LEVELS = {
  [CAMERA_LIGHT_LEVEL_ASSESSMENTS.bright]: { min: 150, max: 199 },
  [CAMERA_LIGHT_LEVEL_ASSESSMENTS.dark]: { min: 0, max: 49 },
  [CAMERA_LIGHT_LEVEL_ASSESSMENTS.low_light]: { min: 50, max: 99 },
  [CAMERA_LIGHT_LEVEL_ASSESSMENTS.normal]: { min: 100, max: 149 },
  [CAMERA_LIGHT_LEVEL_ASSESSMENTS.very_bright]: { min: 200, max: 255 },
} as const

export type LightLevelAssessment =
  (typeof CAMERA_LIGHT_LEVEL_ASSESSMENTS)[keyof typeof CAMERA_LIGHT_LEVEL_ASSESSMENTS]

export type LightLevelData = {
  brightnessPercentage: number
  rawValue: number
  status: LightLevelAssessment
}

export const useLightLevelDetection = () => {
  const getLightLevelAssessment = useCallback(
    (brightness: number): LightLevelAssessment => {
      for (const [assessment, range] of Object.entries(CAMERA_LIGHT_LEVELS)) {
        if (brightness >= range.min && brightness <= range.max) {
          return assessment as LightLevelAssessment
        }
      }
      return CAMERA_LIGHT_LEVEL_ASSESSMENTS.normal
    },
    [],
  )

  const analyzeLightLevel = useCallback(
    async (base64Image: string): Promise<LightLevelData | null> => {
      // Create an image element to load the base64 data
      const img = new Image()
      img.src = base64Image

      await new Promise((resolve, reject) => {
        img.onload = resolve
        img.onerror = reject
      })

      // Create a canvas to get image data
      const canvas = document.createElement("canvas")
      canvas.width = img.width
      canvas.height = img.height

      const context = canvas.getContext("2d")
      if (!context) return null

      context.drawImage(img, 0, 0, canvas.width, canvas.height)

      // Get image data from a sample area (center 10% of frame for better accuracy)
      const sampleWidth = Math.floor(canvas.width * 0.1)
      const sampleHeight = Math.floor(canvas.height * 0.1)
      const x = Math.floor((canvas.width - sampleWidth) / 2)
      const y = Math.floor((canvas.height - sampleHeight) / 2)

      const imageData = context.getImageData(x, y, sampleWidth, sampleHeight)
      const data = imageData.data

      // Calculate average brightness using perceived luminance formula
      let totalLuminance = 0
      for (let i = 0; i < data.length; i += 4) {
        const r = data[i]
        const g = data[i + 1]
        const b = data[i + 2]
        // Perceived luminance: https://en.wikipedia.org/wiki/Relative_luminance
        const luminance = 0.299 * r + 0.587 * g + 0.114 * b
        totalLuminance += luminance
      }

      const averageLuminance = totalLuminance / (data.length / 4)
      const rawValue = Math.round(averageLuminance) // 0-255 scale
      const brightnessPercentage = Math.round((rawValue / 255) * 100)
      const status = getLightLevelAssessment(rawValue)

      return {
        brightnessPercentage,
        rawValue,
        status,
      }
    },
    [getLightLevelAssessment],
  )

  return {
    analyzeLightLevel,
  }
}
