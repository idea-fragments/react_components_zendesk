import { ImageData } from "components/media/ImageUploader";
import { FC } from "react";
export declare type ImageCropperProps = {
    aspectRatio?: number;
    imageData: ImageData;
    imageQuality?: number;
    onComplete: (image: ImageData) => void;
};
export declare const ImageCropper: FC<ImageCropperProps>;
//# sourceMappingURL=ImageCropper.d.ts.map