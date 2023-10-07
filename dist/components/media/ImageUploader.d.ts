import { ButtonProps } from "components/forms/Button";
import { FC, ReactNode } from "react";
type RenderPropParams = {
    clearImageData: () => void;
    openImageSelector: () => void;
};
export type ImageUploaderProps = {
    buttonProps?: ButtonProps;
    children?: (p: RenderPropParams) => ReactNode;
    imageData?: ImageData;
    onChange: (image?: ImageData) => void;
};
export type ImageData = {
    dataURL?: string;
    file?: File;
};
export declare const ImageUploader: FC<ImageUploaderProps>;
export {};
//# sourceMappingURL=ImageUploader.d.ts.map