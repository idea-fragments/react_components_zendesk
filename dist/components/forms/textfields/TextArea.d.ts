import { FormFieldProps } from "components/forms/formField.types";
import { ChangeEvent, FC } from "react";
export type TextAreaProps = FormFieldProps & {
    autoExpand?: boolean;
    characterLimit?: number;
    resizable?: boolean;
    value?: string;
    onChange: (text: string, e: ChangeEvent<HTMLTextAreaElement>) => void;
};
export declare const TextArea: FC<TextAreaProps>;
//# sourceMappingURL=TextArea.d.ts.map