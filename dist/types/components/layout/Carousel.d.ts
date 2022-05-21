import { ReactNode } from "react";
declare type Props = {
    children: ReactNode;
    className?: string;
    disableNextButton?: boolean;
    disablePreviousButton?: boolean;
    inline?: boolean;
    onNextClick: () => void;
    onPreviousClick: () => void;
};
export declare let Carousel: ({ children, className, disableNextButton, disablePreviousButton, inline, onNextClick, onPreviousClick, }: Props) => JSX.Element;
export {};
//# sourceMappingURL=Carousel.d.ts.map