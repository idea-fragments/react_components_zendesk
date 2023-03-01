import { TableProps } from "components/tables/Table";
import { FC } from "react";
export declare type TableActionsProps = {
    compact?: boolean;
} & Pick<TableProps, "columnConfigs"> & Partial<Pick<TableProps, "actions" | "filterState" | "onColumnSort" | "onFiltersChange" | "sortState">>;
export declare const TableActions: FC<TableActionsProps>;
//# sourceMappingURL=TableActions.d.ts.map