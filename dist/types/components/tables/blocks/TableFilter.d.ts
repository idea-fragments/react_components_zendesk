/// <reference types="react" />
import { FilterState, ItemFilterOptions } from "components/tables/Table";
import { ValueOf } from "utils/types";
declare type Props = ItemFilterOptions & {
    onChange: (name: string, value: any) => void;
    value: ValueOf<FilterState>;
};
export declare const TableFilter: ({ name, onChange, options, type, value, }: Props) => JSX.Element;
export {};
//# sourceMappingURL=TableFilter.d.ts.map