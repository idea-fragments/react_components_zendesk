import { ColumnConfig, FilterState } from "components/tables/Table";
import { FC } from "react";
type Props = {
    columnConfigs: ColumnConfig[];
    filterState: FilterState;
    onFiltersChange: (fs: FilterState) => void;
};
export declare const TableFiltersDropdown: FC<Props>;
export {};
//# sourceMappingURL=TableFiltersDropdown.d.ts.map