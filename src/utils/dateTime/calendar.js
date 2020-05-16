// @flow

export const MONTH_MAP = Object.freeze({
    JANUARY  : 0,
    FEBRUARY : 1,
    MARCH    : 2,
    APRIL    : 3,
    MAY      : 4,
    JUNE     : 5,
    JULY     : 6,
    AUGUST   : 7,
    SEPTEMBER: 8,
    OCTOBER  : 9,
    NOVEMBER : 10,
    DECEMBER : 11,
})

export const getNextMonth = (currMon :Number) :Number => (
    currMon === MONTH_MAP.DECEMBER ? MONTH_MAP.JANUARY : currMon + 1
)
export const getPrevMonth = (currMon :Number) :Number => (
    currMon === MONTH_MAP.JANUARY ? MONTH_MAP.DECEMBER : currMon - 1
)
