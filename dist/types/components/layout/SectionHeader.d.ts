import { PropsWithChildren, ReactNode } from "react";
import { CSSProp } from "styles/types";
export declare type SectionHeaderProps = PropsWithChildren<{
    actions?: ReactNode;
    bordered?: boolean;
    caption?: ReactNode;
    title?: ReactNode;
}> & CSSProp;
export declare const SectionHeader: import("styled-components").StyledComponent<({ actions, bordered, caption, children, className, title, }: SectionHeaderProps) => JSX.Element, import("styled-components").DefaultTheme, {}, never>;
//# sourceMappingURL=SectionHeader.d.ts.map