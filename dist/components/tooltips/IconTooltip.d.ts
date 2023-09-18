import { IconProps } from "components/Icon";
import { TooltipProps } from "components/tooltips/Tooltip";
import { FC, PropsWithChildren } from "react";
type Props = Omit<TooltipProps, "content"> & {
    icon: string;
    iconProps?: IconProps;
};
export declare let IconTooltip: FC<PropsWithChildren<Props>>;
export {};
//# sourceMappingURL=IconTooltip.d.ts.map