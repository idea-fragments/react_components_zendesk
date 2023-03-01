import { TableProps } from "components/tables/Table";
import { FC } from "react";
export declare type TableFiltersProps = {
    fluidButton?: boolean;
} & Required<Pick<TableProps, "columnConfigs" | "filterState" | "onFiltersChange">>;
export declare const TableFilters: FC<TableFiltersProps>;
//# sourceMappingURL=TableFilters.d.ts.map