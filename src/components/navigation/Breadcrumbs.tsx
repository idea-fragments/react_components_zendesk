import { Icon }      from "components/Icon"
import { FlexBlock } from "components/layout/FlexBlock"
import React, {
  Children,
  FC,
  Fragment,
  PropsWithChildren,
  ReactNode
}                    from "react"
import styled        from "styled-components"
import { COLORS }    from "styles/colors"
import { SPACINGS }  from "styles/spacings"
import {
  FONT_SIZES,
  FONT_WEIGHTS
}                    from "styles/typography"


export const Breadcrumbs: FC<PropsWithChildren<{}>> = ({ children }) => {
  const numChildren    = Children.count(children)
  const isNotLastChild = (index: number) => index !== numChildren - 1
  const separator      = <Icon svg={"arrow-ios-forward-outline"}
                               color={COLORS.HUB_SPOT_ORANGE} />


  return <Container>
    {Children.map(children, (c: ReactNode, i) => (
      isNotLastChild(i) ? (
        <Fragment>
          {c}
          {separator}
        </Fragment>
      ) : <span>{c}</span>
    ))}
  </Container>
}

const Container = styled(FlexBlock)`
  margin-top: ${SPACINGS.SM};
  align-items: center;

  color: ${COLORS.HUB_SPOT_ORANGE};
  font-weight: ${FONT_WEIGHTS.REGULAR} !important;

  & > *:last-child {
    margin-top: -.15em;
    font-size: ${FONT_SIZES.MD};
  }
`
