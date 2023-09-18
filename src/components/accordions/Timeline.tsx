import { ReactNode } from "react";
import { css } from "styled-components"
import { Timeline as ZTimeline } from "@zendeskgarden/react-accordions";
import { Text } from "components/text/Text";

export type TimeLineItem = {
    content: string
    dateTime?: string,
    icon?: ReactNode
}

export type TimnelineProps = {
    isAlternate?: boolean
    data: TimeLineItem[]
}

export const Timeline: React.FC<TimnelineProps> = ({ isAlternate = false, data }) => {

    return (
        <ZTimeline isAlternate = {isAlternate}>
            {data.map((item) => {
                return (
                    <ZTimeline.Item icon = {item.icon}>
                        <ZTimeline.Content>
                            <Text>{item.content}</Text>
                            {
                                item.dateTime
                                ?
                                <Text _css = {css`color: #87929D`}>
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
