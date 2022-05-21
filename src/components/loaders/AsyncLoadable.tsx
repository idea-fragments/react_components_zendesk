// @ts-ignore
import { Dots }                            from "@zendeskgarden/react-loaders"
import { FlexBlock }                       from "components/layout/FlexBlock"
import { StyledComponentProps }       from "components/StyledComponentProps.type"
import React, { FC, useContext, useState } from "react"
import styled, { ThemeContext }            from "styled-components"
import { Theme }                      from "styles/theme/Theme.type"
import { FONT_SIZES }                      from "styles/typography"
import { returnAfterMinimum }              from "utils/dateTimeHelpers"
import { PromiseFunc }                from "utils/function.types"

type AsyncLoadFunc = <T>(f: PromiseFunc<any, T>) => Promise<T>
export type RenderProp = { withLoading: AsyncLoadFunc }

type Props = {
  children: (p: RenderProp) => JSX.Element
} & StyledComponentProps

export let AsyncLoadable: FC<Props> = ({ children, className }) => {
  const theme                        = useContext<Theme>(ThemeContext)
  const [isLoading, setLoadingState] = useState<boolean>(false)

  const withLoading = async <T, >(f: PromiseFunc<any, T>): Promise<T> => {
    setLoadingState(true)

    let val: Promise<any>
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
      <Dots color={theme.styles.colorPrimary}
            size={FONT_SIZES.XXL}
            delayMS={100}
            velocity={-.25} />
    </Container>
  }

  return children({ withLoading })
}

AsyncLoadable = styled(AsyncLoadable)``

const Container = styled(FlexBlock)`
  height: 100%;
  width: 100%;
  min-width: 200px;
  min-height: 200px;
`
