import { FC, PropsWithChildren, ComponentType } from "react";
import { CSSProp } from "styles/types";
type LoadingFunc = <T>(p: Promise<T>) => Promise<T>;
type LoaderProps = PropsWithChildren<{
    as?: ComponentType;
}> & CSSProp;
type Return = {
    isLoading: boolean;
    Loader: FC<LoaderProps>;
    withLoading: LoadingFunc;
};
export declare const useLoaderV2: () => Return;
export {};
//# sourceMappingURL=useLoaderV2.d.ts.map