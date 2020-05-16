// @flow

import moment, { Moment } from "moment"

export const returnAfterMinimum = async (millisecs :number, f :() => Promise<*>) => {
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
