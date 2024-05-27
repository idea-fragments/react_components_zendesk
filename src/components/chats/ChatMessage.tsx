import { FlexBox } from "components/layout/FlexBox"
import { OverflowMenu, OverflowMenuItem } from "components/layout/OverflowMenu"
import { Text } from "components/text/Text"
import { Nullable } from "global"
import { FC, ReactNode, useMemo } from "react"
import styled, { css } from "styled-components"
import { SPACINGS } from "styles/spacings"
import { useTheme } from "styles/theme/useTheme"
import { CSSProp } from "styles/types"
import { FONT_SIZES } from "styles/typography"

export type ChatMessageProps = {
  actions?: Nullable<OverflowMenuItem[]>
  dateTime: string
  icon: ReactNode
  iconBgColor?: string
  isUserMessage?: boolean
  message: string
} & CSSProp

export const ChatMessage = styled((({
  actions,
  className,
  dateTime,
  icon,
  iconBgColor: iconBgColorProp,
  isUserMessage,
  message,
}) => {
  const theme = useTheme()
  const { currentUser, other } = theme.styles.chat.message

  const iconBackground = useMemo(() => {
    if (iconBgColorProp) return iconBgColorProp

    return isUserMessage ? currentUser.icon.background : other.icon.background
  }, [
    currentUser.icon.background,
    iconBgColorProp,
    isUserMessage,
    other.icon.background,
  ])

  const textBackground = useMemo(() => {
    return isUserMessage ? currentUser.text.background : other.text.background
  }, [currentUser.text.background, isUserMessage, other.text.background])

  return (
    <Container className={className}>
      <MessageContainer isUserMessage={!!isUserMessage}>
        <TextAndOptionsWrapper reversed={!!isUserMessage}>
          <MessageText
            background={textBackground}
            color={theme.styles.getTextColorForBackground({
              theme,
              color: textBackground,
            })}>
            {message}
          </MessageText>

          {!!actions ? (
            <div
              css={`
                margin-top: -4px;
              `}>
              <OverflowMenu actions={actions} />
            </div>
          ) : null}
        </TextAndOptionsWrapper>
        <FlexBox withRows>
          <IconContainer
            color={iconBackground}
            textColor={theme.styles.getTextColorForBackground({
              theme,
              color: iconBackground,
            })}>
            {icon}
          </IconContainer>
        </FlexBox>
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
}) as FC<ChatMessageProps>)`
  ${({ _css }) => _css}
`

const Container = styled.div`
  width: 100%;
`

const MessageContainer = styled(FlexBox)<{ isUserMessage: boolean }>`
  width: 100%;
  align-items: flex-start;
  gap: ${SPACINGS.SM};
  flex-direction: ${({ isUserMessage }) =>
    !isUserMessage ? "row-reverse" : "row"};
`

const MessageText = styled(Text)<{ background: string }>`
  width: 100%;
  white-space: pre-wrap;
  background-color: ${({ background }) => background};
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

const TextAndOptionsWrapper = styled(FlexBox)<{ reversed: boolean }>`
  flex: 1;
  flex-direction: ${({ reversed }) => (reversed ? "row-reverse" : "row")};
`
