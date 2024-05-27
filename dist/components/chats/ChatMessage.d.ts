import { OverflowMenuItem } from "components/layout/OverflowMenu";
import { Nullable } from "global";
import { FC, ReactNode } from "react";
import { CSSProp } from "styles/types";
export type ChatMessageProps = {
    actions?: Nullable<OverflowMenuItem[]>;
    dateTime: string;
    icon: ReactNode;
    iconBgColor?: string;
    isUserMessage?: boolean;
    message: string;
} & CSSProp;
export declare const ChatMessage: import("styled-components").StyledComponent<FC<ChatMessageProps>, import("styled-components").DefaultTheme, {}, never>;
//# sourceMappingURL=ChatMessage.d.ts.map