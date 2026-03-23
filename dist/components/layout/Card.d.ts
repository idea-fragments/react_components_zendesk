import { SectionProps } from "components/layout/Section";
import { FC, PropsWithChildren, ReactNode } from "react";
import { ColorProps, CSSProp } from "styles/types";
export type CardProps = PropsWithChildren<{
    borderedSections?: boolean;
    compact?: boolean;
    footerActions?: ReactNode;
    headerActions?: ReactNode;
    onClick?: () => void;
    title?: ReactNode;
}> & ColorProps & CSSProp & Pick<SectionProps, "shadowed">;
export declare const Card: FC<CardProps>;
//# sourceMappingURL=Card.d.ts.map