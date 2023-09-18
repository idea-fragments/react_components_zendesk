import { ReactNode } from "react";
export type TimeLineItem = {
    content: string;
    dateTime?: string;
    icon?: ReactNode;
};
export type TimnelineProps = {
    isAlternate?: boolean;
    data: TimeLineItem[];
};
export declare const Timeline: React.FC<TimnelineProps>;
//# sourceMappingURL=Timeline.d.ts.map