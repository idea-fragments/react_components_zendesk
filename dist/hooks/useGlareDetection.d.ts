export declare const GLARE_ASSESSMENTS: {
    readonly excessive: "excessive";
    readonly moderate: "moderate";
    readonly minimal: "minimal";
    readonly none: "none";
};
export declare const GLARE_LEVELS: {
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
export type GlareAssessment = (typeof GLARE_ASSESSMENTS)[keyof typeof GLARE_ASSESSMENTS];
export type GlareData = {
    affectedAreaPercentage: number;
    assessment: GlareAssessment;
    hotspotCount: number;
};
export declare const useGlareDetection: () => {
    analyzeGlare: (base64Image: string) => Promise<GlareData | null>;
};
//# sourceMappingURL=useGlareDetection.d.ts.map