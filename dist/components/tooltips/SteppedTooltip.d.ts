import { TooltipProps } from "components/tooltips/Tooltip";
import { FC, ReactElement, ReactNode } from "react";
export type SteppedTooltipStep = {
    label?: string;
    isAction?: boolean;
    title: ReactNode;
    body: ReactNode;
    actionHint?: ReactNode;
};
export type SteppedTooltipProps = {
    children: ReactElement;
    step?: SteppedTooltipStep | null;
    placement?: TooltipProps["placement"];
    width?: number;
    dotCount?: number;
    activeDotIndex?: number;
    onBack?: () => void;
    onNext?: () => void;
    isFinish?: boolean;
    onExit?: () => void;
    offset?: number;
    arrow?: boolean;
    detached?: boolean;
};
export declare const SteppedTooltip: FC<SteppedTooltipProps>;
//# sourceMappingURL=SteppedTooltip.d.ts.map