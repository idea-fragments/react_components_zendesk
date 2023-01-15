import { TableProps } from "components/tables/Table";
import { FC } from "react";
export declare type FiltersProps = {
    fluidButton?: boolean;
} & Required<Pick<TableProps, "columnConfigs" | "filterState" | "onFiltersChange">>;
export declare const Filters: FC<FiltersProps>;
//# sourceMappingURL=Filters.d.ts.map