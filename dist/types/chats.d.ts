import { ReactNode, ChangeEvent, FC } from 'react';

type ChatProps = {
    header?: ReactNode;
    hideSendButton?: boolean;
    chatBody: ReactNode;
    footer?: ReactNode;
    userInputValue?: string;
    onChange: (text: string, e: ChangeEvent<HTMLTextAreaElement>) => void;
    onClick: () => void;
};
declare const Chat: FC<ChatProps>;

type ChatMessageProps = {
    message: string;
    isUserMessage?: boolean;
    dateTime: string;
    icon: ReactNode;
    color?: string;
};
declare const ChatMessage: FC<ChatMessageProps>;

export { Chat, ChatMessage, ChatMessageProps, ChatProps };
