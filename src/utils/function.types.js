// @flow

export type PromiseFunc<Arg = any, Rtn = void> = (Arg) => Promise<Rtn>
