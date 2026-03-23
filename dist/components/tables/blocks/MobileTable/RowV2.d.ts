import { ColumnConfig, Item, ItemKey } from "components/tables/Table";
import { FC, ReactNode } from "react";
export type ListviewNodeRenderFunction = (params: ListviewNodeRenderParams) => ReactNode;
export type ListviewNodeRenderParams = {
    checkbox: ReactNode;
    isLastRow: boolean;
    onClick: () => void;
    overflowMenu: ReactNode;
};
type Props = {
    checkable?: boolean;
    checked?: boolean;
    checkDisabled?: boolean;
    columnConfigs: Array<ColumnConfig>;
    isLastRow?: boolean;
    item: Item;
    listviewMode?: boolean;
    listviewNode?: ListviewNodeRenderFunction;
    onCheck?: (row: ItemKey, checked: boolean) => void;
    onClick?: (row: ItemKey) => void;
};
export declare const Row: FC<Props>;
export {};
//# sourceMappingURL=RowV2.d.ts.map