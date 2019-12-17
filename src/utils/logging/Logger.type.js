// @flow

export interface LoggerI {
    writeInfo :(...args :any) => void,
    writeError :(...args :any) => void,
    writeWarning :(...args :any) => void
}

export type LoggableFunc = (logger :LoggerI) => any
