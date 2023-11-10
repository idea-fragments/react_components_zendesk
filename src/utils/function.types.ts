export type PromiseFunc<T = any, Rtn = any> = (...o: T[]) => Promise<Rtn>
