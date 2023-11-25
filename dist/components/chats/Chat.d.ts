/// <reference types="react" />
export type ChatProps = {
    header?: React.ReactNode;
    chatBody: React.ReactNode;
    footer?: React.ReactNode;
    userInputValue?: string;
    onChange: (text: string, e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    onClick: () => void;
};
export declare const Chat: React.FC<ChatProps>;
//# sourceMappingURL=Chat.d.ts.map