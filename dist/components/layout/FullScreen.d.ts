import { FC, PropsWithChildren } from "react";
export type FullScreenProps = PropsWithChildren<{
    className?: string;
    fluidContent?: boolean;
    onCloseClicked: () => void;
    visible?: boolean;
}>;
export declare let FullScreen: import("styled-components").StyledComponent<FC<FullScreenProps>, import("styled-components").DefaultTheme, {}, never>;
//# sourceMappingURL=FullScreen.d.ts.map