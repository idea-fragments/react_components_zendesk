import { FlexBoxProps } from "components/layout/FlexBox";
import { FC, PropsWithChildren } from "react";
import { ContainerProps } from "styles/types";
import { PromiseFunc } from "utils/function.types";
export type FormProps = PropsWithChildren<{
    onSubmit: PromiseFunc;
}> & ContainerProps & FlexBoxProps;
export declare let Form: FC<FormProps>;
//# sourceMappingURL=Form.d.ts.map