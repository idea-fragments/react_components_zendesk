import { ButtonProps } from "components/forms/Button";
import { Nullable } from "global";
import { FC, ReactNode } from "react";
type RenderPropParams = {
    clearVideoData: () => void;
    openVideoSelector: () => void;
};
export type VideoUploaderProps = {
    buttonProps?: ButtonProps;
    children?: (p: RenderPropParams) => ReactNode;
    onChange: (vd: Nullable<VideoData>) => void;
    shouldCrop?: boolean;
    videoData?: VideoData;
};
type CropArea = {
    width: number;
    height: number;
    x: number;
    y: number;
};
export type VideoData = {
    cropAreaPercentage?: CropArea;
    cropAreaPx?: CropArea;
    cropScale?: number;
    dataURL?: string;
    file?: File;
};
export declare const VideoUploader: FC<VideoUploaderProps>;
export {};
//# sourceMappingURL=VideoUploader.d.ts.map