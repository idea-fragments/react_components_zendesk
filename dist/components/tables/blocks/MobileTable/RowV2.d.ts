import { ColumnConfig, Item, ItemKey } from "components/tables/Table";
import { FC, ReactNode } from "react";
type Props = {
    checkable?: boolean;
    checked?: boolean;
    checkDisabled?: boolean;
    columnConfigs: Array<ColumnConfig>;
    isLastRow?: boolean;
    item: Item;
    listviewMode?: boolean;
    listviewNode?: ReactNode;
    onCheck?: (row: ItemKey, checked: boolean) => void;
    onClick?: (row: ItemKey) => void;
};
/**
 * RowV2 - Same design as original Row but using CSS Grid instead of Grid component
 */
export declare const Row: FC<Props>;
export {};
//# sourceMappingURL=RowV2.d.ts.map