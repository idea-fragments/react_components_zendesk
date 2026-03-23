import { FormFieldProps } from "components/forms/formField.types";
import { ChangeEvent, FC, TextareaHTMLAttributes } from "react";
export type TextAreaProps = FormFieldProps & {
    autoExpand?: boolean;
    characterLimit?: number;
    minRows?: number;
    resizable?: boolean;
    value?: string;
    onChange: (text: string, e: ChangeEvent<HTMLTextAreaElement>) => void;
} & Pick<TextareaHTMLAttributes<HTMLTextAreaElement>, "placeholder">;
export declare const TextArea: FC<TextAreaProps>;
//# sourceMappingURL=TextArea.d.ts.map