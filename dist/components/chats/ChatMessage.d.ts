import { FC, ReactNode } from "react";
export type ChatMessageProps = {
    message: string;
    isUserMessage?: boolean;
    dateTime: string;
    icon: ReactNode;
    color?: string;
};
export declare const ChatMessage: FC<ChatMessageProps>;
//# sourceMappingURL=ChatMessage.d.ts.map