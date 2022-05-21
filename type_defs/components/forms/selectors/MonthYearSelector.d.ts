/// <reference types="react" />
import { TextFieldProps } from "components/forms/formField.types";
import { Moment } from "moment";
declare type Props = {
    minimumDate?: Moment;
} & TextFieldProps<string, string>;
export declare const MonthYearSelector: (props: Props) => JSX.Element;
export {};
//# sourceMappingURL=MonthYearSelector.d.ts.map
