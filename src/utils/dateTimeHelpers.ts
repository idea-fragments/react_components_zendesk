import moment, { Moment } from "moment"
import { PromiseFunc } from "utils/function.types"

const DEFAULT_LOCALE = new Intl.DateTimeFormat().resolvedOptions().locale
const NUMBER_FORMAT_OPTIONS: Partial<Intl.DateTimeFormatOptions> = {
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
} // 12-04-2022
const TIME_FORMAT_OPTIONS: Partial<Intl.DateTimeFormatOptions> = {
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
} // 2:00:00 pm
const WORD_FORMAT_OPTIONS: Partial<Intl.DateTimeFormatOptions> = {
  year: "numeric",
  month: "short",
  day: "numeric",
} // Dec 24, 2022

type FormatOptions = {
  locale?: string
  iso8601Format?: boolean
  numberFormat?: boolean
  timeZone?: string
} & Intl.DateTimeFormatOptions

export const formatDate = (
  d: Date,
  {
    locale = DEFAULT_LOCALE,
    iso8601Format = false,
    numberFormat = false,
    ...options
  }: FormatOptions = {},
): string => {
  options = numberFormat
    ? { ...NUMBER_FORMAT_OPTIONS, ...options }
    : { ...WORD_FORMAT_OPTIONS, ...options }

  try {
    if (iso8601Format) return d.toISOString()
  } catch (e) {}

  const formatter = new Intl.DateTimeFormat(locale, options)
  const formatted = formatter.format(d)
  return locale.includes("en") ? formatted.replace(/\//g, "-") : formatted
}

export const formatDateTime = (
  d: Date,
  options: FormatOptions = {},
): string => {
  return formatDate(d, { ...TIME_FORMAT_OPTIONS, ...options })
}

export const formatMonthDateYear = (d: Date | string): string =>
  moment(d).format("MMM DD YYYY")

export const returnAfterMinimum = async (
  millisecs: number,
  f: PromiseFunc,
  ...fArgs: any
) => {
  const start: Moment = moment()
  const val = await f(...fArgs)
  const end: Moment = moment()
  const diff = end.diff(start, "milliseconds")

  if (diff < millisecs) {
    await new Promise((resolve) => {
      setTimeout(resolve, millisecs - diff)
    })
  }

  return val
}

export const momentListToDateList = (l: Moment[]): Date[] =>
  l.map((m: Moment) => m.toDate())

export const minDateBetween = (a: Moment, b: Moment): Moment =>
  a.isBefore(b) ? a : b
export const maxDateBetween = (a: Date, b: Date): Date => (a > b ? a : b)

export const addNDaysFromDate = (n: number, d = new Date()): Date =>
  momentArithmetic(d, "add", n, "days")
export const addNWeeksFromDate = (n: number, d = new Date()): Date =>
  momentArithmetic(d, "add", n, "weeks")
export const subtractNDaysFromDate = (n: number, d = new Date()): Date =>
  momentArithmetic(d, "subtract", n, "days")
export const subtractNWeeksFromDate = (n: number, d = new Date()): Date =>
  momentArithmetic(d, "subtract", n, "weeks")

const momentArithmetic = (
  d: Date,
  func: string,
  n: number,
  unit: string,
): Date => {
  // @ts-ignore
  const newDate = (moment(d)[func] as Function)(n, unit) as Moment
  return newDate.toDate()
}
