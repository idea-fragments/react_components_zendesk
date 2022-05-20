import { IconProps } from "components/Icon";
import { TooltipProps } from "components/tooltips/Tooltip";
import type { FC } from "react";
declare type Props = Omit<TooltipProps, "trigger"> & {
    icon: string;
    iconProps?: IconProps;
};
export declare let IconTooltip: FC<Props>;
export {};
//# sourceMappingURL=IconTooltip.d.ts.map