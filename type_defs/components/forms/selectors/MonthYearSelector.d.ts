/// <reference types="react" />
import type { TextFieldProps } from "components/forms/formField.types";
import type { Moment } from "moment";
declare type Props = {
    minimumDate?: Moment;
} & TextFieldProps<string, string>;
export declare const MonthYearSelector: (props: Props) => JSX.Element;
export {};
//# sourceMappingURL=MonthYearSelector.d.ts.map