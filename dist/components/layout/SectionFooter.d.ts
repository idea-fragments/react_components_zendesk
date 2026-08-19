import { SectionPaddingSize } from "components/layout/Section";
import { PropsWithChildren, ReactNode } from "react";
import { CSSProp } from "styles/types";
export type SectionFooterProps = PropsWithChildren<{
    actions?: ReactNode;
    bordered?: boolean;
    caption?: ReactNode;
    paddingSize?: SectionPaddingSize;
    title?: ReactNode;
}> & CSSProp;
export declare const SectionFooter: import("styled-components").StyledComponent<({ actions, bordered, className, paddingSize, }: SectionFooterProps) => import("react/jsx-runtime").JSX.Element, import("styled-components").DefaultTheme, {}, never>;
//# sourceMappingURL=SectionFooter.d.ts.map