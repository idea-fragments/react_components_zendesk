import { TableProps } from "components/tables/Table";
type Props = TableProps & {
    hasRowActions: boolean;
    onSelectAllToggle?: (b: boolean) => void;
};
export declare const MobileTable: ({ checkable, checkedItems, columnConfigs, items, mobileListview, mobileListviewNodes, onItemClick, onItemChecked, }: Props) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=MobileTable.d.ts.map