import { TableProps } from "components/tables/Table";
type Props = TableProps & {
    hasRowActions: boolean;
    onSelectAllToggle?: (b: boolean) => void;
};
/**
 * MobileTableV2 - Same as original MobileTable but uses CSS Grid instead of Grid component
 */
export declare const MobileTableV2: ({ checkable, checkedItems, columnConfigs, items, mobileListview, mobileListviewNodes, onItemChecked, onItemClick, onSelectAllToggle, }: Props) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=MobileTableV2.d.ts.map