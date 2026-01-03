import { FC } from "react";
export type MonthYearPickerChange = {
    month: number;
    year: number;
};
type MonthYearPickerProps = {
    maxYear?: number;
    minDate?: Date;
    month: number;
    pastFutureYearRangeSize: number;
    year: number;
    onChange: (c: MonthYearPickerChange) => void;
};
export declare const MonthYearPicker: FC<MonthYearPickerProps>;
export {};
//# sourceMappingURL=MonthYearPicker.d.ts.map