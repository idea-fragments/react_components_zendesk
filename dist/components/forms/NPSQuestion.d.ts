import { Nullable } from "global";
import { FC, ReactNode } from "react";
export type NPSScore = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
export type NPSQuestionProps = {
    label: ReactNode;
    onChange: (n: NPSScore) => void;
    value: Nullable<NPSScore>;
};
export declare const NPSQuestion: FC<NPSQuestionProps>;
//# sourceMappingURL=NPSQuestion.d.ts.map