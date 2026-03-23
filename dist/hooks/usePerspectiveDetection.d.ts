export declare const PERSPECTIVE_ASSESSMENTS: {
    readonly aligned: "aligned";
    readonly heavily_skewed: "heavily_skewed";
    readonly moderately_skewed: "moderately_skewed";
    readonly slightly_skewed: "slightly_skewed";
};
export declare const PERSPECTIVE_LEVELS: {
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
export type PerspectiveAssessment = (typeof PERSPECTIVE_ASSESSMENTS)[keyof typeof PERSPECTIVE_ASSESSMENTS];
export type PerspectiveData = {
    assessment: PerspectiveAssessment;
    horizontalSkewAngle: number;
    verticalSkewAngle: number;
};
export declare const usePerspectiveDetection: () => {
    analyzePerspective: (base64Image: string) => Promise<PerspectiveData | null>;
};
//# sourceMappingURL=usePerspectiveDetection.d.ts.map