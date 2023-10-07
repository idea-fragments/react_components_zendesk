import { Moment } from "moment";
import { PromiseFunc } from "utils/function.types";
export declare const formatMonthDate: (m: Moment) => string;
export declare const formatDayDate: (m: Moment) => string;
export declare const formatMonthDateYear: (m: Moment) => string;
export declare const setDefaultLocale: (locale: string) => void;
type FormatOptions = {
    locale?: string;
    iso8601Format?: boolean;
    timeZone?: string;
};
export declare const formatDate: (d: Date, { locale, iso8601Format, ...options }?: FormatOptions) => string;
export declare const formatDateTime: (d: Date, { locale, ...options }?: FormatOptions) => string;
export declare const returnAfterMinimum: (millisecs: number, f: PromiseFunc, ...fArgs: any) => Promise<any>;
export declare const momentListToDateList: (l: Moment[]) => Date[];
export declare const minDateBetween: (a: Moment, b: Moment) => Moment;
export declare const maxDateBetween: (a: Moment, b: Moment) => Moment;
export declare const addNDaysFromDate: (n: number, d?: Date) => Date;
export declare const addNWeeksFromDate: (n: number, d?: Date) => Date;
export declare const subtractNDaysFromDate: (n: number, d?: Date) => Date;
export declare const subtractNWeeksFromDate: (n: number, d?: Date) => Date;
export {};
//# sourceMappingURL=dateTimeHelpers.d.ts.map