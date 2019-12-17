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
