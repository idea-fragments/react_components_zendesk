import { FC, ReactNode } from "react";
export type PhotoData = {
    file: File;
    dataUri: string;
};
export type PhotoBoothProps = {
    onHideCamera?: () => void;
    onSilentError?: (error: Error) => void;
    onSubmit: (data: PhotoData) => Promise<void>;
    open?: boolean;
    trigger?: (onClick: () => void) => ReactNode;
};
export declare const PhotoBooth: FC<PhotoBoothProps>;
//# sourceMappingURL=PhotoBooth.d.ts.map