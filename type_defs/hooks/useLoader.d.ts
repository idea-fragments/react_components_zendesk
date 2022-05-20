import type { ComponentType } from "react";
import type { PromiseFunc } from "utils/function.types";
declare type LoadingFunc<T> = (f: PromiseFunc<any, T>) => PromiseFunc<any, T>;
declare type Return<T> = {
    withLoading: LoadingFunc<T>;
    Loader: ComponentType<any>;
};
export declare const useLoader: <T>() => Return<T>;
export {};
//# sourceMappingURL=useLoader.d.ts.map