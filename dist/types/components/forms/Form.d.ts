import { FC, PropsWithChildren } from "react";
import { ContainerProps } from "styles/types";
import { PromiseFunc } from "utils/function.types";
declare type Props = PropsWithChildren<{
    onSubmit: PromiseFunc;
}> & ContainerProps;
export declare let Form: FC<Props>;
export {};
//# sourceMappingURL=Form.d.ts.map