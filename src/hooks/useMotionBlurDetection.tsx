import { useCallback, useRef } from "react"

export const MOTION_BLUR_ASSESSMENTS = {
  excessive: "excessive",
  moderate: "moderate",
  minimal: "minimal",
  stable: "stable",
} as const

export const MOTION_BLUR_LEVELS = {
  [MOTION_BLUR_ASSESSMENTS.excessive]: { min: 30, max: Infinity },
  [MOTION_BLUR_ASSESSMENTS.moderate]: { min: 15, max: 29 },
  [MOTION_BLUR_ASSESSMENTS.minimal]: { min: 5, max: 14 },
  [MOTION_BLUR_ASSESSMENTS.stable]: { min: 0, max: 4 },
} as const

export type MotionBlurAssessment =
  (typeof MOTION_BLUR_ASSESSMENTS)[keyof typeof MOTION_BLUR_ASSESSMENTS]

export type MotionBlurData = {
  assessment: MotionBlurAssessment
  motionScore: number
}

export const useMotionBlurDetection = () => {
  const previousFrameRef = useRef<ImageData | null>(null)

  const getMotionAssessment = useCallback(
    (score: number): MotionBlurAssessment => {
      for (const [assessment, range] of Object.entries(MOTION_BLUR_LEVELS)) {
        if (score >= range.min && score <= range.max) {
          return assessment as MotionBlurAssessment
        }
      }
      return MOTION_BLUR_ASSESSMENTS.stable
    },
    [],
  )

  const analyzeMotionBlur = useCallback(
    async (base64Image: string): Promise<MotionBlurData | null> => {
      // Create an image element to load the base64 data
      const img = new Image()
      img.src = base64Image

      await new Promise((resolve, reject) => {
        img.onload = resolve
        img.onerror = reject
      })

      // Create a canvas to get image data
      const canvas = document.createElement("canvas")
      const sampleWidth = Math.min(320, img.width)
      const sampleHeight = Math.min(240, img.height)

      canvas.width = sampleWidth
      canvas.height = sampleHeight

      const context = canvas.getContext("2d")
      if (!context) return null

      context.drawImage(img, 0, 0, sampleWidth, sampleHeight)
      const currentFrame = context.getImageData(0, 0, sampleWidth, sampleHeight)

      // If we don't have a previous frame, store this one and return stable
      if (!previousFrameRef.current) {
        previousFrameRef.current = currentFrame
        return {
          assessment: MOTION_BLUR_ASSESSMENTS.stable,
          motionScore: 0,
        }
      }

      // Calculate frame difference (temporal variance)
      const currentData = currentFrame.data
      const previousData = previousFrameRef.current.data
      let totalDifference = 0
      const pixelCount = currentData.length / 4

      for (let i = 0; i < currentData.length; i += 4) {
        const rDiff = Math.abs(currentData[i] - previousData[i])
        const gDiff = Math.abs(currentData[i + 1] - previousData[i + 1])
        const bDiff = Math.abs(currentData[i + 2] - previousData[i + 2])
        totalDifference += (rDiff + gDiff + bDiff) / 3
      }

      const averageDifference = totalDifference / pixelCount
      const motionScore = Math.round(averageDifference)

      // Store current frame for next comparison
      previousFrameRef.current = currentFrame

      const assessment = getMotionAssessment(motionScore)

      return {
        assessment,
        motionScore,
      }
    },
    [getMotionAssessment],
  )

  const reset = useCallback(() => {
    previousFrameRef.current = null
  }, [])

  return {
    analyzeMotionBlur,
    reset,
  }
}
