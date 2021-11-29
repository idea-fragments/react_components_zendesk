// @flow

import {
  mdiAlert,
  mdiAlertBox,
  mdiCheckCircle,
  mdiClose,
  mdiInformation,
}                                        from "@mdi/js"
import { BUTTON_SIZES }                  from "components/forms/Button"
import { IconButton }                    from "components/forms/IconButton"
import { Icon }                          from "components/Icon"
import { FlexBlock }                     from "components/layout/FlexBlock"
import { FlexBox }                       from "components/layout/FlexBox"
import type { StyledComponentProps }     from "components/StyledComponentProps.type"
import { Text }                          from "components/text/Text"
import React, { useCallback, useEffect } from "react"
import styled                            from "styled-components"
import { COLORS }                        from "styles/colors"
import { textColorForBackground }        from "styles/mixins"
import { SPACINGS }                      from "styles/spacings"
import { useTheme }                      from "styles/theme/useTheme"
import { FONT_WEIGHTS }                  from "styles/typography"

export const ALERT_TYPES = Object.freeze({
  INFO:    "info",
  SUCCESS: "success",
  ERROR:   "error",
  WARNING: "warning",
})

export type AlertType = $Values<typeof ALERT_TYPES>

export type AlertContent = {
  title? :string,
  body :any,
  onClose? :() => void,
  type? :AlertType,
}

type Props = {
  isVisible :boolean,
  closeAlert :() => void,
  alertContent :?AlertContent,
} & StyledComponentProps

export let Alert = ({
                      isVisible,
                      closeAlert,
                      alertContent,
                      className,
                    } :Props) => {

  const theme = useTheme()

  const handleClose = useCallback(() => {
    closeAlert()
    if (alertContent.onClose) alertContent.onClose()
  }, [alertContent, closeAlert])

  useEffect(() => {
    if (!isVisible) return

    setTimeout(handleClose, 8000)
  }, [isVisible, handleClose])


  if (!isVisible) return null
  if (!alertContent) throw new Error("Alert found null alert content")

  const {
          title,
          body,
          type = ALERT_TYPES.INFO,
        } :AlertContent = alertContent

  const bgColor = {
    [ALERT_TYPES.ERROR]:   theme.styles.colorDanger,
    [ALERT_TYPES.INFO]:    COLORS.LIGHT_BLUE,
    [ALERT_TYPES.SUCCESS]: theme.styles.colorSuccess,
    [ALERT_TYPES.WARNING]: theme.styles.colorWarning,
  }[type]

  return (
    <AbsoluteContainer>
      <AlertWrapper className={className}
                    color={bgColor}
                    type={type}
                    onClose={handleClose}>

        <FlexBox>
          <div css={`margin-top: 2px;`}>
            <Icon size={"1.2rem"} svg={iconSVG(type)} />
          </div>
          <FlexBox gap={"unset"} withRows>
            <Text css={`font-weight: ${FONT_WEIGHTS.MEDIUM};`}>
              {title}
            </Text>
            <Text>{body}</Text>
          </FlexBox>
        </FlexBox>

        <CloseButton aria-label="Close alert"
                     color={bgColor}
                     flat={false}
                     primary
                     onClick={handleClose} />
      </AlertWrapper>
    </AbsoluteContainer>
  )

}

Alert                = styled(Alert)``
Alert.COMPONENT_NAME = "Alert"
Alert.defaultProps   = {}

const AbsoluteContainer = styled(FlexBlock).attrs({
  justify:    "center",
  alignItems: "center",
})`
  position: fixed;
  left: 50%;
  top: ${SPACINGS.LG};
  min-width: 300px;
  max-width: 100%;
`

const CloseButton = styled(IconButton).attrs({
  icon:     mdiClose,
  iconSize: "1rem",
  size:     BUTTON_SIZES.SMALL,
})`
  position: absolute;
  right: 10px;
  top: 10px;
`

const AlertWrapper = styled(FlexBox).attrs(({ theme, type }) => ({
  gap: "unset",
}))`
  &&&& {
    background-color: ${p => p.color} !important;
    border-radius: 10px;
    left: -50%;
    line-height: 1.42857;
    padding: 20px 40px 20px 20px;
    position: relative;
    width: 100%;

    ${textColorForBackground}
  }
`

const iconSVG = (type :string) => {
  return {
    [ALERT_TYPES.ERROR]:   mdiAlertBox,
    [ALERT_TYPES.INFO]:    mdiInformation,
    [ALERT_TYPES.SUCCESS]: mdiCheckCircle,
    [ALERT_TYPES.WARNING]: mdiAlert,
  }[type]
}
