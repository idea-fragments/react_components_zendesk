import styled, { css } from "styled-components"
import { FlexBox } from "components/layout/FlexBox"
import { TextArea } from "components/forms/textfields/TextArea"
import { Text } from "components/text/Text"
import { Button } from "components/forms/Button"
import { useTheme } from "styles/theme/useTheme"

export type ChatProps = {
  header?: React.ReactNode
  chatBody: React.ReactNode
  footer?: React.ReactNode
  userInputValue?: string
  onChange: (text: string, e: React.ChangeEvent<HTMLTextAreaElement>) => void
  onClick: () => void
}

export const Chat: React.FC<ChatProps> = ({
  header,
  chatBody,
  footer,
  userInputValue,
  onChange,
  onClick,
}) => {
  const theme = useTheme()

  return (
    <Container>
      {header}
      <ChatBodyContainer>{chatBody}</ChatBodyContainer>
      {/* {
        footer
        ?
        <Text 
          _css={css`
            text-align: center;
            color: ${theme.styles.textColorSecondary};
            margin-top: 30px;
          `}
        >
          {footer}
        </Text>
        :
        null
      } */}
      <FlexBox
        withRows
        _css={css`
          background-color: white;
          position: absolute;
          bottom: 10px;
          left: 0px;
          width: 100%;
        `}>
        {footer ? (
          <Text
            _css={css`
              text-align: center;
              color: ${theme.styles.textColorSecondary};
              margin: 30px 0px;
            `}>
            {footer}
          </Text>
        ) : null}
        <TextArea
          onChange={onChange}
          value={userInputValue}
        />
        <ButtonContainer>
          <Button onClick={onClick}>Send</Button>
        </ButtonContainer>
      </FlexBox>
    </Container>
  )
}

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`

const ChatBodyContainer = styled.div`
  height: 90%;
  overflow: scroll;
`
const ButtonContainer = styled.div`
  text-align: right;
`
