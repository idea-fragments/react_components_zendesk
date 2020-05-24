// @flow

import moment, { Moment } from "moment"

export const formatDate          = (m :Moment) :string => m.format("ll")
export const formatDateTime      = (m :Moment) :string => m.format("llll")
export const formatDayDate       = (m :Moment) :string => m.format("ddd, ll")
export const formatMonthDate     = (m :Moment) :string => m.format("MMM DD")
export const formatMonthDateYear = (m :Moment) :string => m.format("MMM DD YYYY")

export const returnAfterMinimum = async (
    millisecs :number,
    f :() => Promise<*>,
) => {
    const start :Moment = moment()
    const val           = await f()
    const end :Moment   = moment()
    const diff          = end.diff(start, "milliseconds")

    if (diff < millisecs) {
        await new Promise((resolve) => {
            setTimeout(resolve, millisecs - diff)
        })
    }

    return val
}

export const momentListToDateList = (l :Moment[]) :Date[] => (
    l.map((m :Moment) => m.toDate())
)

export const minDateBetween = (a :Moment, b :Moment) :Moment => (
    a.isBefore(b) ? a : b
)
export const maxDateBetween = (a :Moment, b :Moment) :Moment => (
    a.isAfter(b) ? a : b
)
