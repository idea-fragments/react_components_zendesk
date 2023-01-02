/// <reference types="react" />
import { FilterState, ItemFilterOptions } from "components/tables/Table";
import { ValueOf } from "utils/types";
declare type Props = ItemFilterOptions & {
    onChange: (fieldName: string, value: any) => void;
    value: ValueOf<FilterState>;
};
export declare const TableFilter: ({ fieldName, label, onChange, options, type, value, }: Props) => JSX.Element;
export {};
//# sourceMappingURL=TableFilter.d.ts.map