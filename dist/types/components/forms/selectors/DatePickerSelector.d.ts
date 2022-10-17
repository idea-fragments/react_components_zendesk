/// <reference types="react" />
import { TextFieldProps } from "components/forms/formField.types";
import { Moment } from "moment";
declare type Props = {
    minimumDate?: Moment;
    disabledDates: Array<Moment>;
} & TextFieldProps<string, Moment>;
export declare const DatePickerSelector: {
    (props: Props): JSX.Element;
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