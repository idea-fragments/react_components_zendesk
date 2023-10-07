import { Moment } from "moment";
export type MonthYearPickerChange = {
    month: number;
    year: number;
};
type Props = {
    month: number;
    year: number;
    minDate?: Moment;
    pastFutureYearRangeSize: number;
    onChange: (c: MonthYearPickerChange) => void;
};
export declare const MonthYearPicker: ({ month, year, minDate, pastFutureYearRangeSize, onChange, }: Props) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=MonthYearPicker.d.ts.map