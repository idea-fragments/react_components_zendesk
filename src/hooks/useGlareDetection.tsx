import { useCallback } from "react"

export const GLARE_ASSESSMENTS = {
  excessive: "excessive",
  moderate: "moderate",
  minimal: "minimal",
  none: "none",
} as const

export const GLARE_LEVELS = {
  [GLARE_ASSESSMENTS.excessive]: { min: 15, max: Infinity },
  [GLARE_ASSESSMENTS.moderate]: { min: 8, max: 14 },
  [GLARE_ASSESSMENTS.minimal]: { min: 3, max: 7 },
  [GLARE_ASSESSMENTS.none]: { min: 0, max: 2 },
} as const

export type GlareAssessment =
  (typeof GLARE_ASSESSMENTS)[keyof typeof GLARE_ASSESSMENTS]

export type GlareData = {
  affectedAreaPercentage: number
  assessment: GlareAssessment
  hotspotCount: number
}

export const useGlareDetection = () => {
  const getGlareAssessment = useCallback(
    (percentage: number): GlareAssessment => {
      for (const [assessment, range] of Object.entries(GLARE_LEVELS)) {
        if (percentage >= range.min && percentage <= range.max) {
          return assessment as GlareAssessment
        }
      }
      return GLARE_ASSESSMENTS.none
    },
    [],
  )

  const analyzeGlare = useCallback(
    async (base64Image: string): Promise<GlareData | null> => {
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

      // Detect bright pixels (potential glare)
      // Use threshold of 240+ for very bright pixels
      const brightThreshold = 240
      const pixelCount = data.length / 4
      let brightPixelCount = 0
      const brightPixels: boolean[] = new Array(pixelCount).fill(false)

      for (let i = 0; i < data.length; i += 4) {
        const r = data[i]
        const g = data[i + 1]
        const b = data[i + 2]
        const luminance = 0.299 * r + 0.587 * g + 0.114 * b

        if (luminance >= brightThreshold) {
          brightPixelCount++
          brightPixels[i / 4] = true
        }
      }

      // Count hotspots (clustered bright regions)
      // A simple approach: count contiguous regions of bright pixels
      const visited = new Array(pixelCount).fill(false)
      let hotspotCount = 0

      const floodFill = (startIdx: number) => {
        const stack = [startIdx]
        let regionSize = 0

        while (stack.length > 0) {
          const idx = stack.pop()!
          if (
            idx < 0 ||
            idx >= pixelCount ||
            visited[idx] ||
            !brightPixels[idx]
          )
            continue

          visited[idx] = true
          regionSize++

          const x = idx % sampleWidth
          const y = Math.floor(idx / sampleWidth)

          // Check 4-connected neighbors
          if (x > 0) stack.push(idx - 1) // left
          if (x < sampleWidth - 1) stack.push(idx + 1) // right
          if (y > 0) stack.push(idx - sampleWidth) // up
          if (y < sampleHeight - 1) stack.push(idx + sampleWidth) // down
        }

        return regionSize
      }

      for (let i = 0; i < pixelCount; i++) {
        if (brightPixels[i] && !visited[i]) {
          const regionSize = floodFill(i)
          // Only count regions larger than 50 pixels as hotspots
          if (regionSize > 50) {
            hotspotCount++
          }
        }
      }

      const affectedAreaPercentage = Math.round(
        (brightPixelCount / pixelCount) * 100,
      )
      const assessment = getGlareAssessment(affectedAreaPercentage)

      return {
        affectedAreaPercentage,
        assessment,
        hotspotCount,
      }
    },
    [getGlareAssessment],
  )

  return {
    analyzeGlare,
  }
}
