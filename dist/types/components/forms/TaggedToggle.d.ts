/// <reference types="react" />
import { ToggleProps } from "components/forms/Toggle";
export declare type TaggedToggleProps = ToggleProps & {
    active?: boolean;
    activeText?: string;
    inactiveText?: string;
    toggleColor?: string;
};
export declare const TaggedToggle: ({ active, checked, color, activeText, label, inactiveText, onChange, success, toggleColor, ...props }: TaggedToggleProps) => JSX.Element;
//# sourceMappingURL=TaggedToggle.d.ts.map