import { Dots }                                       from "@zendeskgarden/react-loaders"
import { FlexBox }                                    from "components/layout/FlexBox"
import { useIsMounted }                               from "hooks/useIsMounted"
import React, { FC, useContext, useEffect, useState } from "react"
import styled, { ThemeContext }                       from "styled-components"
import type { Theme }                                 from "styles/theme/Theme.type"
import { FONT_SIZES }                                 from "styles/typography"
import { Logger }                                     from "utils/logging/Logger"

const logger = new Logger("Loadable")

const Container = styled(FlexBox)`
  //height: 100%;
  width: 100%;
  position: relative;
`

const LoaderContainer = styled(FlexBox)`
  height: 100%;
  width: 100%;
  position: absolute;
`

const ChildrenContainer = styled(FlexBox)`
  width: 100%;
  opacity: ${({ showSpinner, opaqueSpinner }) => {
    if (!showSpinner) return "1"
    return opaqueSpinner ? "0" : ".3"
  }};
`

type Props = {
  className?: string,
  debugId?: number,
  opaqueSpinner?: boolean,
  showSpinner: boolean,
}

export let Loadable: FC<Props> = ({
                                    children,
                                    className,
                                    debugId,
                                    opaqueSpinner = false,
                                    showSpinner = false,
                                  }) => {
  logger.writeInfo("Rendering id:", debugId, "showSpinner", showSpinner)
  const isMounted                           = useIsMounted()
  const theme                               = useContext<Theme>(ThemeContext)
  const [canHideSpinner, setCanHideSpinner] = useState<boolean>(true)

  useEffect(() => {
    if (!showSpinner) return
    setCanHideSpinner(false)
    setTimeout(() => {
      logger.writeInfo("setting setCanHideSpinner true id:", debugId)
      if (isMounted()) setCanHideSpinner(true)
    }, 500)
  }, [debugId, isMounted, showSpinner])

  const showingSpinner = showSpinner || !canHideSpinner


  return <Container justifyContent={"center"}
                    gap={"unset"}
                    alignItems={"center"}>
    <ChildrenContainer gap={"unset"}
                       className={className}
                       opaqueSpinner={opaqueSpinner}
                       showSpinner={showingSpinner}
                       withRows
    >
      {children}
    </ChildrenContainer>

    {showingSpinner
     ? <LoaderContainer justifyContent={"center"}
                        alignItems={"center"}
                        showSpinner={showingSpinner}>
       <Dots data-component-name={`${Loadable.COMPONENT_NAME}`}
             color={theme.styles.colorPrimary}
             size={FONT_SIZES.XXL}
             delayMS={100}
             velocity={-.25} />
     </LoaderContainer>
     : null}
  </Container>
}

Loadable = styled(Loadable)``

Loadable.defaultProps   = {}
// @ts-ignore
Loadable.COMPONENT_NAME = "Loadable"
