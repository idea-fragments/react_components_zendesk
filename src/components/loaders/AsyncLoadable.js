// @flow

import { FlexBlock }                   from "components/layout/FlexBlock"
import type { StyledComponentProps }   from "components/StyledComponentProps.type"
import React, { useContext, useState } from "react"
import type { Node }                   from "react"
import { Dots }       from "@zendeskgarden/react-loaders"
import type { Theme } from "styles/theme/Theme.type"
import { FONT_SIZES } from "styles/typography"
import styled, { ThemeContext } from "styled-components"
import { returnAfterMinimum }          from "utils/dateTimeHelpers"
import type { PromiseFunc }            from "utils/function.types"

type AsyncLoadFunc = <T>(PromiseFunc<any, T>) => Promise<T>
export type RenderProp = { withLoading :AsyncLoadFunc }

type Props = {
    children :(RenderProp) => Node
} & StyledComponentProps

export let AsyncLoadable = ({ children, className } :Props) => {
    const theme                        = useContext<Theme>(ThemeContext)
    const [isLoading, setLoadingState] = useState<boolean>(false)

    const withLoading = async <T>(f :PromiseFunc<any, T>) :Promise<T> => {
        setLoadingState(true)

        let val :Promise<*>
        try {
            val = await returnAfterMinimum(500, f)
        } finally {
            setLoadingState(false)
        }

        return val
    }

    if (isLoading) {
        return <Container justify={"center"}
                          className={className}
                          alignItems={"center"}>
            <Dots data-component-name={`${AsyncLoadable.COMPONENT_NAME}`}
                  color={theme.styles.colorPrimary}
                  size={FONT_SIZES.XXL}
                  delayMS={100}
                  velocity={-.25} />
        </Container>
    }

    return children({ withLoading })
}

AsyncLoadable                = styled(AsyncLoadable)``
AsyncLoadable.defaultProps   = {}
AsyncLoadable.COMPONENT_NAME = "AsyncLoadable"

const Container = styled(FlexBlock)`
  height: 100%;
  width: 100%;
  min-width: 200px;
  min-height: 200px;
`
