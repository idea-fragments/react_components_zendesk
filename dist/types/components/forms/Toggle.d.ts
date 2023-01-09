import { FC, ReactNode } from "react";
declare type Props = {
    checked?: boolean;
    color?: string;
    disabled?: boolean;
    hint?: ReactNode;
    label?: string;
    onChange: (checked: boolean) => void;
    success?: boolean;
};
export declare type ToggleProps = Props;
export declare let Toggle: FC<Props>;
export {};
//# sourceMappingURL=Toggle.d.ts.map