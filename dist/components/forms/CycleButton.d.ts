import { Props as ButtonProps } from "components/forms/Button";
type Option = {
    label: string;
    value: string;
};
type Props = Omit<ButtonProps, "onClick"> & {
    options: Array<Option>;
    selectedOption: string;
    onCycleChanged: (value: string) => void;
};
export declare const CycleButton: ({ options, selectedOption, onCycleChanged, ...buttonProps }: Props) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=CycleButton.d.ts.map