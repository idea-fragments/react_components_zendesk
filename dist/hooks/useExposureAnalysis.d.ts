export declare const EXPOSURE_ASSESSMENTS: {
    readonly overexposed: "overexposed";
    readonly slightly_overexposed: "slightly_overexposed";
    readonly underexposed: "underexposed";
    readonly slightly_underexposed: "slightly_underexposed";
    readonly well_exposed: "well_exposed";
};
export type ExposureAssessment = (typeof EXPOSURE_ASSESSMENTS)[keyof typeof EXPOSURE_ASSESSMENTS];
export type ExposureData = {
    assessment: ExposureAssessment;
    clippedHighlightsPercentage: number;
    clippedShadowsPercentage: number;
    meanBrightness: number;
};
export declare const useExposureAnalysis: () => {
    analyzeExposure: (base64Image: string) => Promise<ExposureData | null>;
};
//# sourceMappingURL=useExposureAnalysis.d.ts.map