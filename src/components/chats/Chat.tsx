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
  value?: string
  onChange: (text: string, e: React.ChangeEvent<HTMLTextAreaElement>) => void
  onClick: () => void
}

export const Chat: React.FC<ChatProps> = ({
  header,
  chatBody,
  footer,
  value,
  onChange,
  onClick
}) => {

  const theme = useTheme()

  return (
    <Container>
      {header}
      {chatBody}
      {
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
      }
      <FlexBox 
        withRows
        _css={css`
          position: absolute;
          bottom: 20px;
          left: 0px;
          width: 100%;
        `}
      >
        <TextArea 
          onChange={onChange}
          value={value}
        />
        <ButtonContainer>
          <Button onClick={onClick}>
            Send
          </Button>
        </ButtonContainer>
      </FlexBox>
    </Container>
  )
}

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 80vh;
  display: flex;
  flex-direction: column;
`
const ButtonContainer = styled.div`
  text-align: right;
`




