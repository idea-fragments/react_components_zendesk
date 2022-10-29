import { FC, ReactNode } from "react";
export declare type PhotoData = {
    file: File;
    dataUri: string;
};
export declare type PhotoBoothProps = {
    onHideCamera?: () => void;
    onSubmit: (data: PhotoData) => Promise<void>;
    open?: boolean;
    trigger?: (onClick: () => void) => ReactNode;
};
export declare const PhotoBooth: FC<PhotoBoothProps>;
//# sourceMappingURL=PhotoBooth.d.ts.map