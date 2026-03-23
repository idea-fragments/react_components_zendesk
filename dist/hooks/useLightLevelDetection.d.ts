export declare const CAMERA_LIGHT_LEVEL_ASSESSMENTS: {
    readonly bright: "bright";
    readonly dark: "dark";
    readonly low_light: "low_light";
    readonly normal: "normal";
    readonly very_bright: "very_bright";
};
export declare const CAMERA_LIGHT_LEVELS: {
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
export type LightLevelAssessment = (typeof CAMERA_LIGHT_LEVEL_ASSESSMENTS)[keyof typeof CAMERA_LIGHT_LEVEL_ASSESSMENTS];
export type LightLevelData = {
    brightnessPercentage: number;
    rawValue: number;
    status: LightLevelAssessment;
};
export declare const useLightLevelDetection: () => {
    analyzeLightLevel: (base64Image: string) => Promise<LightLevelData | null>;
};
//# sourceMappingURL=useLightLevelDetection.d.ts.map