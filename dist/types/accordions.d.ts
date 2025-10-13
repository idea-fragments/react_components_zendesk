import { ReactNode, FC } from 'react';

type TimeLineItem = {
    content: ReactNode;
    dateTime?: string;
    icon?: ReactNode;
    key: string | number;
};
type TimelineProps = {
    isAlternate?: boolean;
    data: TimeLineItem[];
};
declare const Timeline: FC<TimelineProps>;

export { TimeLineItem, Timeline, TimelineProps };
