import styled, { css } from "styled-components"
import { Text } from "components/text/Text"
import { SPACINGS } from "styles/spacings"
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
  color
}) => {

  const theme = useTheme()

  return (
    <Container>
      <MessageContainer
        isUserMessage={isUserMessage}

      >
        <MessageText>
          {message}
        </MessageText>
        <IconContainer
          color={color ?? theme.styles.colorPrimary}
        >
          {icon}
        </IconContainer>
      </MessageContainer>
      <Text _css={css`
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
  padding: 0px 10px;
  margin-bottom: 20px;
`

const MessageContainer = styled.div<{ isUserMessage: boolean }>`
  width: 100%;
  display: flex;
  gap: ${SPACINGS.SM};
  align-item: flex-start;
  flex-direction: ${({ isUserMessage }) => !isUserMessage ? "row-reverse" : "row"};
`

const MessageText = styled(Text)`
  width: 100%;
  white-space: pre-wrap;
  background-color: lightgray;
  padding: 7px;
  border-radius: 5px;
`

const IconContainer = styled.div<{ color: string }>`
  background-color: ${({ color }) => color};
  min-width: 28px;
  height: 28px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`


