// @flow

import { FlexBlock }                       from "components/layout/FlexBlock"
import { useContext, useEffect, useState } from "react"
import * as React                          from "react"
import { Dots }                            from "@zendeskgarden/react-loaders"
import type { Theme }                      from "styles/theme/Theme.type"
import { FONT_SIZES }                      from "styles/typography"
import styled, { ThemeContext }            from "styled-components"

const Container = styled(FlexBlock)`
  height: 100%;
  width: 100%;
  position: relative;
`

const LoaderContainer = styled(FlexBlock)`
  height: 100%;
  width: 100%;
  position: absolute;
`

const ChildrenContainer = styled(FlexBlock)`
  width: 100%;
  opacity: ${({ showSpinner }) => showSpinner ? ".3" : "1"};
`

export let Loadable = ({ children, showSpinner, className }) => {
    const theme                               = useContext<Theme>(ThemeContext)
    const [canHideSpinner, setCanHideSpinner] = useState<boolean>(true)

    useEffect(() => {
        if (!showSpinner) return
        setCanHideSpinner(false)
        setTimeout(() => {setCanHideSpinner(true)}, 500)
    }, [showSpinner])

    const showingSpinner = showSpinner || !canHideSpinner

    return <Container justify={"center"}
                      spacing={null}
                      className={className}
                      alignItems={"center"}>
        <ChildrenContainer showSpinner={showingSpinner}>
            {children}
        </ChildrenContainer>

        {showingSpinner
         ? <LoaderContainer justify={"center"}
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
Loadable.COMPONENT_NAME = "Loadable"
