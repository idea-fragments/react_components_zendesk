import { ChangeEvent, FC, ReactNode } from "react";
import { CSSProp } from "styles/types";
export type ChatProps = {
    chatBody: ReactNode;
    footer?: ReactNode;
    header?: ReactNode;
    hideSendButton?: boolean;
    onChange: (text: string, e: ChangeEvent<HTMLTextAreaElement>) => void;
    onSaveClicked?: () => void;
    userInputValue?: string;
} & CSSProp;
export declare const Chat: import("styled-components").StyledComponent<FC<ChatProps>, import("styled-components").DefaultTheme, {}, never>;
//# sourceMappingURL=Chat.d.ts.map