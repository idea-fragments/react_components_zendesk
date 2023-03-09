import { FormFieldProps } from "components/forms/formField.types";
import { ChangeEvent, FC } from "react";
import { ColorProps } from "styles/types";
export declare type SliderProps = FormFieldProps & ColorProps & {
    min?: number;
    max?: number;
    onChange: (n: number, e: ChangeEvent<HTMLInputElement>) => void;
    step?: number;
    throttleMilliseconds?: number;
    value: number;
};
export declare let Slider: FC<SliderProps>;
//# sourceMappingURL=Slider.d.ts.map