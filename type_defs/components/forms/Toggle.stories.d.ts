import { ToggleProps } from "components/forms/Toggle";
import React from "react";
declare const _default: {
    title: string;
    component: React.FC<{
        checked?: boolean | undefined;
        disabled?: boolean | undefined;
        label?: string | undefined;
        hint?: React.ReactNode;
        onChange: (checked: boolean) => void;
    }>;
    argTypes: {};
};
export default _default;
export declare const Default: (args: Partial<ToggleProps>) => JSX.Element;
export declare const Disabled: (args: Partial<ToggleProps>) => JSX.Element;
export declare const Labeled: (args: Partial<ToggleProps>) => JSX.Element;
//# sourceMappingURL=Toggle.stories.d.ts.map