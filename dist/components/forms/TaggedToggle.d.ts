import { ToggleProps } from "components/forms/Toggle";
import { FullSpectrumColors } from "styles/theme/Theme.type";
export type TaggedToggleProps = Omit<ToggleProps, "color"> & {
    active?: boolean;
    activeText?: string;
    color?: FullSpectrumColors;
    inactiveText?: string;
    toggleColor?: string;
};
export declare const TaggedToggle: ({ active, checked, color, activeText, label, inactiveText, onChange, success, toggleColor, ...props }: TaggedToggleProps) => import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=TaggedToggle.d.ts.map