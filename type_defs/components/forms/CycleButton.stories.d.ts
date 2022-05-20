/// <reference types="react" />
declare const _default: {
    title: string;
    component: ({ options, selectedOption, onCycleChanged, ...buttonProps }: Omit<import("./Button").Props, "onClick"> & {
        options: {
            label: string;
            value: string;
        }[];
        selectedOption: string;
        onCycleChanged: (value: string) => void;
    }) => JSX.Element;
    argTypes: {};
};
export default _default;
export declare const Default: () => JSX.Element;
//# sourceMappingURL=CycleButton.stories.d.ts.map