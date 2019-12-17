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
`

export let Loadable = ({ children, showSpinner, className }) => {
    const theme                               = useContext<Theme>(ThemeContext)
    const [canHideSpinner, setCanHideSpinner] = useState<boolean>(false)

    useEffect(() => {
        if (!showSpinner) return

        setCanHideSpinner(false)
        setTimeout(() => {setCanHideSpinner(true)}, 500)
    }, [showSpinner])

    if (!showSpinner && canHideSpinner) return children

    return <Container justify={"center"}
                      className={className}
                      alignItems={"center"}>
        <Dots data-component-name={`${Loadable.COMPONENT_NAME}`}
              color={theme.styles.colorPrimary}
              size={FONT_SIZES.XXL}
              delayMS={100}
              velocity={-.25} />
    </Container>

}

Loadable = styled(Loadable)``

Loadable.defaultProps   = {}
Loadable.COMPONENT_NAME = "Loadable"
