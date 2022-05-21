/// <reference types="react" />
import { ColumnConfig, Item, ItemKey } from "components/tables/Table";
declare type Props = {
    checkable?: boolean;
    checkDisabled?: boolean;
    checked?: boolean;
    columnConfigs: Array<ColumnConfig>;
    item: Item;
    onCheck?: (row: ItemKey, isChecked: boolean) => void;
    onClick?: (row: ItemKey) => void;
    onHoverEnd?: (row: ItemKey) => void;
    onHoverStart?: (row: ItemKey) => void;
};
export declare const Row: {
    ({ checkable, checkDisabled, checked, columnConfigs, item, onCheck, onClick, onHoverEnd, onHoverStart, }: Props): JSX.Element;
    COMPONENT_NAME: string;
};
export {};
//# sourceMappingURL=Row.d.ts.map
