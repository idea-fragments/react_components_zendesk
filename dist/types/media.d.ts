import * as styled_components from 'styled-components';
import { FlattenSimpleInterpolation } from 'styled-components';
import React, { PropsWithChildren, ComponentType, Ref, ReactNode, FC } from 'react';
import { ValueOf } from 'utils/types';
import { Nullable } from 'global';

declare const ALIGNMENTS: {
    readonly start: "flex-start";
    readonly center: "center";
    readonly end: "flex-end";
};
type Alignment = ValueOf<typeof ALIGNMENTS>;

type ColorProps = {
    accent?: boolean;
    color?: string;
    danger?: boolean;
    neutral?: boolean;
    primary?: boolean;
    secondary?: boolean;
    success?: boolean;
    warning?: boolean;
};
type ContainerProps = {
    _css?: CSS;
    color?: string;
    compact?: boolean;
    fluid?: boolean;
    className?: any;
};
type CSS<T = any> = FlattenSimpleInterpolation | string | T;
type CSSProp<T = any> = {
    _css?: CSS<T>;
    className?: string;
};

type PromiseFunc<T = any, Rtn = any> = (...o: T[]) => Promise<Rtn>;

declare const BUTTON_SIZES: {
    readonly SMALL: "small";
    readonly LARGE: "large";
};
type ButtonSize = (typeof BUTTON_SIZES)[keyof typeof BUTTON_SIZES];
type AutoLoadable = {
    autoLoadable: true;
    onClick: PromiseFunc;
};
type ButtonBaseProps = PropsWithChildren<{
    alignItems?: string;
    alignSelf?: Alignment;
    autoLoadable?: boolean;
    disabled?: boolean;
    flat?: boolean;
    groupKey?: string;
    icon?: string | ComponentType;
    iconPosition?: "left" | "right";
    iconSize?: string;
    inline?: boolean;
    innerAs?: string;
    innerRef?: Ref<HTMLButtonElement>;
    loading?: boolean;
    pill?: boolean;
    primary?: boolean;
    size?: ButtonSize;
    wrapInlineText?: boolean;
    onClick: () => void;
}> & CSSProp & ColorProps & ContainerProps;
type ControlledLoadable = {
    loading?: boolean;
    onClick: () => void;
};
type ButtonProps = (ButtonBaseProps & ControlledLoadable) | (ButtonBaseProps & AutoLoadable);

type RenderPropParams$1 = {
    clearVideoData: () => void;
    openVideoSelector: () => void;
};
type VideoUploaderProps = {
    buttonProps?: ButtonProps;
    children?: (p: RenderPropParams$1) => ReactNode;
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
type VideoData = {
    cropAreaPercentage?: CropArea;
    cropAreaPx?: CropArea;
    cropScale?: number;
    dataURL?: string;
    file?: File;
};
declare const VideoUploader: FC<VideoUploaderProps>;

type CroppedVideoPlayerProps = {
    onLoad?: () => void;
    videoData: VideoData;
};
declare const CroppedVideoPlayer: styled_components.StyledComponent<React.FC<CroppedVideoPlayerProps>, styled_components.DefaultTheme, CSSProp<any>, never>;

type RenderPropParams = {
    clearImageData: () => void;
    openImageSelector: () => void;
};
type ImageUploaderProps = {
    buttonProps?: ButtonProps;
    children?: (p: RenderPropParams) => ReactNode;
    imageData?: ImageData;
    onChange: (image?: ImageData) => void;
};
type ImageData = {
    dataURL?: string;
    file?: File;
};
declare const ImageUploader: FC<ImageUploaderProps>;

type PhotoData = {
    file: File;
    dataUri: string;
};
type PhotoBoothProps = {
    onHideCamera?: () => void;
    onSilentError?: (error: Error) => void;
    onSubmit: (data: PhotoData) => Promise<void>;
    open?: boolean;
    trigger?: (onClick: () => void) => ReactNode;
};
declare const PhotoBooth: FC<PhotoBoothProps>;

type VideoPlayerProps = {
    height?: string;
    videoData: VideoData;
    width?: string;
};
declare const VideoPlayer: FC<VideoPlayerProps>;

export { CroppedVideoPlayer, CroppedVideoPlayerProps, ImageData, ImageUploader, ImageUploaderProps, PhotoBooth, PhotoBoothProps, PhotoData, VideoData, VideoPlayer, VideoPlayerProps, VideoUploader, VideoUploaderProps };
