import { Logger } from "@idea-fragments/logger-js"
import { useCallback, useEffect, useRef, useState } from "react"
import { createWorker, Worker } from "tesseract.js"

export const TEXT_QUALITY_ASSESSMENTS = {
  excellent: "excellent",
  good: "good",
  poor: "poor",
  very_poor: "very_poor",
} as const

export const TEXT_SHARPNESS_LEVELS = {
  [TEXT_QUALITY_ASSESSMENTS.excellent]: { min: 100, max: Infinity },
  [TEXT_QUALITY_ASSESSMENTS.good]: { min: 50, max: 99 },
  [TEXT_QUALITY_ASSESSMENTS.poor]: { min: 20, max: 49 },
  [TEXT_QUALITY_ASSESSMENTS.very_poor]: { min: 0, max: 19 },
} as const

export const TEXT_CONTRAST_LEVELS = {
  [TEXT_QUALITY_ASSESSMENTS.excellent]: { min: 80, max: 255 },
  [TEXT_QUALITY_ASSESSMENTS.good]: { min: 50, max: 79 },
  [TEXT_QUALITY_ASSESSMENTS.poor]: { min: 30, max: 49 },
  [TEXT_QUALITY_ASSESSMENTS.very_poor]: { min: 0, max: 29 },
} as const

export type TextQualityAssessment =
  (typeof TEXT_QUALITY_ASSESSMENTS)[keyof typeof TEXT_QUALITY_ASSESSMENTS]

export type TextQualityData = {
  contrast: {
    assessment: TextQualityAssessment
    value: number
  }
  ocr: {
    confidence: number
    text: string
    wordCount: number
  } | null
  overallQuality: TextQualityAssessment
  sharpness: {
    assessment: TextQualityAssessment
    value: number
  }
}

const logger = new Logger("useTextQualityDetection")

type UseTextQualityDetectionProps = {
  skipOcrDetection?: boolean
}

export const useTextQualityDetection = ({
  skipOcrDetection = false,
}: UseTextQualityDetectionProps = {}) => {
  const [isOCRReady, setIsOCRReady] = useState(false)
  const workerRef = useRef<Worker | null>(null)

  const getQualityAssessment = useCallback(
    (
      value: number,
      levels: typeof TEXT_SHARPNESS_LEVELS | typeof TEXT_CONTRAST_LEVELS,
    ): TextQualityAssessment => {
      for (const [assessment, range] of Object.entries(levels)) {
        if (value >= range.min && value <= range.max) {
          return assessment as TextQualityAssessment
        }
      }
      return TEXT_QUALITY_ASSESSMENTS.good
    },
    [],
  )

  const calculateSharpnessFromImageData = useCallback(
    (imageData: ImageData): number => {
      const { data, width, height } = imageData

      // Convert to grayscale and compute Laplacian variance
      const gray = new Array(width * height)
      for (let i = 0; i < data.length; i += 4) {
        const r = data[i]
        const g = data[i + 1]
        const b = data[i + 2]
        gray[i / 4] = 0.299 * r + 0.587 * g + 0.114 * b
      }

      // Apply Laplacian filter (measures edge sharpness)
      let variance = 0
      for (let y = 1; y < height - 1; y++) {
        for (let x = 1; x < width - 1; x++) {
          const idx = y * width + x
          const laplacian =
            Math.abs(
              4 * gray[idx] -
                gray[idx - 1] -
                gray[idx + 1] -
                gray[idx - width] -
                gray[idx + width],
            ) / 4
          variance += laplacian * laplacian
        }
      }

      variance = variance / ((width - 2) * (height - 2))
      return Math.round(variance)
    },
    [],
  )

  const calculateContrastFromImageData = useCallback(
    (imageData: ImageData): number => {
      const { data } = imageData

      // Calculate RMS (Root Mean Square) contrast
      let sum = 0
      let sumSquares = 0
      const pixelCount = data.length / 4

      for (let i = 0; i < data.length; i += 4) {
        const r = data[i]
        const g = data[i + 1]
        const b = data[i + 2]
        const luminance = 0.299 * r + 0.587 * g + 0.114 * b
        sum += luminance
        sumSquares += luminance * luminance
      }

      const mean = sum / pixelCount
      const variance = sumSquares / pixelCount - mean * mean
      const rmsContrast = Math.sqrt(variance)

      return Math.round(rmsContrast)
    },
    [],
  )

  const performOCR = useCallback(
    async (
      base64Image: string,
    ): Promise<{
      confidence: number
      text: string
      wordCount: number
    } | null> => {
      if (!isOCRReady || !workerRef.current) return null

      try {
        const {
          data: { text, confidence },
        } = await workerRef.current.recognize(base64Image)

        const words = text.trim().split(/\s+/).filter(Boolean)

        return {
          confidence: Math.round(confidence),
          text: text.trim(),
          wordCount: words.length,
        }
      } catch (error) {
        logger.writeError("OCR failed", error)
        return null
      }
    },
    [isOCRReady],
  )

  const analyzeTextQuality = useCallback(
    async (base64Image: string): Promise<TextQualityData | null> => {
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

      // Calculate sharpness and contrast
      const sharpnessValue = calculateSharpnessFromImageData(imageData)
      const contrastValue = calculateContrastFromImageData(imageData)

      const sharpnessAssessment = getQualityAssessment(
        sharpnessValue,
        TEXT_SHARPNESS_LEVELS,
      )
      const contrastAssessment = getQualityAssessment(
        contrastValue,
        TEXT_CONTRAST_LEVELS,
      )

      // Perform OCR (skip if disabled)
      const ocrResult = skipOcrDetection ? null : await performOCR(base64Image)

      // Overall quality is the worse of the two
      const assessmentRanking = {
        [TEXT_QUALITY_ASSESSMENTS.excellent]: 4,
        [TEXT_QUALITY_ASSESSMENTS.good]: 3,
        [TEXT_QUALITY_ASSESSMENTS.poor]: 2,
        [TEXT_QUALITY_ASSESSMENTS.very_poor]: 1,
      }

      const overallQuality =
        assessmentRanking[sharpnessAssessment] <
        assessmentRanking[contrastAssessment]
          ? sharpnessAssessment
          : contrastAssessment

      return {
        contrast: {
          assessment: contrastAssessment,
          value: contrastValue,
        },
        ocr: ocrResult,
        overallQuality,
        sharpness: {
          assessment: sharpnessAssessment,
          value: sharpnessValue,
        },
      }
    },
    [
      calculateContrastFromImageData,
      calculateSharpnessFromImageData,
      getQualityAssessment,
      performOCR,
      skipOcrDetection,
    ],
  )

  // Initialize Tesseract worker (skip if OCR detection is disabled)
  useEffect(() => {
    if (skipOcrDetection) {
      setIsOCRReady(true) // Set ready immediately when OCR is skipped
      return
    }

    let worker: Worker | null = null

    const initWorker = async () => {
      try {
        worker = await createWorker("eng")
        workerRef.current = worker
        setIsOCRReady(true)
        logger.writeInfo("Tesseract worker initialized")
      } catch (error) {
        logger.writeError("Failed to initialize Tesseract worker", error)
      }
    }

    initWorker()

    return () => {
      if (worker) {
        worker.terminate()
        workerRef.current = null
        setIsOCRReady(false)
      }
    }
  }, [skipOcrDetection])

  return {
    analyzeTextQuality,
    isOCRReady,
  }
}
