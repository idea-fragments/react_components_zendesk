import { ToggleProps } from "components/forms/Toggle";
import React from "react";
declare const _default: {
    title: string;
    component: React.FC<{
        checked?: boolean | undefined;
        color?: string | undefined;
        disabled?: boolean | undefined;
        hint?: React.ReactNode;
        label?: string | undefined;
        onChange: (checked: boolean) => void;
        success?: boolean | undefined;
    }>;
    argTypes: {};
};
export default _default;
export declare const Default: (args: Partial<ToggleProps>) => JSX.Element;
export declare const Disabled: (args: Partial<ToggleProps>) => JSX.Element;
export declare const Labeled: (args: Partial<ToggleProps>) => JSX.Element;
//# sourceMappingURL=Toggle.stories.d.ts.map