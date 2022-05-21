import { TextFieldProps } from "components/forms/formField.types";
import { ChangeEvent, FC } from "react";
declare type NewOnChangeFunc = (value: string, event: ChangeEvent<HTMLInputElement>) => void;
declare type OriginalProps = TextFieldProps & {
    useNewOnChange?: false;
};
declare type PropsWithNewOnChange = Omit<TextFieldProps, "onChange"> & {
    onChange: NewOnChangeFunc;
    useNewOnChange: true;
};
declare type Props = PropsWithNewOnChange | OriginalProps;
export declare let TextField: FC<Props>;
export {};
//# sourceMappingURL=TextField.d.ts.map
