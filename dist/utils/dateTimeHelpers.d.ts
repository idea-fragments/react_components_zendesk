import { Moment } from "moment";
import { PromiseFunc } from "utils/function.types";
type FormatOptions = {
    locale?: string;
    iso8601Format?: boolean;
    numberFormat?: boolean;
    timeZone?: string;
} & Intl.DateTimeFormatOptions;
export declare const formatDate: (d: Date, { locale, iso8601Format, numberFormat, ...options }?: FormatOptions) => string;
export declare const formatDateTime: (d: Date, options?: FormatOptions) => string;
export declare const formatMonthDateYear: (d: Date | string) => string;
export declare const returnAfterMinimum: (millisecs: number, f: PromiseFunc, ...fArgs: any) => Promise<any>;
export declare const momentListToDateList: (l: Moment[]) => Date[];
export declare const minDateBetween: (a: Moment, b: Moment) => Moment;
export declare const maxDateBetween: (a: Date, b: Date) => Date;
export declare const addNDaysFromDate: (n: number, d?: Date) => Date;
export declare const addNWeeksFromDate: (n: number, d?: Date) => Date;
export declare const subtractNDaysFromDate: (n: number, d?: Date) => Date;
export declare const subtractNWeeksFromDate: (n: number, d?: Date) => Date;
export {};
//# sourceMappingURL=dateTimeHelpers.d.ts.map