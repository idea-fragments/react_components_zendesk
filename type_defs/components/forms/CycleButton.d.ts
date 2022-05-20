/// <reference types="react" />
import { Props as ButtonProps } from "components/forms/Button";
declare type Option = {
    label: string;
    value: string;
};
declare type Props = Omit<ButtonProps, "onClick"> & {
    options: Array<Option>;
    selectedOption: string;
    onCycleChanged: (value: string) => void;
};
export declare const CycleButton: ({ options, selectedOption, onCycleChanged, ...buttonProps }: Props) => JSX.Element;
export {};
//# sourceMappingURL=CycleButton.d.ts.map