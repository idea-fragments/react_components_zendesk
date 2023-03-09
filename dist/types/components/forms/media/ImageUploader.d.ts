import { ButtonProps } from "components/forms/Button";
import { FC } from "react";
export declare type ImageUploaderProps = {
    buttonProps?: ButtonProps;
    imageData?: ImageData;
    onChange: (image?: ImageData) => void;
};
export declare type ImageData = {
    dataURL?: string;
    file?: File;
};
export declare const ImageUploader: FC<ImageUploaderProps>;
//# sourceMappingURL=ImageUploader.d.ts.map