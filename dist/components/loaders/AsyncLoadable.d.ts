import { StyledComponentProps } from "components/StyledComponentProps.type";
import { FC } from "react";
import { PromiseFunc } from "utils/function.types";
type AsyncLoadFunc = <T>(f: PromiseFunc<any, T>) => Promise<T>;
export type RenderProp = {
    withLoading: AsyncLoadFunc;
};
type Props = {
    children: (p: RenderProp) => JSX.Element;
} & StyledComponentProps;
export declare let AsyncLoadable: FC<Props>;
export {};
//# sourceMappingURL=AsyncLoadable.d.ts.map