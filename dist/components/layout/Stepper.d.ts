import { FC, ReactElement, ReactNode } from "react";
import { FullSpectrumColors } from "styles/theme/Theme.type";
export type StepperRenderProps = {
    currentStep: number;
    dots: ReactNode;
    stepCount: number;
    title: string;
};
export type StepperProps = {
    children: (props: StepperRenderProps) => ReactElement;
    color?: FullSpectrumColors;
    completedColor?: string;
    currentColor?: string;
    currentStep: number;
    incompleteColor?: string;
    stepCount: number;
};
export declare const Stepper: FC<StepperProps>;
//# sourceMappingURL=Stepper.d.ts.map