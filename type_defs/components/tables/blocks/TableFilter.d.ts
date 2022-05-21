/// <reference types="react" />
import { ItemFilterOptions } from "components/tables/Table";
declare type Props = ItemFilterOptions & {
    initialValue?: string;
    onChange: (name: string, value: any) => void;
};
export declare const TableFilter: ({ initialValue, name, options, type, onChange, }: Props) => JSX.Element;
export {};
//# sourceMappingURL=TableFilter.d.ts.map
