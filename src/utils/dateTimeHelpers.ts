import moment, { Moment } from "moment"
import { PromiseFunc } from "utils/function.types"

let defaultLocale = new Intl.DateTimeFormat().resolvedOptions().locale

export const formatMonthDate = (m: Moment): string => m.format("MMM D")
export const formatDayDate = (m: Moment): string => m.format("ddd, ll")
export const formatMonthDateYear = (m: Moment): string =>
  m.format("MMM DD YYYY")
export const setDefaultLocale = (locale: string) => {
  defaultLocale = locale
}

type FormatOptions = {
  locale?: string
  iso8601Format?: boolean
  timeZone?: string
}
export const formatDate = (
  d: Date,
  {
    locale = defaultLocale,
    iso8601Format = false,
    ...options
  }: FormatOptions = {},
): string => {
  const formatter = new Intl.DateTimeFormat(locale, options)

  try {
    if (iso8601Format) {
      const parts = formatter.formatToParts(d)
      return ["year", "month", "day"]
        .map((part: string) => {
          return parts?.find((p) => p.type === part)?.value
        })
        .join("-")
    }
  } catch (e) {}

  const formatted = formatter.format(d)
  return locale.includes("en") ? formatted.replace(/\//g, "-") : formatted
}

export const formatDateTime = (
  d: Date,
  { locale = defaultLocale, ...options }: FormatOptions = {},
): string => {
  const formattedDate = formatDate(d, {
    locale,
    iso8601Format: true,
    ...options,
  })

  return `${formattedDate} ${moment(d).format("LTS")}`
}

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
export const maxDateBetween = (a: Moment, b: Moment): Moment =>
  a.isAfter(b) ? a : b

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
