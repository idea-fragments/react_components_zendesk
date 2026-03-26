import { Button } from "components/forms/Button"
import {
  CameraCapabilitiesData,
  DocumentEdgeData,
  ExposureData,
  GlareData,
  LightLevelData,
  MotionBlurData,
  NoiseData,
  PerspectiveData,
  PhotoBooth,
  PhotoBoothProps,
  PhotoData,
  PhotoPreviewData,
  TextQualityData,
} from "components/media/PhotoBooth"
import React from "react"

export default {
  title: "media/PhotoBooth",
  component: PhotoBooth,
  argTypes: {},
}

const Story = (args: Partial<PhotoBoothProps>) => {
  const onSubmit = async ({ file, dataUri }: PhotoData) => {
    console.log("onSubmit", file, dataUri)

    // Save the photo to the device
    const link = document.createElement("a")
    link.href = dataUri
    link.download = `photo_${new Date()
      .toISOString()
      .replace(/[:.]/g, "-")}.png`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)

    console.log("Photo saved to device as:", link.download)
  }

  const onCameraCapabilitiesDetected = (data: CameraCapabilitiesData) => {
    console.log("Camera Capabilities Data:", data)
    console.log("Current Settings:", data.currentSettings)
    console.log("Capabilities:", data.capabilities)
  }

  const onLightLevelChange = (data: LightLevelData) => {
    console.log("Light Level Data:", {
      brightnessPercentage: data.brightnessPercentage,
      rawValue: data.rawValue,
      status: data.status,
    })
  }

  const onTextQualityDetected = (data: TextQualityData) => {
    console.log("Text Quality Data:", {
      contrast: data.contrast,
      ocr: data.ocr,
      overallQuality: data.overallQuality,
      sharpness: data.sharpness,
    })
  }

  const onMotionBlurDetected = (data: MotionBlurData) => {
    console.log("Motion Blur Data:", {
      assessment: data.assessment,
      motionScore: data.motionScore,
    })
  }

  const onGlareDetected = (data: GlareData) => {
    console.log("Glare Data:", {
      affectedAreaPercentage: data.affectedAreaPercentage,
      assessment: data.assessment,
      hotspotCount: data.hotspotCount,
    })
  }

  const onExposureDetected = (data: ExposureData) => {
    console.log("Exposure Data:", {
      assessment: data.assessment,
      clippedHighlightsPercentage: data.clippedHighlightsPercentage,
      clippedShadowsPercentage: data.clippedShadowsPercentage,
      meanBrightness: data.meanBrightness,
    })
  }

  const onNoiseDetected = (data: NoiseData) => {
    console.log("Noise Data:", {
      assessment: data.assessment,
      noiseLevel: data.noiseLevel,
    })
  }

  const onDocumentEdgeDetected = (data: DocumentEdgeData) => {
    console.log("Document Edge Data:", {
      confidence: data.confidence,
      corners: data.corners,
      detected: data.detected,
    })
  }

  const onPerspectiveDetected = (data: PerspectiveData) => {
    console.log("Perspective Data:", {
      assessment: data.assessment,
      horizontalSkewAngle: data.horizontalSkewAngle,
      verticalSkewAngle: data.verticalSkewAngle,
    })
  }

  const onPreviewChanged = (data: PhotoPreviewData) => {
    console.log("Preview Quality Data:", data)
    console.log("Preview - Text Quality:", data.textQualityData)
    console.log("Preview - Motion Blur:", data.motionBlurData)
    console.log("Preview - Glare:", data.glareData)
    console.log("Preview - Exposure:", data.exposureData)
    console.log("Preview - Noise:", data.noiseData)
    console.log("Preview - Document Edges:", data.documentEdgeData)
    console.log("Preview - Perspective:", data.perspectiveData)
  }

  return (
    <div css={"height: 100vh; margin: -1rem;"}>
      <PhotoBooth
        {...args}
        onCameraCapabilitiesDetected={onCameraCapabilitiesDetected}
        onDocumentEdgeDetected={onDocumentEdgeDetected}
        onExposureDetected={onExposureDetected}
        onGlareDetected={onGlareDetected}
        onLightLevelChange={onLightLevelChange}
        onMotionBlurDetected={onMotionBlurDetected}
        onNoiseDetected={onNoiseDetected}
        onPerspectiveDetected={onPerspectiveDetected}
        onPreviewChanged={onPreviewChanged}
        onSubmit={onSubmit}
        onTextQualityDetected={onTextQualityDetected}
        trigger={(onClick: () => void) => (
          <Button onClick={onClick}>Open Camera</Button>
        )}
      />
    </div>
  )
}

export const Default = Story.bind({})
// @ts-ignore
Default.args = {
  documentMode: false,
  highQualityViewfinder: false,
  skipOcrDetection: false,
}

export const DocumentMode = Story.bind({})
// @ts-ignore
DocumentMode.args = {
  documentMode: true,
  highQualityViewfinder: false,
  skipOcrDetection: false,
}

export const HighQualityViewfinder = Story.bind({})
// @ts-ignore
HighQualityViewfinder.args = {
  documentMode: false,
  highQualityViewfinder: true,
  skipOcrDetection: false,
}
