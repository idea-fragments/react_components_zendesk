import { ElementType, FC, ReactNode } from "react";
import { ContainerProps } from "styles/types";
declare type Props = {
    actions: Array<ReactNode>;
    fixed?: boolean;
    logo?: ElementType;
    onBackClicked?: () => void;
    onLogoClicked: () => void;
    showBackButton?: boolean;
    title: ElementType;
} & ContainerProps;
export declare let AppBar: FC<Props>;
export {};
//# sourceMappingURL=AppBar.d.ts.map
