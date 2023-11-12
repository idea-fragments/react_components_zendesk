/// <reference types="react" />
import { StickyColumnProps } from "components/tables/utils";
import { CSS, CSSProp } from "styles/types";
type OverflowColumnProps = {
    extraWidth?: string;
};
declare const Table: import("styled-components").StyledComponent<import("react").ForwardRefExoticComponent<import("@zendeskgarden/react-tables").ITableProps & import("react").RefAttributes<HTMLTableElement>>, import("styled-components").DefaultTheme, CSSProp<any>, never>;
declare const Head: import("styled-components").StyledComponent<import("react").ForwardRefExoticComponent<import("@zendeskgarden/react-tables").IHeadProps & import("react").RefAttributes<HTMLTableSectionElement>>, import("styled-components").DefaultTheme, {}, never>;
declare const HeaderRow: import("styled-components").StyledComponent<import("react").ForwardRefExoticComponent<import("react").HTMLAttributes<HTMLTableRowElement> & import("react").RefAttributes<HTMLTableRowElement>>, import("styled-components").DefaultTheme, {}, never>;
declare const HeaderCell: import("styled-components").StyledComponent<import("react").ForwardRefExoticComponent<import("@zendeskgarden/react-tables").IHeaderCellProps & import("react").RefAttributes<HTMLTableCellElement>>, import("styled-components").DefaultTheme, CSSProp<any> & StickyColumnProps & OverflowColumnProps, never>;
declare const Body: import("styled-components").StyledComponent<import("react").ForwardRefExoticComponent<import("react").HTMLAttributes<HTMLTableSectionElement> & import("react").RefAttributes<HTMLTableSectionElement>>, import("styled-components").DefaultTheme, {}, never>;
declare const Cell: import("styled-components").StyledComponent<import("react").ForwardRefExoticComponent<import("@zendeskgarden/react-tables").ICellProps & import("react").RefAttributes<HTMLTableCellElement>>, import("styled-components").DefaultTheme, CSSProp<any> & StickyColumnProps, never>;
declare const OverflowButton: import("styled-components").StyledComponent<import("react").ForwardRefExoticComponent<import("@zendeskgarden/react-tables/dist/typings/elements/OverflowButton").IOverflowButtonProps & import("react").RefAttributes<HTMLButtonElement>>, import("styled-components").DefaultTheme, {}, never>;
declare const Row: import("styled-components").StyledComponent<import("react").ForwardRefExoticComponent<import("@zendeskgarden/react-tables").IRowProps & import("react").RefAttributes<HTMLTableRowElement>>, import("styled-components").DefaultTheme, {
    clickable?: boolean | undefined;
    _css?: CSS;
}, never>;
export { Table, Head, HeaderRow, HeaderCell, OverflowButton, Body, Row, Cell };
//# sourceMappingURL=index.d.ts.map