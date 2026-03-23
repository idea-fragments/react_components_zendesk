export declare const TEXT_QUALITY_ASSESSMENTS: {
    readonly excellent: "excellent";
    readonly good: "good";
    readonly poor: "poor";
    readonly very_poor: "very_poor";
};
export declare const TEXT_SHARPNESS_LEVELS: {
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
export declare const TEXT_CONTRAST_LEVELS: {
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
export type TextQualityAssessment = (typeof TEXT_QUALITY_ASSESSMENTS)[keyof typeof TEXT_QUALITY_ASSESSMENTS];
export type TextQualityData = {
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
export declare const useTextQualityDetection: ({ skipOcrDetection, }?: UseTextQualityDetectionProps) => {
    analyzeTextQuality: (base64Image: string) => Promise<TextQualityData | null>;
    isOCRReady: boolean;
};
export {};
//# sourceMappingURL=useTextQualityDetection.d.ts.map