import { ColumnConfig, SortState } from "components/tables/Table";
import { FC } from "react";
export declare type SorterProps = {
    columnConfigs: ColumnConfig[];
    onColumnSort?: (state: SortState) => void;
    sortState?: SortState;
};
export declare const Sorter: FC<SorterProps>;
//# sourceMappingURL=Sorter.d.ts.map