import { TextFieldProps } from "components/forms/formField.types";
import React, { ChangeEvent } from "react";
declare type NewOnChangeFunc = (value: string, event: ChangeEvent<HTMLInputElement>) => void;
declare type OriginalProps = TextFieldProps & {
    useNewOnChange?: false;
};
declare type PropsWithNewOnChange = Omit<TextFieldProps, "onChange"> & {
    onChange: NewOnChangeFunc;
    useNewOnChange: true;
};
declare type Props = PropsWithNewOnChange | OriginalProps;
export declare let TextField: React.ForwardRefExoticComponent<Props & React.RefAttributes<unknown>>;
export {};
//# sourceMappingURL=TextField.d.ts.map