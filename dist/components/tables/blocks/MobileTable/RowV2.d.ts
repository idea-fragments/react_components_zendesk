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
export declare const Row: FC<Props>;
export {};
//# sourceMappingURL=RowV2.d.ts.map