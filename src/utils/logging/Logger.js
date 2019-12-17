// @flow

import type { LoggerI } from "utils/logging/Logger.type"

const writeInfo    = (moduleName, ...args) => {
    console.log(
        `%c${moduleName}`,
        "background: #499cc8; color: white; padding: 2px 6px;",
        ...args,
    )
}
const writeError   = (moduleName, ...args) => {
    console.error(
        `%c${moduleName}`,
        "background: #c14a4f; color: white; padding: 2px 6px;",
        ...args,
    )
}
const writeWarning = (moduleName, ...args) => {
    console.warn(
        `%c${moduleName}`,
        "background: #e0a270; color: black; padding: 2px 6px;",
        ...args,
    )
}

export class Logger implements LoggerI {
    moduleName :string

    constructor(moduleName :string) {
        this.moduleName = moduleName
    }

    writeInfo    = (...args) => { writeInfo(this.moduleName, ...args) }
    writeError   = (...args) => { writeError(this.moduleName, ...args) }
    writeWarning = (...args) => { writeWarning(this.moduleName, ...args) }
}

export const loggerStub :LoggerI = (() => {
    const stub = new Logger("Stub")
    const log  = (method) => (...args) => {
        stub.writeWarning("Invalid use of Stub Logger")
        stub[method](...args)
    }

    return {
        writeInfo   : log("writeInfo"),
        writeError  : log("writeError"),
        writeWarning: log("writeWarning"),
    }
})()
