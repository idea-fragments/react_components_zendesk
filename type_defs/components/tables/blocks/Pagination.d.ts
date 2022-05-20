/// <reference types="react" />
import type { PaginationData } from "components/tables/Table";
declare type Props = PaginationData & {
    onPageChange: (n: number) => void;
};
export declare const Pagination: ({ page, pageSize, totalCount, onPageChange, }: Props) => JSX.Element | null;
export {};
//# sourceMappingURL=Pagination.d.ts.map