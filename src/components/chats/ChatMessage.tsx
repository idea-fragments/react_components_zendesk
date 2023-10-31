import styled, { css } from "styled-components"
import { Text } from "components/text/Text"
import { useTheme } from "styles/theme/useTheme"

export type ChatMessageProps = {
  message: string
  dateTime: string
  icon?: React.ReactNode
}

export const ChatMessage: React.FC<ChatMessageProps> = ({
  message,
  dateTime,
  icon
}) => {

  const theme = useTheme()

  return (
    <Container>
      <MessageContainer
        css={`
          flex-direction: ${icon ? "row-reverse" : "row"};
        `}
      >
        <MessageText
          css={`
           margin-right: ${icon ? "0px" : "10px"};
         `}
        >
        {message}
        </MessageText>
        <IconContainer
          css={`
            background-color: ${icon ? theme.styles.colorAccent : "#8f749c"};
            margin-right: ${icon ? "10px" : "0px"};
          `}
        >
          {
            icon 
            ? 
            icon 
            : 
            <Text _css={css`color: white;`}>
              Me
            </Text>
          }
        </IconContainer>
      </MessageContainer>
      <Text _css={css`
        margin-top: 10px;
        text-align: ${icon ? "left" : "right"};
        color: ${theme.styles.textColorSecondary};
      `}>
        {dateTime}
      </Text>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  margin-bottom: 20px;
`

const MessageContainer = styled.div`
  width: 100%;
  display: flex;
  align-item: flex-start;
`

const MessageText = styled(Text)`
  width: 100%;
  white-space: pre-wrap;
  background-color: lightgray;
  padding: 7px;
  border-radius: 5px;
`

const IconContainer = styled.div`
  min-width: 28px;
  height: 28px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`


