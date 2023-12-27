import { ChangeEvent, FC, ReactNode } from "react"
import styled, { css } from "styled-components"
import { FlexBox } from "components/layout/FlexBox"
import { TextArea } from "components/forms/textfields/TextArea"
import { Text } from "components/text/Text"
import { Button, BUTTON_SIZES } from "components/forms/Button"
import { SPACINGS } from "styles/spacings"
import { useTheme } from "styles/theme/useTheme"
import { FONT_SIZES } from "styles/typography"

export type ChatProps = {
  header?: ReactNode
  hideSendButton?: boolean
  chatBody: ReactNode
  footer?: ReactNode
  userInputValue?: string
  onChange: (text: string, e: ChangeEvent<HTMLTextAreaElement>) => void
  onClick: () => void
}

export const Chat: FC<ChatProps> = ({
  header,
  hideSendButton = false,
  chatBody,
  footer,
  userInputValue,
  onChange,
  onClick,
}) => {
  const theme = useTheme()

  return (
    <Container
      gap={SPACINGS.LG}
      withRows>
      {header}
      <FlexBox
        fluid
        withRows
        _css={css`
          flex: 1;
          overflow-y: scroll;
          margin: 0 -20px;
          padding: 0 20px;
        `}>
        {chatBody}
      </FlexBox>
      <FlexBox
        withRows
        _css={css`
          background-color: white;
          width: 100%;
        `}>
        {footer ? (
          <Text
            _css={css`
              font-size: ${FONT_SIZES.XS};
              color: ${theme.styles.textColorSecondary};
              text-align: center;
            `}>
            {footer}
          </Text>
        ) : null}
        <TextArea
          onChange={onChange}
          value={userInputValue}
        />
        <FlexBox justifyContent={"flex-end"}>
          {hideSendButton ? null : (
            <Button
              onClick={onClick}
              size={BUTTON_SIZES.SMALL}>
              Send
            </Button>
          )}
        </FlexBox>
      </FlexBox>
    </Container>
  )
}

const Container = styled(FlexBox)`
  position: relative;
  width: 100%;
  height: 100%;
`
