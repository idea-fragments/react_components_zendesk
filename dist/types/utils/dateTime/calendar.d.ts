export declare const MONTH_MAP: {
    readonly JANUARY: 0;
    readonly FEBRUARY: 1;
    readonly MARCH: 2;
    readonly APRIL: 3;
    readonly MAY: 4;
    readonly JUNE: 5;
    readonly JULY: 6;
    readonly AUGUST: 7;
    readonly SEPTEMBER: 8;
    readonly OCTOBER: 9;
    readonly NOVEMBER: 10;
    readonly DECEMBER: 11;
};
export declare type Month = keyof typeof MONTH_MAP;
export declare const getNextMonth: (currMon: number) => number;
export declare const getPrevMonth: (currMon: number) => number;
//# sourceMappingURL=calendar.d.ts.map