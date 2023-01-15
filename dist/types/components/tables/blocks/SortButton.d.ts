import { SortDirection } from "components/tables/Table";
import { FC } from "react";
declare type SortButtonProps = {
    direction: SortDirection;
    fieldName: string;
    onClick: (columnName: string, direction: SortDirection) => void;
};
export declare const SortButton: FC<SortButtonProps>;
export {};
//# sourceMappingURL=SortButton.d.ts.map