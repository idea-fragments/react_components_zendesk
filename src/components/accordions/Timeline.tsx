import { ReactNode, FC } from "react"
import { css } from "styled-components"
import { Timeline as ZTimeline } from "@zendeskgarden/react-accordions"
import { Text } from "components/text/Text"
import { useTheme } from "styles/theme/useTheme"
import { isString } from "utils/typeCheckers"

export type TimeLineItem = {
  content: ReactNode
  dateTime?: string
  icon?: ReactNode
  key: string | number
}

export type TimelineProps = {
  isAlternate?: boolean
  data: TimeLineItem[]
}

export const Timeline: FC<TimelineProps> = ({ isAlternate = false, data }) => {
  const theme = useTheme()

  return (
    <ZTimeline isAlternate={isAlternate}>
      {data.map(({ content, dateTime, icon, key }) => {
        return (
          <ZTimeline.Item
            key={key}
            icon={icon ? <div>{icon}</div> : undefined}>
            <ZTimeline.Content>
              {isString(content) ? (
                <Text
                  _css={css`
                    white-space: pre-wrap;
                  `}>
                  {content}
                </Text>
              ) : (
                content
              )}
              {dateTime ? (
                <Text
                  _css={css`
                    color: ${theme.styles.textColorSecondary};
                  `}>
                  {dateTime}
                </Text>
              ) : null}
            </ZTimeline.Content>
          </ZTimeline.Item>
        )
      })}
    </ZTimeline>
  )
}
