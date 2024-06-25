import { ButtonProps } from "components/forms/Button";
import { FC } from "react";
type FileChangeHandler = {
    multiple?: false;
    onFileChange: (f: File) => void;
    onFilesChange?: (files: File[]) => void;
} | {
    multiple: true;
    onFileChange?: (f: File) => void;
    onFilesChange: (files: File[]) => void;
};
export type FileButtonProps = Omit<ButtonProps, "onClick"> & FileChangeHandler;
export declare const FileButton: FC<FileButtonProps>;
export {};
//# sourceMappingURL=FileButton.d.ts.map