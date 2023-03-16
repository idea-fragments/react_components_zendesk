import { ButtonProps } from "components/forms/Button";
import { Nullable } from "global";
import { FC, ReactNode } from "react";
declare type RenderPropParams = {
    clearVideoData: () => void;
    openVideoSelector: () => void;
};
export declare type VideoUploaderProps = {
    buttonProps?: ButtonProps;
    children?: (p: RenderPropParams) => ReactNode;
    onChange: (vd: Nullable<VideoData>) => void;
    videoData?: VideoData;
};
declare type CropArea = {
    width: number;
    height: number;
    x: number;
    y: number;
};
export declare type VideoData = {
    cropAreaPercentage?: CropArea;
    cropAreaPx?: CropArea;
    cropScale?: number;
    dataURL?: string;
    file?: File;
};
export declare const VideoUploader: FC<VideoUploaderProps>;
export {};
//# sourceMappingURL=VideoUploader.d.ts.map