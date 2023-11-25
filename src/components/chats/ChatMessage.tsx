import styled, { css } from "styled-components"
import { Text } from "components/text/Text"
import { SPACINGS } from "styles/spacings"
import { COLORS } from "styles/colors"
import { useTheme } from "styles/theme/useTheme"

export type ChatMessageProps = {
  message: string
  isUserMessage: boolean
  dateTime: string
  icon: React.ReactNode
  color?: string
}

export const ChatMessage: React.FC<ChatMessageProps> = ({
  message,
  isUserMessage,
  dateTime,
  icon,
  color,
}) => {
  const theme = useTheme()

  return (
    <Container>
      <MessageContainer isUserMessage={isUserMessage}>
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
          margin-top: 10px;
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
  background-color: ${COLORS.GREY_200};
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
