import { FilterState, ItemFilterOptions } from "components/tables/Table";
import { ValueOf } from "utils/types";
type Props = ItemFilterOptions & {
    onChange: (fieldName: string, value: any) => void;
    value: ValueOf<FilterState>;
};
export declare const TableFilter: ({ fieldName, label, onChange, options, type, value, }: Props) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=TableFilter.d.ts.map