import { ToggleProps } from "components/forms/Toggle";
export type TaggedToggleProps = ToggleProps & {
    active?: boolean;
    activeText?: string;
    inactiveText?: string;
    toggleColor?: string;
};
export declare const TaggedToggle: ({ active, checked, color, activeText, label, inactiveText, onChange, success, toggleColor, ...props }: TaggedToggleProps) => import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=TaggedToggle.d.ts.map