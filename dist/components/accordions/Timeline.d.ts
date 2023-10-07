import { ReactNode, FC } from "react";
export type TimeLineItem = {
    content: string;
    dateTime?: string;
    icon?: ReactNode;
};
export type TimelineProps = {
    isAlternate?: boolean;
    data: TimeLineItem[];
};
export declare const Timeline: FC<TimelineProps>;
//# sourceMappingURL=Timeline.d.ts.map