import { FC, PropsWithChildren, ComponentType } from "react";
import { CSSProp } from "styled-components";
type LoadingFunc<T> = (p: Promise<T>) => Promise<T>;
type LoaderProps = PropsWithChildren<{
    as?: ComponentType;
    _css?: CSSProp;
}>;
type Return<T> = {
    isLoading: boolean;
    Loader: FC<LoaderProps>;
    withLoading: LoadingFunc<T>;
};
export declare const useLoaderV2: <T>() => Return<T>;
export {};
//# sourceMappingURL=useLoaderV2.d.ts.map