import { ColumnConfig } from "components/tables/Table";
import { Interpolation, ThemeProps } from "styled-components";
export type StickyColumnProps = {
    checkableRow?: boolean;
    columnConfigs?: ColumnConfig[];
    index?: number;
};
export type SortableColumnProps = {
    sortable?: boolean;
};
export declare const columnContainerStyles: (c: Partial<ColumnConfig>) => ReadonlyArray<Interpolation<Required<StickyColumnProps> & ThemeProps<any>>>;
export declare const columnWidth: (size: number) => string;
//# sourceMappingURL=utils.d.ts.map