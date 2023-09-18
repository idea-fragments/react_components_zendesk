import { TextFieldProps } from "components/forms/formField.types";
import { Moment } from "moment";
type Props = {
    minimumDate?: Moment;
    disabledDates: Array<Moment>;
    onChange: (d: Moment) => void;
} & Omit<TextFieldProps, "onChange">;
export declare const DatePickerSelector: {
    (props: Props): import("react/jsx-runtime").JSX.Element;
    COMPONENT_NAME: string;
    defaultProps: {
        onChange: (...args: any) => void;
        emptyState: string;
        disabledDates: never[];
        disabled: boolean;
    };
};
export {};
//# sourceMappingURL=DatePickerSelector.d.ts.map