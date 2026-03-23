import { useCallback } from "react"

export type Point = {
  x: number
  y: number
}

export type DocumentCorners = {
  bottomLeft: Point
  bottomRight: Point
  topLeft: Point
  topRight: Point
}

export type DocumentEdgeData = {
  confidence: number
  corners: DocumentCorners | null
  detected: boolean
}

export const useDocumentEdgeDetection = () => {
  const analyzeDocumentEdges = useCallback(
    async (base64Image: string): Promise<DocumentEdgeData | null> => {
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

      // Apply Sobel edge detection
      const edges = new Array(width * height).fill(0)
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
          edges[idx] = Math.sqrt(gx * gx + gy * gy)
        }
      }

      // Threshold edges
      const threshold = 50
      const binary = edges.map((val) => (val > threshold ? 255 : 0))

      // Find contours by looking for strong edge regions
      // Simplified approach: find the largest rectangular region
      const edgePoints: Point[] = []
      for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
          if (binary[y * width + x] === 255) {
            edgePoints.push({ x, y })
          }
        }
      }

      // If not enough edge points, no document detected
      if (edgePoints.length < 100) {
        return {
          confidence: 0,
          corners: null,
          detected: false,
        }
      }

      // Find approximate corners using edge point distribution
      // This is a simplified approach - a full implementation would use
      // contour detection and polygon approximation (like cv2.approxPolyDP)
      const xs = edgePoints.map((p) => p.x).sort((a, b) => a - b)
      const ys = edgePoints.map((p) => p.y).sort((a, b) => a - b)

      // Use percentiles to find corners
      const getPercentile = (arr: number[], percentile: number) => {
        const idx = Math.floor(arr.length * percentile)
        return arr[idx]
      }

      const leftX = getPercentile(xs, 0.05)
      const rightX = getPercentile(xs, 0.95)
      const topY = getPercentile(ys, 0.05)
      const bottomY = getPercentile(ys, 0.95)

      // Check if detected region looks like a document (reasonable aspect ratio)
      const docWidth = rightX - leftX
      const docHeight = bottomY - topY
      const aspectRatio = docWidth / docHeight

      // Common document aspect ratios: A4 (1.414), Letter (1.294), etc.
      // Use tighter constraints: 0.7 to 1.6 to avoid detecting walls, furniture, etc.
      const isReasonableAspectRatio = aspectRatio > 0.7 && aspectRatio < 1.6

      // Document should fill frame reasonably but not completely (30-80%)
      const areaRatio = (docWidth * docHeight) / (width * height)
      const isReasonableSize = areaRatio > 0.3 && areaRatio < 0.8

      // Check if edges are concentrated near the perimeter (document edges)
      // rather than scattered throughout (which indicates texture, not a document)
      const perimeterEdges = edgePoints.filter((p) => {
        const nearLeft = Math.abs(p.x - leftX) < docWidth * 0.1
        const nearRight = Math.abs(p.x - rightX) < docWidth * 0.1
        const nearTop = Math.abs(p.y - topY) < docHeight * 0.1
        const nearBottom = Math.abs(p.y - bottomY) < docHeight * 0.1
        return nearLeft || nearRight || nearTop || nearBottom
      })
      const perimeterRatio = perimeterEdges.length / edgePoints.length
      const hasPerimeterConcentration = perimeterRatio > 0.4

      // Calculate confidence based on all factors
      let confidence = 0

      if (
        isReasonableAspectRatio &&
        isReasonableSize &&
        hasPerimeterConcentration
      ) {
        // Base confidence on perimeter edge concentration
        const baseConfidence = Math.round(perimeterRatio * 100)
        // Bonus for good aspect ratio (closer to common document ratios)
        const aspectBonus =
          Math.abs(aspectRatio - 1.414) < 0.2 ||
          Math.abs(aspectRatio - 1.294) < 0.2
            ? 10
            : 0
        confidence = Math.min(100, baseConfidence + aspectBonus)
      }

      const detected = confidence > 60

      return {
        confidence,
        corners: detected
          ? {
              bottomLeft: { x: leftX, y: bottomY },
              bottomRight: { x: rightX, y: bottomY },
              topLeft: { x: leftX, y: topY },
              topRight: { x: rightX, y: topY },
            }
          : null,
        detected,
      }
    },
    [],
  )

  return {
    analyzeDocumentEdges,
  }
}
