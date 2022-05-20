import type { ColumnConfig, Item, ItemKey } from "components/tables/Table";
import { FC } from "react";
declare type Props = {
    checkable?: boolean;
    checked?: boolean;
    checkDisabled?: boolean;
    columnConfigs: Array<ColumnConfig>;
    item: Item;
    onCheck?: (row: ItemKey, checked: boolean) => void;
    onClick?: (row: ItemKey) => void;
};
export declare const Row: FC<Props>;
export {};
//# sourceMappingURL=Row.d.ts.map