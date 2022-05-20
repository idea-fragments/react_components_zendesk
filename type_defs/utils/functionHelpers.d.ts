import { PromiseFunc } from "utils/function.types";
declare type MaybePromiseFunc = PromiseFunc | ((...o: any) => any);
export declare const DO_NOTHING: (...args: any) => void;
export declare const flowInOrderAsync: (...funcs: MaybePromiseFunc[]) => PromiseFunc;
export declare const parseNumberAndCall: (action: (n: number) => void) => (s: string) => void;
export {};
//# sourceMappingURL=functionHelpers.d.ts.map