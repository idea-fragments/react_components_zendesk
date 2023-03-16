import { ButtonProps } from "components/forms/Button";
import { FC, ReactNode } from "react";
declare type RenderPropParams = {
    clearImageData: () => void;
    openImageSelector: () => void;
};
export declare type ImageUploaderProps = {
    buttonProps?: ButtonProps;
    children?: (p: RenderPropParams) => ReactNode;
    imageData?: ImageData;
    onChange: (image?: ImageData) => void;
};
export declare type ImageData = {
    dataURL?: string;
    file?: File;
};
export declare const ImageUploader: FC<ImageUploaderProps>;
export {};
//# sourceMappingURL=ImageUploader.d.ts.map