import { FC, ReactNode } from "react";
import { ValueOf } from "utils/types";
export declare const INFO_PANEL_TYPES: {
    readonly INFO: 0;
    readonly SUCCESS: 1;
    readonly WARNING: 2;
    readonly DANGER: 3;
};
declare type InfoPanelType = ValueOf<typeof INFO_PANEL_TYPES>;
declare type Props = {
    children: ReactNode;
    className?: string;
    iconVerticalAlignment?: "center";
    type: InfoPanelType;
};
export declare let InfoPanel: FC<Props>;
export {};
//# sourceMappingURL=InfoPanel.d.ts.map