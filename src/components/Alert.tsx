import {
  mdiAlert,
  mdiAlertBox,
  mdiCheckCircle,
  mdiClose,
  mdiInformation,
} from "@mdi/js"
import { BUTTON_SIZES } from "components/forms/Button"
import { IconButton } from "components/forms/IconButton"
import { Icon } from "components/Icon"
import { FlexBox } from "components/layout/FlexBox"
import { StyledComponentProps } from "components/StyledComponentProps.type"
import { Text } from "components/text/Text"
import { Nullable } from "global"
import React, { FC, useCallback, useEffect, useMemo } from "react"
import styled from "styled-components"
import { dark } from "styles/colors"
import { textColorForBackground } from "styles/mixins"
import { SPACINGS } from "styles/spacings"
import { useTheme } from "styles/theme/useTheme"
import { FONT_WEIGHTS } from "styles/typography"
import { ValueOf } from "utils/types"

const { SM, MD, XS } = SPACINGS
export const ALERT_TYPES = {
  ACCENT: "accent",
  ERROR: "error",
  INFO: "info",
  PRIMARY: "primary",
  SUCCESS: "success",
  WARNING: "warning",
} as const

export type AlertType = ValueOf<typeof ALERT_TYPES>

export type AlertContent = {
  title?: string
  body: any
  onClose?: () => void
  type?: AlertType
}

type AlertProps = {
  autoDismissSeconds?: number
  alertContent: AlertContent
  closeAlert: () => void
  isVisible: boolean
} & StyledComponentProps

export let Alert: FC<AlertProps> = ({
  autoDismissSeconds,
  alertContent,
  className,
  closeAlert,
  isVisible,
}) => {
  const theme = useTheme()
  const { title, body, type = ALERT_TYPES.INFO }: AlertContent = alertContent
  const alertTypeBackgroundColor: Record<AlertType, string> = useMemo(
    () => ({
      [ALERT_TYPES.ACCENT]: theme.styles.colorAccent,
      [ALERT_TYPES.ERROR]: theme.styles.colorDanger,
      [ALERT_TYPES.INFO]: theme.styles.colors.blue["400"],
      [ALERT_TYPES.PRIMARY]: theme.styles.colorPrimary,
      [ALERT_TYPES.SUCCESS]: theme.styles.colorSuccess,
      [ALERT_TYPES.WARNING]: theme.styles.colorWarning,
    }),
    [theme],
  )
  const bgColor = useMemo(
    () => alertTypeBackgroundColor[type],
    [alertTypeBackgroundColor, type],
  )

  const handleClose = useCallback(() => {
    closeAlert()
    alertContent.onClose?.()
  }, [alertContent, closeAlert])

  useEffect(() => {
    if (!isVisible || !autoDismissSeconds) return

    setTimeout(handleClose, autoDismissSeconds * 1000)
  }, [autoDismissSeconds, handleClose, isVisible])

  if (!isVisible) return null

  return (
    <AlertWrapper
      className={className}
      color={bgColor}>
      <FlexBox
        alignItems={"center"}
        css={`
          border-right: 1px solid ${dark(bgColor, 0.15)};
          padding: 0 ${SM} 0 ${SM};
        `}>
        <Icon
          size={"1.2rem"}
          svg={iconSVG(type)}
        />
      </FlexBox>
      <Content>
        {title ? (
          <Text
            css={`
              font-weight: ${FONT_WEIGHTS.MEDIUM};
            `}>
            {title}
          </Text>
        ) : null}
        <Text>{body}</Text>
      </Content>
      <FlexBox
        alignItems={"center"}
        css={`
          padding: 0 ${SM} 0 ${SM};
        `}>
        <CloseButton
          aria-label="Close alert"
          color={bgColor}
          flat={false}
          primary
          onClick={handleClose}
        />
      </FlexBox>
    </AlertWrapper>
  )
}

Alert = styled(Alert)<AlertProps>``

const AbsoluteContainer = styled(FlexBox).attrs({
  justify: "center",
  alignItems: "center",
})`
  position: fixed;
  //left: 50%;
  right: 0;
  top: ${SPACINGS.LG};
  width: 480px;
  max-width: 94%;
  z-index: ${(p) => p.theme.styles.notifications.zIndex};
`

const AlertWrapper = styled(FlexBox).attrs(() => ({
  alignItems: "stretch",
  gap: "unset",
}))`
  &&&& {
    background-color: ${(p) => p.color} !important;
    border-radius: 4px;
    box-shadow: rgb(47 57 65 / 28%) 0 10px 18px 0;
    //left: -50%;
    line-height: 1.42857;
    margin-right: ${MD};
    padding: 10px 0;
    position: relative;
    width: 100%;

    ${textColorForBackground}
  }
`

const Content = styled(FlexBox).attrs({
  gap: "unset",
  withRows: true,
})`
  flex: 1;
  padding: ${XS} 0 ${XS} ${SM};
  flex-basis: 320px;
`

const CloseButton = styled(IconButton).attrs({
  icon: mdiClose,
  iconSize: "1.2rem",
  size: BUTTON_SIZES.SMALL,
})`
  right: 10px;
  top: 10px;
`

const iconSVG = (type: string): string => {
  return (
    {
      [ALERT_TYPES.ERROR]: mdiAlertBox,
      [ALERT_TYPES.INFO]: mdiInformation,
      [ALERT_TYPES.SUCCESS]: mdiCheckCircle,
      [ALERT_TYPES.WARNING]: mdiAlert,
    }[type] ?? mdiInformation
  )
}
