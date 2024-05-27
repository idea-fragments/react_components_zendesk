import * as styled_components from 'styled-components';
import { FlattenSimpleInterpolation } from 'styled-components';
import { ReactNode, ChangeEvent, FC } from 'react';
import { Nullable } from 'global';

type CSS<T = any> = FlattenSimpleInterpolation | string | T;
type CSSProp<T = any> = {
    _css?: CSS<T>;
    className?: string;
};

type ChatProps = {
    chatBody: ReactNode;
    footer?: ReactNode;
    header?: ReactNode;
    hideSendButton?: boolean;
    onChange: (text: string, e: ChangeEvent<HTMLTextAreaElement>) => void;
    onSaveClicked?: () => void;
    userInputValue?: string;
} & CSSProp;
declare const Chat: styled_components.StyledComponent<FC<ChatProps>, styled_components.DefaultTheme, {}, never>;

type OverflowMenuItem = {
    label: string;
    action: () => void;
};

type ChatMessageProps = {
    actions?: Nullable<OverflowMenuItem[]>;
    dateTime: string;
    icon: ReactNode;
    iconBgColor?: string;
    isUserMessage?: boolean;
    message: string;
} & CSSProp;
declare const ChatMessage: styled_components.StyledComponent<FC<ChatMessageProps>, styled_components.DefaultTheme, {}, never>;

export { Chat, ChatMessage, ChatMessageProps, ChatProps };
