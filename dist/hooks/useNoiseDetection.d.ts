export declare const NOISE_ASSESSMENTS: {
    readonly excessive: "excessive";
    readonly high: "high";
    readonly low: "low";
    readonly moderate: "moderate";
    readonly minimal: "minimal";
};
export declare const NOISE_LEVELS: {
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
export type NoiseAssessment = (typeof NOISE_ASSESSMENTS)[keyof typeof NOISE_ASSESSMENTS];
export type NoiseData = {
    assessment: NoiseAssessment;
    noiseLevel: number;
};
export declare const useNoiseDetection: () => {
    analyzeNoise: (base64Image: string) => Promise<NoiseData | null>;
};
//# sourceMappingURL=useNoiseDetection.d.ts.map