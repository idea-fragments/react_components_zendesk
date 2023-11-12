import { ReactNode, FC } from "react";
export type TimeLineItem = {
    content: ReactNode;
    dateTime?: string;
    icon?: ReactNode;
    key: string | number;
};
export type TimelineProps = {
    isAlternate?: boolean;
    data: TimeLineItem[];
};
export declare const Timeline: FC<TimelineProps>;
//# sourceMappingURL=Timeline.d.ts.map