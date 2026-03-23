import React, { FC } from 'react';
import * as styled_components from 'styled-components';
import { FlattenSimpleInterpolation } from 'styled-components';
import * as react_jsx_runtime from 'react/jsx-runtime';

type DateRange = {
    startDate: Date;
    endDate: Date;
};

type LabeledRangeList = {
    color?: string;
    label: string;
    ranges: Array<DateRange>;
};
type ColoredDateRange = DateRange & {
    color?: string;
};
type TinyCalendarProps = {
    disabledDates: Array<Date>;
    fluid?: boolean;
    initialDate?: Date;
    labeledRanges?: Array<LabeledRangeList>;
    minDate?: Date;
    ranges?: Array<ColoredDateRange>;
    showLegend?: boolean;
    onChange: (d: Date) => void;
};
declare let TinyCalendar: FC<TinyCalendarProps>;

type CSS<T = any> = FlattenSimpleInterpolation | string | T;
type CSSProp<T = any> = {
    _css?: CSS<T>;
    className?: string;
};

type TinyDateRangePickerProps = {
    disabledDates?: Array<Date>;
    fluid?: boolean;
    initialRange?: DateRange;
    maxDate?: Date;
    minDate?: Date;
    onChange: (range: DateRange) => void;
} & CSSProp;
declare const TinyDateRangePicker: styled_components.StyledComponent<React.FC<{
    disabledDates?: Date[] | undefined;
    fluid?: boolean | undefined;
    initialRange?: DateRange | undefined;
    maxDate?: Date | undefined;
    minDate?: Date | undefined;
    onChange: (range: DateRange) => void;
} & CSSProp<any> & {
    className?: string | undefined;
}>, styled_components.DefaultTheme, {
    disabledDates?: Date[] | undefined;
    fluid?: boolean | undefined;
    initialRange?: DateRange | undefined;
    maxDate?: Date | undefined;
    minDate?: Date | undefined;
    onChange: (range: DateRange) => void;
} & CSSProp<any>, never>;

type Legendable = {
    color?: string;
    label: string;
};
type Props$1 = {
    legendables: Array<Legendable>;
    defaultColor: string;
};
declare const Legend: {
    ({ legendables, defaultColor }: Props$1): react_jsx_runtime.JSX.Element;
    COMPONENT_NAME: string;
};

type MonthPickerProps = {
    month: number;
    onMonthSelected: (n: number) => void;
};
declare const MonthPicker: ({ month, onMonthSelected }: MonthPickerProps) => react_jsx_runtime.JSX.Element;

type MonthYearPickerChange = {
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
declare const MonthYearPicker: FC<MonthYearPickerProps>;

type Props = {
    year: number;
    minYear: number;
    maxYear: number;
    onYearSelected: (year: string) => void;
};
declare const YearPicker: ({ year, minYear, maxYear, onYearSelected, }: Props) => react_jsx_runtime.JSX.Element;

export { DateRange, LabeledRangeList, Legend, Legendable, MonthPicker, MonthPickerProps, MonthYearPicker, MonthYearPickerChange, TinyCalendar, TinyCalendarProps, TinyDateRangePicker, TinyDateRangePickerProps, YearPicker };
