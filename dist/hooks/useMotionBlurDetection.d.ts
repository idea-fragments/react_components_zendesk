export declare const MOTION_BLUR_ASSESSMENTS: {
    readonly excessive: "excessive";
    readonly moderate: "moderate";
    readonly minimal: "minimal";
    readonly stable: "stable";
};
export declare const MOTION_BLUR_LEVELS: {
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
export type MotionBlurAssessment = (typeof MOTION_BLUR_ASSESSMENTS)[keyof typeof MOTION_BLUR_ASSESSMENTS];
export type MotionBlurData = {
    assessment: MotionBlurAssessment;
    motionScore: number;
};
export declare const useMotionBlurDetection: () => {
    analyzeMotionBlur: (base64Image: string) => Promise<MotionBlurData | null>;
    reset: () => void;
};
//# sourceMappingURL=useMotionBlurDetection.d.ts.map