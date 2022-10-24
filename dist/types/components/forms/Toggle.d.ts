import { FC, ReactNode } from "react";
declare type Props = {
    checked?: boolean;
    disabled?: boolean;
    label?: string;
    hint?: ReactNode;
    onChange: (checked: boolean) => void;
};
export declare type ToggleProps = Props;
export declare let Toggle: FC<Props>;
export {};
//# sourceMappingURL=Toggle.d.ts.map