import { PropsWithChildren, ReactNode } from "react";
import { CSSProp } from "styles/types";
export type SectionHeaderProps = PropsWithChildren<{
    actions?: ReactNode;
    bordered?: boolean;
    caption?: ReactNode;
    title?: ReactNode;
}> & CSSProp;
export declare const SectionHeader: import("styled-components").StyledComponent<import("react").ForwardRefExoticComponent<{
    actions?: ReactNode;
    bordered?: boolean | undefined;
    caption?: ReactNode;
    title?: ReactNode;
} & {
    children?: ReactNode;
} & CSSProp<any> & import("react").RefAttributes<HTMLDivElement>>, import("styled-components").DefaultTheme, {}, never>;
//# sourceMappingURL=SectionHeader.d.ts.map