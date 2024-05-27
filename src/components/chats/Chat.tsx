import {
  ChangeEvent,
  FC,
  ReactNode,
  useCallback,
  useEffect,
  useRef,
} from "react"
import styled, { css } from "styled-components"
import { FlexBox } from "components/layout/FlexBox"
import { TextArea } from "components/forms/textfields/TextArea"
import { Text } from "components/text/Text"
import { Button, BUTTON_SIZES } from "components/forms/Button"
import { SPACINGS } from "styles/spacings"
import { useTheme } from "styles/theme/useTheme"
import { CSSProp } from "styles/types"
import { FONT_SIZES } from "styles/typography"

export type ChatProps = {
  chatBody: ReactNode
  footer?: ReactNode
  header?: ReactNode
  hideSendButton?: boolean
  onChange: (text: string, e: ChangeEvent<HTMLTextAreaElement>) => void
  onSaveClicked?: () => void
  userInputValue?: string
} & CSSProp

export const Chat = styled((({
  chatBody,
  className,
  footer,
  header,
  hideSendButton = false,
  onChange,
  onSaveClicked,
  userInputValue,
}) => {
  const theme = useTheme()
  const chatEntriesContainer = useRef<HTMLDivElement>(null)

  const scrollToBottom = useCallback(() => {
    // need the component to rerender when the chatBody is updated...So we need
    // to add this dummy check so the chatBody can be added to the dependencies list
    if (!chatBody) return

    chatEntriesContainer.current?.scrollTo(
      0,
      chatEntriesContainer.current?.scrollHeight ?? 0,
    )
  }, [chatBody])

  useEffect(() => {
    scrollToBottom()
  }, [scrollToBottom])

  return (
    <Container
      className={className}
      gap={SPACINGS.LG}
      withRows>
      {header}
      <FlexBox
        fluid
        ref={chatEntriesContainer}
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
              onClick={onSaveClicked!}
              size={BUTTON_SIZES.SMALL}>
              Send
            </Button>
          )}
        </FlexBox>
      </FlexBox>
    </Container>
  )
}) as FC<ChatProps>)`
  ${({ _css }) => _css}
`

const Container = styled(FlexBox)`
  position: relative;
  width: 100%;
  height: 100%;
`
