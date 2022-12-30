/// <reference types="react" />
import { FinalizedTableProps } from "components/tables/Table";
declare const _default: {
    title: string;
    component: ({ actions, className, pagination, onItemsChecked, onPageChange, ...props }: import("components/tables/Table").TableProps & {
        className?: string | undefined;
        pagination?: import("components/tables/Table").PaginationData | undefined;
        onPageChange?: ((p: number) => void) | undefined;
    }) => JSX.Element;
    argTypes: {};
};
export default _default;
export declare const Default: (args: Partial<FinalizedTableProps>) => JSX.Element;
//# sourceMappingURL=Table.stories.d.ts.map