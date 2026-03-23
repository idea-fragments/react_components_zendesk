import * as styled_components from 'styled-components';
import { FlattenSimpleInterpolation } from 'styled-components';
import React, { ComponentType, SVGAttributes, PropsWithChildren, ReactNode, Ref, FC } from 'react';
import { Nullable } from 'global';
import { ValueOf } from 'utils/types';

type SVGComponent = ComponentType<SVGAttributes<any>>;

declare const ALIGNMENTS: {
    readonly start: "flex-start";
    readonly center: "center";
    readonly end: "flex-end";
};
type Alignment = ValueOf<typeof ALIGNMENTS>;

type ColorProps = {
    accent?: boolean;
    color?: string;
    danger?: boolean;
    neutral?: boolean;
    primary?: boolean;
    secondary?: boolean;
    success?: boolean;
    warning?: boolean;
};
type ContainerProps = {
    _css?: CSS;
    color?: string;
    compact?: boolean;
    fluid?: boolean;
    className?: any;
};
type CSS<T = any> = FlattenSimpleInterpolation | string | T;
type CSSProp<T = any> = {
    _css?: CSS<T>;
    className?: string;
};

type PromiseFunc<T = any, Rtn = any> = (...o: T[]) => Promise<Rtn>;

declare const BUTTON_SIZES: {
    readonly LARGE: "large";
    readonly MEDIUM: "medium";
    readonly SMALL: "small";
    readonly X_SMALL: "x_small";
};
type ButtonSize = (typeof BUTTON_SIZES)[keyof typeof BUTTON_SIZES];
type AutoLoadable = {
    autoLoadable: true;
    onClick: PromiseFunc;
};
type ButtonBaseProps = PropsWithChildren<{
    alignItems?: string;
    alignSelf?: Alignment;
    ariaLabel?: string;
    autoLoadable?: boolean;
    disabled?: boolean;
    flat?: boolean;
    groupKey?: string;
    icon?: Nullable<string | SVGComponent | ComponentType | ReactNode>;
    iconPosition?: "left" | "right";
    iconSize?: string;
    inline?: boolean;
    innerAs?: string;
    innerRef?: Ref<HTMLButtonElement>;
    loading?: boolean;
    pill?: boolean;
    primary?: boolean;
    size?: ButtonSize;
    wrapInlineText?: boolean;
    onClick: () => void;
}> & CSSProp & ColorProps & ContainerProps;
type ControlledLoadable = {
    loading?: boolean;
    onClick: () => void;
};
type ButtonProps = (ButtonBaseProps & ControlledLoadable) | (ButtonBaseProps & AutoLoadable);

type RenderPropParams$1 = {
    clearVideoData: () => void;
    openVideoSelector: () => void;
};
type VideoUploaderProps = {
    buttonProps?: ButtonProps;
    children?: (p: RenderPropParams$1) => ReactNode;
    onChange: (vd: Nullable<VideoData>) => void;
    shouldCrop?: boolean;
    videoData?: VideoData;
};
type CropArea = {
    width: number;
    height: number;
    x: number;
    y: number;
};
type VideoData = {
    cropAreaPercentage?: CropArea;
    cropAreaPx?: CropArea;
    cropScale?: number;
    dataURL?: string;
    file?: File;
};
declare const VideoUploader: FC<VideoUploaderProps>;

type CroppedVideoPlayerProps = {
    onLoad?: () => void;
    videoData: VideoData;
};
declare const CroppedVideoPlayer: styled_components.StyledComponent<React.FC<CroppedVideoPlayerProps>, styled_components.DefaultTheme, CSSProp<any>, never>;

type RenderPropParams = {
    clearImageData: () => void;
    openImageSelector: () => void;
};
type ImageUploaderProps = {
    buttonProps?: ButtonProps;
    children?: (p: RenderPropParams) => ReactNode;
    imageData?: ImageData;
    onChange: (image?: ImageData) => void;
};
type ImageData = {
    dataURL?: string;
    file?: File;
};
declare const ImageUploader: FC<ImageUploaderProps>;

type Point = {
    x: number;
    y: number;
};
type DocumentCorners = {
    bottomLeft: Point;
    bottomRight: Point;
    topLeft: Point;
    topRight: Point;
};
type DocumentEdgeData = {
    confidence: number;
    corners: DocumentCorners | null;
    detected: boolean;
};
declare const useDocumentEdgeDetection: () => {
    analyzeDocumentEdges: (base64Image: string) => Promise<DocumentEdgeData | null>;
};

declare const EXPOSURE_ASSESSMENTS: {
    readonly overexposed: "overexposed";
    readonly slightly_overexposed: "slightly_overexposed";
    readonly underexposed: "underexposed";
    readonly slightly_underexposed: "slightly_underexposed";
    readonly well_exposed: "well_exposed";
};
type ExposureAssessment = (typeof EXPOSURE_ASSESSMENTS)[keyof typeof EXPOSURE_ASSESSMENTS];
type ExposureData = {
    assessment: ExposureAssessment;
    clippedHighlightsPercentage: number;
    clippedShadowsPercentage: number;
    meanBrightness: number;
};
declare const useExposureAnalysis: () => {
    analyzeExposure: (base64Image: string) => Promise<ExposureData | null>;
};

declare const GLARE_ASSESSMENTS: {
    readonly excessive: "excessive";
    readonly moderate: "moderate";
    readonly minimal: "minimal";
    readonly none: "none";
};
declare const GLARE_LEVELS: {
    readonly excessive: {
        readonly min: 15;
        readonly max: number;
    };
    readonly moderate: {
        readonly min: 8;
        readonly max: 14;
    };
    readonly minimal: {
        readonly min: 3;
        readonly max: 7;
    };
    readonly none: {
        readonly min: 0;
        readonly max: 2;
    };
};
type GlareAssessment = (typeof GLARE_ASSESSMENTS)[keyof typeof GLARE_ASSESSMENTS];
type GlareData = {
    affectedAreaPercentage: number;
    assessment: GlareAssessment;
    hotspotCount: number;
};
declare const useGlareDetection: () => {
    analyzeGlare: (base64Image: string) => Promise<GlareData | null>;
};

declare const CAMERA_LIGHT_LEVEL_ASSESSMENTS: {
    readonly bright: "bright";
    readonly dark: "dark";
    readonly low_light: "low_light";
    readonly normal: "normal";
    readonly very_bright: "very_bright";
};
declare const CAMERA_LIGHT_LEVELS: {
    readonly bright: {
        readonly min: 150;
        readonly max: 199;
    };
    readonly dark: {
        readonly min: 0;
        readonly max: 49;
    };
    readonly low_light: {
        readonly min: 50;
        readonly max: 99;
    };
    readonly normal: {
        readonly min: 100;
        readonly max: 149;
    };
    readonly very_bright: {
        readonly min: 200;
        readonly max: 255;
    };
};
type LightLevelAssessment = (typeof CAMERA_LIGHT_LEVEL_ASSESSMENTS)[keyof typeof CAMERA_LIGHT_LEVEL_ASSESSMENTS];
type LightLevelData = {
    brightnessPercentage: number;
    rawValue: number;
    status: LightLevelAssessment;
};
declare const useLightLevelDetection: () => {
    analyzeLightLevel: (base64Image: string) => Promise<LightLevelData | null>;
};

declare const MOTION_BLUR_ASSESSMENTS: {
    readonly excessive: "excessive";
    readonly moderate: "moderate";
    readonly minimal: "minimal";
    readonly stable: "stable";
};
declare const MOTION_BLUR_LEVELS: {
    readonly excessive: {
        readonly min: 30;
        readonly max: number;
    };
    readonly moderate: {
        readonly min: 15;
        readonly max: 29;
    };
    readonly minimal: {
        readonly min: 5;
        readonly max: 14;
    };
    readonly stable: {
        readonly min: 0;
        readonly max: 4;
    };
};
type MotionBlurAssessment = (typeof MOTION_BLUR_ASSESSMENTS)[keyof typeof MOTION_BLUR_ASSESSMENTS];
type MotionBlurData = {
    assessment: MotionBlurAssessment;
    motionScore: number;
};
declare const useMotionBlurDetection: () => {
    analyzeMotionBlur: (base64Image: string) => Promise<MotionBlurData | null>;
    reset: () => void;
};

declare const NOISE_ASSESSMENTS: {
    readonly excessive: "excessive";
    readonly high: "high";
    readonly low: "low";
    readonly moderate: "moderate";
    readonly minimal: "minimal";
};
declare const NOISE_LEVELS: {
    readonly excessive: {
        readonly min: 25;
        readonly max: number;
    };
    readonly high: {
        readonly min: 18;
        readonly max: 24;
    };
    readonly moderate: {
        readonly min: 12;
        readonly max: 17;
    };
    readonly low: {
        readonly min: 6;
        readonly max: 11;
    };
    readonly minimal: {
        readonly min: 0;
        readonly max: 5;
    };
};
type NoiseAssessment = (typeof NOISE_ASSESSMENTS)[keyof typeof NOISE_ASSESSMENTS];
type NoiseData = {
    assessment: NoiseAssessment;
    noiseLevel: number;
};
declare const useNoiseDetection: () => {
    analyzeNoise: (base64Image: string) => Promise<NoiseData | null>;
};

declare const PERSPECTIVE_ASSESSMENTS: {
    readonly aligned: "aligned";
    readonly heavily_skewed: "heavily_skewed";
    readonly moderately_skewed: "moderately_skewed";
    readonly slightly_skewed: "slightly_skewed";
};
declare const PERSPECTIVE_LEVELS: {
    readonly aligned: {
        readonly min: 0;
        readonly max: 5;
    };
    readonly slightly_skewed: {
        readonly min: 5.01;
        readonly max: 15;
    };
    readonly moderately_skewed: {
        readonly min: 15.01;
        readonly max: 30;
    };
    readonly heavily_skewed: {
        readonly min: 30.01;
        readonly max: number;
    };
};
type PerspectiveAssessment = (typeof PERSPECTIVE_ASSESSMENTS)[keyof typeof PERSPECTIVE_ASSESSMENTS];
type PerspectiveData = {
    assessment: PerspectiveAssessment;
    horizontalSkewAngle: number;
    verticalSkewAngle: number;
};
declare const usePerspectiveDetection: () => {
    analyzePerspective: (base64Image: string) => Promise<PerspectiveData | null>;
};

declare const TEXT_QUALITY_ASSESSMENTS: {
    readonly excellent: "excellent";
    readonly good: "good";
    readonly poor: "poor";
    readonly very_poor: "very_poor";
};
declare const TEXT_SHARPNESS_LEVELS: {
    readonly excellent: {
        readonly min: 100;
        readonly max: number;
    };
    readonly good: {
        readonly min: 50;
        readonly max: 99;
    };
    readonly poor: {
        readonly min: 20;
        readonly max: 49;
    };
    readonly very_poor: {
        readonly min: 0;
        readonly max: 19;
    };
};
declare const TEXT_CONTRAST_LEVELS: {
    readonly excellent: {
        readonly min: 80;
        readonly max: 255;
    };
    readonly good: {
        readonly min: 50;
        readonly max: 79;
    };
    readonly poor: {
        readonly min: 30;
        readonly max: 49;
    };
    readonly very_poor: {
        readonly min: 0;
        readonly max: 29;
    };
};
type TextQualityAssessment = (typeof TEXT_QUALITY_ASSESSMENTS)[keyof typeof TEXT_QUALITY_ASSESSMENTS];
type TextQualityData = {
    contrast: {
        assessment: TextQualityAssessment;
        value: number;
    };
    ocr: {
        confidence: number;
        text: string;
        wordCount: number;
    } | null;
    overallQuality: TextQualityAssessment;
    sharpness: {
        assessment: TextQualityAssessment;
        value: number;
    };
};
type UseTextQualityDetectionProps = {
    skipOcrDetection?: boolean;
};
declare const useTextQualityDetection: ({ skipOcrDetection, }?: UseTextQualityDetectionProps) => {
    analyzeTextQuality: (base64Image: string) => Promise<TextQualityData | null>;
    isOCRReady: boolean;
};

type PhotoData = {
    dataUri: string;
    file: File;
};
type PhotoPreviewData = {
    documentEdgeData?: DocumentEdgeData | null;
    exposureData?: ExposureData | null;
    glareData?: GlareData | null;
    motionBlurData?: MotionBlurData | null;
    noiseData?: NoiseData | null;
    perspectiveData?: PerspectiveData | null;
    previewSrc: string;
    textQualityData?: TextQualityData | null;
};
type CameraCapabilityRange = {
    max?: number;
    min?: number;
    step?: number;
};
type CameraCapabilities = {
    aspectRatio?: CameraCapabilityRange;
    brightness?: CameraCapabilityRange;
    colorTemperature?: CameraCapabilityRange;
    contrast?: CameraCapabilityRange;
    deviceId?: string;
    exposureCompensation?: CameraCapabilityRange;
    exposureMode?: string[];
    exposureTime?: CameraCapabilityRange;
    facingMode?: string[];
    focusDistance?: CameraCapabilityRange;
    focusMode?: string[];
    frameRate?: CameraCapabilityRange;
    groupId?: string;
    height?: CameraCapabilityRange;
    resizeMode?: string[];
    saturation?: CameraCapabilityRange;
    sharpness?: CameraCapabilityRange;
    whiteBalanceMode?: string[];
    width?: CameraCapabilityRange;
    zoom?: CameraCapabilityRange;
};
type CameraSettings = {
    aspectRatio?: number;
    brightness?: number;
    colorTemperature?: number;
    contrast?: number;
    deviceId?: string;
    exposureCompensation?: number;
    exposureMode?: string;
    exposureTime?: number;
    facingMode?: string;
    focusDistance?: number;
    focusMode?: string;
    frameRate?: number;
    groupId?: string;
    height?: number;
    resizeMode?: string;
    saturation?: number;
    sharpness?: number;
    whiteBalanceMode?: string;
    width?: number;
    zoom?: number;
};
type MegapixelInfo = {
    current: string;
    maximum: string;
};
type CameraCapabilitiesData = {
    capabilities: CameraCapabilities;
    currentSettings: CameraSettings;
    deviceId?: string;
    label: string;
    megapixels: MegapixelInfo;
};
type PhotoBoothProps = {
    documentMode?: boolean;
    onCameraCapabilitiesDetected?: (data: CameraCapabilitiesData) => void;
    onDocumentEdgeDetected?: (data: DocumentEdgeData) => void;
    onExposureDetected?: (data: ExposureData) => void;
    onGlareDetected?: (data: GlareData) => void;
    onHideCamera?: () => void;
    onLightLevelChange?: (data: LightLevelData) => void;
    onMotionBlurDetected?: (data: MotionBlurData) => void;
    onNoiseDetected?: (data: NoiseData) => void;
    onPerspectiveDetected?: (data: PerspectiveData) => void;
    onPreviewChanged?: (data: PhotoPreviewData) => void;
    onSilentError?: (error: Error) => void;
    onSubmit: (data: PhotoData) => Promise<void>;
    onTextQualityDetected?: (data: TextQualityData) => void;
    open?: boolean;
    skipOcrDetection?: boolean;
    trigger?: (onClick: () => void) => ReactNode;
};
declare const PhotoBooth: FC<PhotoBoothProps>;

type VideoPlayerProps = {
    height?: string;
    videoData: VideoData;
    width?: string;
};
declare const VideoPlayer: FC<VideoPlayerProps>;

export { CAMERA_LIGHT_LEVELS, CAMERA_LIGHT_LEVEL_ASSESSMENTS, CameraCapabilities, CameraCapabilitiesData, CameraCapabilityRange, CameraSettings, CroppedVideoPlayer, CroppedVideoPlayerProps, DocumentCorners, DocumentEdgeData, EXPOSURE_ASSESSMENTS, ExposureAssessment, ExposureData, GLARE_ASSESSMENTS, GLARE_LEVELS, GlareAssessment, GlareData, ImageData, ImageUploader, ImageUploaderProps, LightLevelAssessment, LightLevelData, MOTION_BLUR_ASSESSMENTS, MOTION_BLUR_LEVELS, MegapixelInfo, MotionBlurAssessment, MotionBlurData, NOISE_ASSESSMENTS, NOISE_LEVELS, NoiseAssessment, NoiseData, PERSPECTIVE_ASSESSMENTS, PERSPECTIVE_LEVELS, PerspectiveAssessment, PerspectiveData, PhotoBooth, PhotoBoothProps, PhotoData, PhotoPreviewData, Point, TEXT_CONTRAST_LEVELS, TEXT_QUALITY_ASSESSMENTS, TEXT_SHARPNESS_LEVELS, TextQualityAssessment, TextQualityData, VideoData, VideoPlayer, VideoPlayerProps, VideoUploader, VideoUploaderProps, useDocumentEdgeDetection, useExposureAnalysis, useGlareDetection, useLightLevelDetection, useMotionBlurDetection, useNoiseDetection, usePerspectiveDetection, useTextQualityDetection };
