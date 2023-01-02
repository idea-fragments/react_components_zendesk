import { ReactNode } from "react";
import { CSSProp } from "styles/types";
declare type Props = {
    children: ReactNode;
    className?: string;
    disableNextButton?: boolean;
    disablePreviousButton?: boolean;
    inline?: boolean;
    onEndClick?: () => void;
    onNextClick: () => void;
    onPreviousClick: () => void;
    onStartClick?: () => void;
} & CSSProp;
export declare let Carousel: ({ children, className, disableNextButton, disablePreviousButton, inline, onEndClick, onNextClick, onPreviousClick, onStartClick, }: Props) => JSX.Element;
export {};
//# sourceMappingURL=Carousel.d.ts.map