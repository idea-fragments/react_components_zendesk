export const MONTH_MAP = {
  JANUARY: 0,
  FEBRUARY: 1,
  MARCH: 2,
  APRIL: 3,
  MAY: 4,
  JUNE: 5,
  JULY: 6,
  AUGUST: 7,
  SEPTEMBER: 8,
  OCTOBER: 9,
  NOVEMBER: 10,
  DECEMBER: 11,
} as const

export type Month = keyof typeof MONTH_MAP

export const getNextMonth = (currMon: number): number =>
  currMon === MONTH_MAP.DECEMBER ? MONTH_MAP.JANUARY : currMon + 1
export const getPrevMonth = (currMon: number): number =>
  currMon === MONTH_MAP.JANUARY ? MONTH_MAP.DECEMBER : currMon - 1
