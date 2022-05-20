import type { StyledComponentProps } from "components/StyledComponentProps.type";
import { FC } from "react";
import type { PromiseFunc } from "utils/function.types";
declare type AsyncLoadFunc = <T>(f: PromiseFunc<any, T>) => Promise<T>;
export declare type RenderProp = {
    withLoading: AsyncLoadFunc;
};
declare type Props = {
    children: (p: RenderProp) => JSX.Element;
} & StyledComponentProps;
export declare let AsyncLoadable: FC<Props>;
export {};
//# sourceMappingURL=AsyncLoadable.d.ts.map