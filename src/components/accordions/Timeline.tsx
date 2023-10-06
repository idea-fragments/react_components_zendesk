import { ReactNode, FC } from "react";
import { css } from "styled-components"
import { Timeline as ZTimeline } from "@zendeskgarden/react-accordions"
import { Text } from "components/text/Text"
import { useTheme } from "styles/theme/useTheme"

export type TimeLineItem = {
    content: string
    dateTime?: string,
    icon?: ReactNode
}

export type TimelineProps = {
    isAlternate?: boolean
    data: TimeLineItem[]
}

export const Timeline: FC<TimelineProps> = ({ isAlternate = false, data }) => {
    const theme = useTheme()

    return (
        <ZTimeline isAlternate={isAlternate}>
            {data.map((item) => {
                return (
                    <ZTimeline.Item icon={item.icon ? <div>{item.icon}</div> : undefined}>
                        <ZTimeline.Content>
                            <Text _css={css`white-space: pre-wrap;`}>{item.content}</Text>
                            {
                                item.dateTime
                                    ?
                                    <Text _css={css`color: ${theme.styles.textColorSecondary};`}>
                                        {item.dateTime}
                                    </Text>
                                    :
                                    null
                            }
                        </ZTimeline.Content>
                    </ZTimeline.Item>
                )
            })}
        </ZTimeline>
    );
}
