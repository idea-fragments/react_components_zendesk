/// <reference types="react" />
import { TableProps } from "components/tables/Table";
declare type Props = TableProps & {
    hasRowActions: boolean;
    onSelectAllToggle?: (b: boolean) => void;
};
export declare const SimpleTable: ({ title, actions, columnConfigs, helpText, items, onItemClick, checkable, checkedItems, onItemChecked, onSelectAllToggle, }: Props) => JSX.Element;
export {};
//# sourceMappingURL=SimpleTable.d.ts.map