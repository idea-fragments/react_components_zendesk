import { FC, ReactNode } from "react"
import styled, { css } from "styled-components"
import { Text } from "components/text/Text"
import { SPACINGS } from "styles/spacings"
import { useTheme } from "styles/theme/useTheme"
import { FONT_SIZES } from "styles/typography"

export type ChatMessageProps = {
  message: string
  isUserMessage?: boolean
  dateTime: string
  icon: ReactNode
  color?: string
}

export const ChatMessage: FC<ChatMessageProps> = ({
  message,
  isUserMessage,
  dateTime,
  icon,
  color,
}) => {
  const theme = useTheme()

  return (
    <Container>
      <MessageContainer isUserMessage={!!isUserMessage}>
        <MessageText>{message}</MessageText>
        <IconContainer
          color={color ?? theme.styles.colorPrimary}
          textColor={theme.styles.getTextColorForBackground({
            theme,
            color: color ?? theme.styles.colorPrimary,
          })}>
          {icon}
        </IconContainer>
      </MessageContainer>
      <Text
        _css={css`
          font-size: ${FONT_SIZES.XS};
          margin-top: ${SPACINGS.SM};
          text-align: ${!isUserMessage ? "left" : "right"};
          color: ${theme.styles.textColorSecondary};
        `}>
        {dateTime}
      </Text>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
`

const MessageContainer = styled.div<{ isUserMessage: boolean }>`
  width: 100%;
  display: flex;
  gap: ${SPACINGS.SM};
  flex-direction: ${({ isUserMessage }) =>
    !isUserMessage ? "row-reverse" : "row"};
`

const MessageText = styled(Text)`
  width: 100%;
  white-space: pre-wrap;
  background-color: ${({ theme }) => theme.styles.colors.grey["200"]};
  padding: 7px;
  border-radius: 10px;
`

const IconContainer = styled.div<{ color: string; textColor: string }>`
  background-color: ${({ color }) => color};
  color: ${({ textColor }) => textColor};
  min-width: 28px;
  line-height: 1em;
  height: 28px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`
