import { useCallback } from "react"

export const PERSPECTIVE_ASSESSMENTS = {
  aligned: "aligned",
  heavily_skewed: "heavily_skewed",
  moderately_skewed: "moderately_skewed",
  slightly_skewed: "slightly_skewed",
} as const

export const PERSPECTIVE_LEVELS = {
  [PERSPECTIVE_ASSESSMENTS.aligned]: { min: 0, max: 5 },
  [PERSPECTIVE_ASSESSMENTS.slightly_skewed]: { min: 5.01, max: 15 },
  [PERSPECTIVE_ASSESSMENTS.moderately_skewed]: { min: 15.01, max: 30 },
  [PERSPECTIVE_ASSESSMENTS.heavily_skewed]: { min: 30.01, max: Infinity },
} as const

export type PerspectiveAssessment =
  (typeof PERSPECTIVE_ASSESSMENTS)[keyof typeof PERSPECTIVE_ASSESSMENTS]

export type PerspectiveData = {
  assessment: PerspectiveAssessment
  horizontalSkewAngle: number
  verticalSkewAngle: number
}

export const usePerspectiveDetection = () => {
  const getPerspectiveAssessment = useCallback(
    (maxAngle: number): PerspectiveAssessment => {
      for (const [assessment, range] of Object.entries(PERSPECTIVE_LEVELS)) {
        if (maxAngle >= range.min && maxAngle <= range.max) {
          return assessment as PerspectiveAssessment
        }
      }
      return PERSPECTIVE_ASSESSMENTS.aligned
    },
    [],
  )

  const analyzePerspective = useCallback(
    async (base64Image: string): Promise<PerspectiveData | null> => {
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
      const imageData = context.getImageData(0, 0, canvas.width, canvas.height)
      const data = imageData.data
      const width = canvas.width
      const height = canvas.height

      // Convert to grayscale
      const gray = new Array(width * height)
      for (let i = 0; i < data.length; i += 4) {
        const r = data[i]
        const g = data[i + 1]
        const b = data[i + 2]
        gray[i / 4] = 0.299 * r + 0.587 * g + 0.114 * b
      }

      // Detect edges using Sobel
      const edges = new Array(width * height).fill(0)
      const angles = new Array(width * height).fill(0)

      for (let y = 1; y < height - 1; y++) {
        for (let x = 1; x < width - 1; x++) {
          const idx = y * width + x
          const gx =
            -gray[idx - width - 1] +
            gray[idx - width + 1] -
            2 * gray[idx - 1] +
            2 * gray[idx + 1] -
            gray[idx + width - 1] +
            gray[idx + width + 1]
          const gy =
            -gray[idx - width - 1] -
            2 * gray[idx - width] -
            gray[idx - width + 1] +
            gray[idx + width - 1] +
            2 * gray[idx + width] +
            gray[idx + width + 1]

          const magnitude = Math.sqrt(gx * gx + gy * gy)
          edges[idx] = magnitude

          if (magnitude > 50) {
            angles[idx] = Math.atan2(gy, gx)
          }
        }
      }

      // Collect dominant edge angles
      const horizontalAngles: number[] = []
      const verticalAngles: number[] = []

      for (let i = 0; i < edges.length; i++) {
        if (edges[i] > 50) {
          const angle = angles[i]
          const degrees = (angle * 180) / Math.PI

          // Horizontal edges (close to 0° or 180°)
          if (Math.abs(degrees) < 30 || Math.abs(degrees) > 150) {
            horizontalAngles.push(degrees)
          }
          // Vertical edges (close to 90° or -90°)
          else if (Math.abs(Math.abs(degrees) - 90) < 30) {
            verticalAngles.push(degrees)
          }
        }
      }

      // Calculate median angles
      const getMedian = (arr: number[]) => {
        if (arr.length === 0) return 0
        const sorted = arr.slice().sort((a, b) => a - b)
        const mid = Math.floor(sorted.length / 2)
        return sorted.length % 2 === 0
          ? (sorted[mid - 1] + sorted[mid]) / 2
          : sorted[mid]
      }

      const horizontalMedian = getMedian(horizontalAngles)
      const verticalMedian = getMedian(verticalAngles)

      // Calculate skew angles relative to ideal (0° for horizontal, 90° for vertical)
      let horizontalSkewAngle = Math.abs(horizontalMedian)
      if (horizontalSkewAngle > 90) {
        horizontalSkewAngle = 180 - horizontalSkewAngle
      }

      let verticalSkewAngle = Math.abs(Math.abs(verticalMedian) - 90)

      // Use the maximum skew as the overall assessment
      const maxSkewAngle = Math.max(horizontalSkewAngle, verticalSkewAngle)
      const assessment = getPerspectiveAssessment(maxSkewAngle)

      return {
        assessment,
        horizontalSkewAngle: Math.round(horizontalSkewAngle * 10) / 10,
        verticalSkewAngle: Math.round(verticalSkewAngle * 10) / 10,
      }
    },
    [getPerspectiveAssessment],
  )

  return {
    analyzePerspective,
  }
}
