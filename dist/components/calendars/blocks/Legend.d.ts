export type Legendable = {
    color?: string;
    label: string;
};
type Props = {
    legendables: Array<Legendable>;
    defaultColor: string;
};
export declare const Legend: {
    ({ legendables, defaultColor }: Props): import("react/jsx-runtime").JSX.Element;
    COMPONENT_NAME: string;
};
export {};
//# sourceMappingURL=Legend.d.ts.map