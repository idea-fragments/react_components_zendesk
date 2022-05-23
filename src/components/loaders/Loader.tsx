import { FlexBlock }            from "components/layout/FlexBlock"
import { Dots }                 from "components/loaders/Dots"
import { useContext }           from "react"
import React                    from "react"
import { useObserver }          from "mobx-react"
// @ts-ignore
import { useStores }            from "stores/useStores"
import { Theme }                from "styles/theme/Theme.type"
import { FONT_SIZES }           from "styles/typography"
import styled, { ThemeContext } from "styled-components"

type Props = {
  forceVisibility: boolean,
  delay: number,
}

const Container = styled(FlexBlock)`
  background: ${({ theme }) => theme.styles.pageBackground}B3;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
`

export const Loader = ({ forceVisibility }: Props) => {
  const { ui } = useStores()
  const theme  = useContext<Theme>(ThemeContext)

  return useObserver(() => {
    if (!ui.isLoaderVisible && !forceVisibility) {
      return null
    }

    return (
      <Container justify={"center"} alignItems={"center"}>
        <Dots color={theme.styles.colorPrimary} size={FONT_SIZES.XXL} />
      </Container>
    )
  })
}

Loader.defaultProps = {
  forceVisibility: false,
}
