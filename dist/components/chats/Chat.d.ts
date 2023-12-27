import { ChangeEvent, FC, ReactNode } from "react";
export type ChatProps = {
    header?: ReactNode;
    hideSendButton?: boolean;
    chatBody: ReactNode;
    footer?: ReactNode;
    userInputValue?: string;
    onChange: (text: string, e: ChangeEvent<HTMLTextAreaElement>) => void;
    onClick: () => void;
};
export declare const Chat: FC<ChatProps>;
//# sourceMappingURL=Chat.d.ts.map