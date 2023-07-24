import { PropsWithChildren, ReactNode } from "react";
import { CSSProp } from "styles/types";
export declare type SectionFooterProps = PropsWithChildren<{
    actions?: ReactNode;
    bordered?: boolean;
    caption?: ReactNode;
    title?: ReactNode;
}> & CSSProp;
export declare const SectionFooter: import("styled-components").StyledComponent<({ actions, bordered, className, }: SectionFooterProps) => JSX.Element, import("styled-components").DefaultTheme, {}, never>;
//# sourceMappingURL=SectionFooter.d.ts.map