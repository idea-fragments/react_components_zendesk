import { PaginationData } from "components/tables/Table";
type Props = PaginationData & {
    onPageChange: (n: number) => void;
    onPageSizeChange?: (size: number) => void;
};
export declare const Pagination: ({ page, pageSize, totalCount, onPageChange, onPageSizeChange, }: Props) => import("react/jsx-runtime").JSX.Element | null;
export {};
//# sourceMappingURL=Pagination.d.ts.map